const webpack = require('webpack')
const merge = require('webpack-merge')
const common = require('./webpack.common')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new UglifyJSPlugin({
      // 如果使用ES6，要转译为ES5
      sourceMap: true
    })
  ]
})
