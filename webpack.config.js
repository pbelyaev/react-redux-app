const path = require('path');

module.exports = {
  entry: './src/App.js',

  output: {
    path: path.resolve(__dirname, 'build/js'),
    filename: 'app.js',
  },

  module: {
    loaders: [
      { test: /\.js$/, exclude: /node\_modules/, use: 'babel-loader' },
    ],
  },
};
