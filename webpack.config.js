var path = require('path');
var webpack = require('webpack');

require('dotenv').config()

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: {
    app: './app/app',
    vendor: [
      'react',
      'react-router',
      'redux',
      'react-dom',
      'lodash',
      'bluebird',
      'humps',
      'history'
    ],
    dev: [
      'webpack-dev-server/client?http://localhost:3001',
      'webpack/hot/only-dev-server',
    ]
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: 'http://localhost:3001/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filname: 'vendor.js'
    })
  ],

  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['react-hot-loader', 'babel-loader'],
        include: path.join(__dirname, 'app'),
        exclude: path.join(__dirname, 'app', 'server')
      }
    ]
  }
};
