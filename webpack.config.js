// 如果 webpack.config.js 存在，则 webpack 命令将默认选择使用它。

const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
//入口文件名改变或者添加新的文件时可以解决打包后入口文件应用路径和名称的问题
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
  // entry: './src/index.js',
  entry: {
    app: './src/index.js',
    print: './src/print.js'
  },
  devtool: 'inline-source-map', //错误提示
  devServer: {
    contentBase: './dist'
  },
  plugins: [
    new CleanWebpackPlugin(['dist']), // 每次打包前主动清理dist文件里的内容
    new HtmlWebpackPlugin({
      title: 'Output Management' //默认生成最新的index.html文件，替换原来的，所有的bundle会自动添加到html中
    })
  ],
  output: {
    // filename: 'main.js',
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
}
