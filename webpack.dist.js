/**
 * Created by kgrube on 1/31/2018
 */
const TerserPlugin = require('terser-webpack-plugin');
const webpack = require('webpack');
const {merge} = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
  devtool: 'source-map',
  mode: 'production',
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
  plugins: [
    new webpack.DefinePlugin({
      IS_BROWSER: true,
    }),
  ],
});
