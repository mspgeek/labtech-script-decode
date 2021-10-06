/**
 * Created by kgrube on 1/31/2018
 */
const path = require('path');

module.exports = {
  entry: './lib/index.js',
  output: {
    filename: 'labtech-script-decode.min.js',
    path: path.resolve(__dirname, 'dist'),
    library: {
      name: 'labtech_script',
      type: 'umd',
    },
    umdNamedDefine: true,
  },
  resolve: {
    fallback: {
      'stream': require.resolve('stream-browserify'),
      'timers': require.resolve('timers-browserify'),
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
};
