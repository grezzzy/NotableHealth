const path = require('path');
var SRC_DIR = path.join(__dirname, 'client');
var DIST_DIR = path.join(__dirname, 'public');


module.exports = {
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    filename: 'bundle.js',
    path: DIST_DIR
  },
  module: {
    rules: [
      {
        test: [/\.jsx?/],
        include: SRC_DIR,
        exclude: /node_modules/,
        use: {
          loader:'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env']
          }
        }
      }
    ]
  }
}