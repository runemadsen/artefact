var _ = require('lodash');
var db = require('./db');
var auth = require('passport-local-authenticate');
var Model = require('./model');
var squel = require("squel").useFlavour('postgres');
var _ = require('lodash');

// Instance functions
// ------------------------------------

var User = function(attrs) {
  if(attrs) _.assign(this, attrs);
};

_.assign(User, Model);
_.assign(User.prototype, Model.prototype, {

  modelName: 'user',

  attributes: {
    create: ['username', 'email', 'password_hash', 'password_salt'],
    update: ['username', 'email']
  },

  beforeCreate: function(attrs, cb) {

    if(_.isEmpty(attrs.username) || _.isEmpty(attrs.email) || _.isEmpty(attrs.password)) {
      return cb("One or more fields are empty");
    }

    auth.hash(attrs.password, User.hashOptions(), function(err, hashed) {
      if(err) return cb(err);
      attrs.password_hash = hashed.hash;
      attrs.password_salt = hashed.salt;
      cb(null, attrs);
    });
  },

  updatePassword: function(newPass, cb) {
    if (newPass === '') {
      return cb("Password cannot be empty");
    }
    var user = this;
    auth.hash(newPass, User.hashOptions(), function(err, hashed) {
      if(err) return cb(err);
      var attrs = {password_hash: hashed.hash, password_salt: hashed.salt};
      var query = squel.update().table('users').setFields(attrs).where('id = ?', user.id).returning('*').toParam();
      db.first(query.text, query.values, function(err, row) {
        _.assign(user, row);
        cb(err, user);
      });
    });
  }

});

// Class functions
// ------------------------------------

User.hashOptions = function() {
  return {
    saltlen: 32,
    keylen: 512,
    iterations: parseInt(process.env.HASH_ITERATIONS) || 25000,
    encoding: 'hex'
  }
}

User.verify = function(username, password, cb) {

  User.findOneBy({ username:username }, function(err, user) {

    // if there was an error
    if(err) { return cb(err, false); }

    // if there was no user
    if (!user) { return cb(null, false, {message: "User does not exist"}); }

    // verify password with user salt and hash
    var hashed = { hash: user.password_hash, salt: user.password_salt };
    auth.verify(password, hashed, User.hashOptions(), function(err, verified) {

      // if there was a error comparing hashes
      if(err) { return cb(err, false) };

      // otherwise check for match
      if (!verified) { return cb(null, false, {message: "Incorrect password"}); }

      // correct user and hash
      else {return cb(null, user); }
    });
  });
};

module.exports = User;
