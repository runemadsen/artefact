var db = require('./db');
var _ = require('lodash');
var pluralize = require('pluralize')
var async = require('async');
var squel = require("squel").useFlavour('postgres');

// Instance functions
// ------------------------------------

var Model = function() {
  if(attrs) _.assign(this, attrs);
};

Model.prototype = {

  attributes: {},

  update: function(attrs, callback) {

    var that = this;

    var chain = [function(cb) {
      cb(null, attrs);
    }];

    if(this.beforeUpdate) chain.push(_.bind(this.beforeUpdate, this));

    chain.push(function(attrs, cb) {

      if(that.attributes.update) {
        attrs = _.pick(attrs, that.attributes.update);
      }

      if(_.isEmpty(attrs)) {
        return cb(null, that);
      }

      var table = pluralize(that.modelName);
      var query = squel.update().table(table).setFields(attrs).where('id = ?', that.id).returning('*').toParam();

      db.first(query.text, query.values, function(err, row) {
        if(!err) _.assign(that, row);
        cb(err, that);
      });

    });

    if(this.afterUpdate) chain.push(_.bind(this.afterUpdate, this));

    async.waterfall(chain, callback);
  },

  destroy: function(callback) {
    var that = this;

    var chain = [function(cb) {
      cb(null, that);
    }];

    if(this.beforeDestroy) {
      chain.push(_.bind(this.beforeDestroy, this));
    }

    chain.push(function(that, cb) {
      var table = pluralize(that.modelName);
      var query = squel.delete().from(table).where("id = ?", that.id).returning('*').toParam();
      db(query.text, query.values, function(err, row) {
        if(err || !row) return cb(err, null);
        _.assign(that, row);
        cb(null, that);
      });
    });

    if(this.afterDestroy) chain.push(_.bind(this.afterdestroy, this));

    async.waterfall(chain, callback);
  }

}

// Class functions
// ------------------------------------

// Executes a query on the DB and converts the returning
// rows into instances of the model. Can be used where
// complicated queries are needed.
Model.query = function(sql, values, cb, returnOne) {

  var Klass = this;
  var table = pluralize(Klass.prototype.modelName);

  db(sql, values, function(err, rows) {

    if(err || !rows) return cb(err, null);

    var models = _.map(rows, function(row) {
      var model = new Klass();
      _.assign(model, row);
      return model;
    });

    cb(null, returnOne ? models[0] : models);

  });
}

Model.create = function(attrs, callback) {

  var Klass = this;

  var chain = [function(cb) {
    cb(null, attrs);
  }];

  if(Klass.prototype.beforeCreate) chain.push(_.bind(Klass.prototype.beforeCreate, this));

  chain.push(function(attrs, cb) {
    if(Klass.prototype.attributes.create) {
      attrs = _.pick(attrs, Klass.prototype.attributes.create);
    }
    var table = pluralize(Klass.prototype.modelName);
    var query = squel.insert().into(table).setFields(attrs).returning('*').toParam();
    Klass.query(query.text, query.values, cb, true);
  });

  if(Klass.prototype.afterCreate) chain.push(_.bind(Klass.prototype.afterCreate, this));

  async.waterfall(chain, callback);
}

Model.findBy = function(attrs, cb) {
  var Klass = this;
  var table = pluralize(Klass.prototype.modelName);
  var query = squel.select().from(table);
  _.each(attrs, function(v, k) {
    if(_.isArray(v))
      query = query.where(k + ' IN ?', v);
    else
      query = query.where(k + ' = ?', v);
  });
  query = query.toParam();
  Klass.query(query.text, query.values, cb);
}

Model.findOneBy = function(attrs, cb) {
  var Klass = this;
  var table = pluralize(Klass.prototype.modelName);
  var query = squel.select().from(table);
  _.each(attrs, function(v, k) {
    if(_.isArray(v))
      query = query.where(k + ' IN ?', v);
    else
      query = query.where(k + ' = ?', v);
  });
  query = query.limit(1).toParam();
  Klass.query(query.text, query.values, cb, true);
}

module.exports = Model;
