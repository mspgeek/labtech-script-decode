/**
 * Created by kgrube on 1/31/2018
 */
const path = require('path');
const webpack = require('webpack');
const {merge} = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
  devtool: 'source-map',
  mode: 'development',
  output: {
    filename: 'labtech-script-decode.js',
    path: path.resolve(__dirname, 'dist'),
    library: {
      name: 'labtech_script',
      type: 'umd',
    },
    umdNamedDefine: true,
  },
  plugins: [
    new webpack.DefinePlugin({
      IS_BROWSER: true,
    }),
  ],
});
