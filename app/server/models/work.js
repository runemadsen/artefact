var db = require('./db');
var _ = require('lodash');
var Edition = require('./edition');
var Person = require('./person');
var Model = require('./model');
var squel = require("squel").useFlavour('postgres');
var async = require('async');

// Instance functions
// ------------------------------------

var Work = function(attrs) {
  if(attrs) _.assign(this, attrs);
};

_.assign(Work, Model);
_.assign(Work.prototype, Model.prototype, {

  modelName: 'work',

  attributes: {
    create: ['user_id', 'title', 'created_at', 'medium', 'height', 'depth', 'dimension_unit', 'dimension_text', 'editioned', 'artist_id'],
    update: ['title', 'created_at', 'medium', 'width', 'height', 'depth', 'dimension_unit', 'dimension_text', 'artist_id']
  },


  beforeDestroy: function(work, cb) {
    var query = squel.delete().from('editions').where('work_id = ?', work.id).returning('*');
    query = query.toParam();
    Edition.query(query.text, query.values, function(err, editions) {
      if (err) {
        return cb(err);
      }
      cb(null, work);
    });
  },

  afterCreate: function(work, cb) {
    if(work.editioned) {
      cb(null, work);
    }
    else {
      Edition.create({ edition_type: 'ONLY', work_id: work.id }, function(err, edition) {
        cb(err, work);
      });
    }
  },

  findAssociations: function(findNested, cb) {

    if(!cb) {
      cb = findNested;
      findNested = false;
    }

    var that = this;
    var chain = [];

    // Find artist
    if(this.artist_id) {
      chain.push(function(callback) {
        Person.findOneBy({ id:that.artist_id }, function(err, p) {
          that.artist = p;
          callback(err);
        });
      });
    }

    // Find edition(s)
    chain.push(function(callback) {
      Edition.findBy({ work_id:that.id }, function(err, editions) {

        if(err || editions.length == 0) return callback(err);

        if(that.editioned) that.editions = editions;
        else               that.edition = editions[0];

        if(findNested) {
          Edition.findAssociations(editions, function(err) {
            callback(err);
          });
        } else {
          callback(err)
        }

      });
    });

    async.parallel(chain, function(err, results) {
      cb(err);
    });
  }

});

// Accepts an array of Work ID's and a user ID, and checks in
// the DB whether those works belong to the user.
Work.isOwnedBy = function(workIds, userId, cb) {
  workIds = _.uniq(workIds);
  Work.findBy({ id: workIds, user_id: userId}, function(err, works) {
    cb(err, works.length == workIds.length);
  });
}

module.exports = Work;
