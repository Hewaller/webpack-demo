// build/webpack.dev.js
const merge = require('webpack-merge')
const webpackConfig = require('./webpack.config')
module.exports = merge(webpackConfig, {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    // stats: 'errors-only' // 运行信息
    port: 8888,
    host: '0.0.0.0',
    openPage: '',
    useLocalIp: true,
    historyApiFallback: true,
    noInfo: false,
    stats: 'minimal',
    open: false,
    proxy: {}
  },
  plugins: []
})
