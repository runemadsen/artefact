// Frontend dev server
/*var path = require('path');
var express = require('express');
var webpack = require('webpack');
var config = require('./webpack.config.js');
var app = express();
var compiler = webpack(config);
app.use(require('webpack-dev-middleware')(compiler, {
  publicPath: config.output.publicPath,
  stats: {
    colors: true,
    hash: false,
    timings: true,
    chunks: false,
    chunkModules: false,
    modules: false
  }
}));
app.use(require('webpack-hot-middleware')(compiler));
app.listen(3001, function onStart(err) {
  if (err) { console.log(err); }
  console.info('Frontend listening on port 3001');
});*/

// Frontend dev server
var webpack = require('webpack')
var WebpackDevServer = require('webpack-dev-server')
var config = require('./webpack.config')
new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  compress: true,
  stats: {
    colors: true,
    hash: true,
    timings: true,
    chunks: false
  }
}).listen(3001, 'localhost', function (err) {
  if (err) { console.log(err) }
  console.log('Frontend is listening on port 3001')
})

// Backend dev server
var nodemon = require('nodemon');
nodemon({
  script: "app/server",
  verbose: true,
  watch: "app",
  ext: "js"
});

nodemon.on('restart', function (files) {
  console.log('Backend restarting due to: ', files);
});
