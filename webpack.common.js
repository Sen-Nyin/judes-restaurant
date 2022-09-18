const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',

  module: {
    rules: [
      {
        test: /\.html$/,
        use: ['html-loader'],
      },
      {
        test: /\.(svg|png|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    // new MiniCssExtractPlugin({
    //   filename: 'styles.css',
    //   chunkFilename: 'index.[contenthash].css',
    // }),
    new HtmlWebpackPlugin({
      template: './src/template.html',
      title: 'Webpack Testing',
    }),
  ],
};
