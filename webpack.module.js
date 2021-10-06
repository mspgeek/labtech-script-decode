/**
 * Created by kgrube on 1/31/2018
 */
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const webpack = require('webpack');
const {merge} = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
  devtool: 'source-map',
  mode: 'production',
  output: {
    filename: 'labtech-script-decode.module.min.js',
    path: path.resolve(__dirname, 'dist'),
    library: {
      name: 'labtech_script',
      type: 'umd',
    },
    umdNamedDefine: true,
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
  plugins: [new webpack.DefinePlugin({
    IS_BROWSER: false,
  })],
});
