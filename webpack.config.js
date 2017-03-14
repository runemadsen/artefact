var path = require('path');
var webpack = require('webpack');

require('dotenv').config()

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: {
    app: [
      'webpack-hot-middleware/client?reload=true',
      './app/app'
    ],
    vendor: [
      'react',
      'react-router',
      'redux',
      'react-dom',
      'lodash',
      'bluebird',
      'humps',
      'history'
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

  // Make sure that we don't need relative paths in require.
  // This makes it possible to do require('middleware/api') from anywhere.
  resolve: {
    modules: [ path.join(__dirname, 'app'), 'node_modules' ]
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['react-hot-loader', 'babel-loader'],
        include: path.join(__dirname, 'app'),
        exclude: path.join(__dirname, 'app', 'server')
      },
      { test: /\.scss$/,
        loaders: [
          'style',
          'css?modules&camelCase&importLoaders=1',
          'postcss-loader',
          'sass?sourceMap'
        ]
      }
    ]
  }
};
