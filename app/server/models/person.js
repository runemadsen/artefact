var db = require('./db');
var _ = require('lodash');
var Model = require('./model');

// Instance functions
// ------------------------------------

var Person = function(attrs) {
  if(attrs) _.assign(this, attrs);
};

_.assign(Person, Model);
_.assign(Person.prototype, Model.prototype, {

  modelName: 'person',

  attributes: {
    create: ['type', 'name', 'company', 'address_1', 'address_2', 'city', 'state', 'postal', 'phone', 'email', 'user_id'],
    update: ['type', 'name', 'company', 'address_1', 'address_2', 'city', 'state', 'postal', 'phone', 'email']
  }

});

module.exports = Person;
