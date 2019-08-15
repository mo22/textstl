const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

let config = module.exports = {
  context: path.resolve(__dirname),

  mode: 'development',

  module: {
    rules: [

      {
        test: /\.tsx?$/,
        use: 'awesome-typescript-loader',
      },

      {
        test: /\.(png|jpg|jpeg)$/,
        use: 'url-loader',
      },

    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      chunks: ['index'],
      filename: 'index.html',
      inject: 'body',
    }),
  ],

  target: 'web',

  output: {
    path: path.resolve('./dist'),
    filename: '[name].js',
    pathinfo: true,
  },

  entry: {
    index: './src/index.tsx',
  },

};

