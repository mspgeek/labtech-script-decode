/**
 * Created by kgrube on 1/31/2018
 */
const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
  devtool: 'source-map',
  output: {
    filename: 'labtech-script-decode.module.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'labtech_script',
    libraryTarget: "umd",
    umdNamedDefine: true,
  },
  plugins: [
    new webpack.DefinePlugin({
      IS_BROWSER: false,
    }),
  ],
});
