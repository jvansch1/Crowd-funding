const path = require("path");
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  context: __dirname,

  entry: path.join(__dirname, 'client/index.js'),

  output: {
      path: __dirname,
      filename: "bundle.js",
      publicPath: '/'
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: 'babel-loader'
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },

  devServer: {
    compress: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    contentBase: './client',
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'templates/root.html'
    })
  ],
  devtool: 'source-map'

};
