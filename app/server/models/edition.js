var db = require('./db');
var _ = require('lodash');
var Model = require('./model');
var Person = require('./person');

// Instance functions
// ------------------------------------

var Edition = function(attrs) {
  if(attrs) _.assign(this, attrs);
};

_.assign(Edition, Model);
_.assign(Edition.prototype, Model.prototype, {

  modelName: 'edition',

  attributes: {
    create: ['edition', 'edition_type', 'price', 'currency', 'status', 'work_id', 'collection_id', 'location_id'],
    update: ['edition', 'price', 'currency', 'status', 'collection_id', 'location_id']
  }

});

// This function takes an array of editions from the
// DB and batch-load the associations from the people
// table.
Edition.findAssociations = function(editions, cb) {

  var personIds = [];
  editions.forEach(function(edition) {
    if(edition.collection_id) personIds.push(edition.collection_id);
    if(edition.location_id)   personIds.push(edition.location_id);
  });
  personIds = _.uniq(personIds);

  if(personIds.length == 0) return cb();

  Person.findBy({ id: personIds }, function(err, people) {
    if(people) {
      people.forEach(function(person) {
        editions.forEach(function(edition) {
          if(edition.collection_id == person.id) edition.collection = person;
          if(edition.location_id == person.id) edition.location = person;
        });
      });
    }
    cb(err);
  });
}

module.exports = Edition;
