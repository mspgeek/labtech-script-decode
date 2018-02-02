/**
 * Created by kgrube on 1/31/2018
 */
const path = require('path');

module.exports = {
  entry: './index.js',
  output: {
    filename: 'labtech-script-decode.min.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'labtech_script',
    libraryTarget: "umd",
    umdNamedDefine: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['babel-preset-env'],
          },
        },
      },
    ],
  },
};
