var _ = require('lodash');
var postgrator = require('postgrator');

if(process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

var db = process.env.DATABASE_URL;

postgrator.setConfig({
  migrationDirectory: __dirname,
  driver: 'pg',
  connectionString: db
});

postgrator.migrate('max', function(err, migrations) {
  if(err)   console.log(err);
  postgrator.endConnection(function () {
    console.log('Done')
  });
});
