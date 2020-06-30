const merge = require('webpack-merge');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const base = require('./base');

module.exports = merge(base, {
  mode: 'production',
  output: {
    filename: 'bundle.min.js',
  },
  devtool: false,
  performance: {
    maxEntrypointSize: 1900000,
    maxAssetSize: 1900000,
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          output: {
            comments: false,
          },
        },
      }),
    ],
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      test: /\.(woff(2)?|ttf|eot|svg|fnt)(\?v=\d+\.\d+\.\d+)?$/,
      options: {
        loaders: {
          name: '[name].[ext]',
          outputPath: 'fonts/'
        }
      }
    })
  ]
});
