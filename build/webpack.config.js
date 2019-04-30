const path = require('path')
module.exports = {
  // 指定打包模式
  mode: 'development',
  entry: {
    main: ['@babel/polyfill', path.resolve(__dirname, '../src/main.js')]
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    // 打包后的js文件名称
    filename: 'js/[name].[hash:8].js',
    // 生成的 chunk 名称
    chunkFilename: 'js/[name].[hash:8].js',
    // 资源引用路径
    publicPath: './'
  },
  module: {
    rules: [
      {
        test: '/.jsx?$/',
        loader: 'babel-loader'
      },
      {
        test: '/.(scss|sass)$/',
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              implementation: 2
            }
          },
          {
            loader: 'sass-loader',
            options: {
              implementation: require('dart-sass')
            }
          },
          {
            loader: 'postcss-loader'
          }
        ]
      }
    ]
  }
}
