if(process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

// Check for environment variables
var _ = require('lodash');
var required = [
  'DATABASE_URL',
  'SESSION_SECRET'
]
var missing = _.filter(required, function(r) { return !process.env[r] });
if(missing.length > 0) {
  console.error('Missing ENV vars', missing);
  process.exit()
}

// Everything from here and on is ES6
require('babel-register')
require('./server.js')
