// Require Path
var path = require('path');

// Set Path For Dist and Src
var DIST_PATH = path.resolve(__dirname, 'dist');
var SRC_PATH = path.resolve(__dirname, 'src');

var config = {
  // Set Entry Point
  entry: SRC_PATH + '/app/index.js',
  // Set Output Point
  output: {
    path: DIST_PATH + '/app',
    filename: 'bundle.js',
    publicPath: '/app/'
  },
  // Set modules
  module: {
    loaders: [
      {
        test: /\.js?/,
        include: SRC_PATH,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react', 'stage-2']
        }
      },
      {
        test: /\.scss?/,
        loader: 'style-loader!css-loader!sass-loader'
      }
    ]
  }
};

module.exports = config;
