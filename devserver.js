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
// This serves the css from /dist right now compiled from package.json
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
