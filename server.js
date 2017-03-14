// Frontend dev server
var path = require('path');
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
app.listen(3000, function onStart(err) {
  if (err) { console.log(err); }
  console.info('Listening on port 3000');
});

// Backend dev server
// var nodemon = require('nodemon');
// nodemon("-e 'js' --ignore node_modules --exec babel-node")
// nodemon.on('start', function () {
//     console.log('App has started');
//   }).on('quit', function () {
//     console.log('App has quit');
//     nodemon.reset()
//     process.exit()
//   }).on('restart', function (files) {
//     console.log('App restarted due to: ', files);
//   });
