var _ = require('lodash');
var postgrator = require('postgrator');

var db = process.env.DATABASE_URL;

if(process.argv[2] == '--test') {
  db += '_test'
}

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
