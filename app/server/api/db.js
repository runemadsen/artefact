var db = require('pg-query');
db.connectionParameters = process.env.DATABASE_URL;
module.exports = db;
