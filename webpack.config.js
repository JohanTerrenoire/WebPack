
const path = require("path");
// Ajout de babel
//{ test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ }

module.exports = {
  entry : `./src/index.js`,
  output : {
    filename : `./bundle.js`,
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  }
};
