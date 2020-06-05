const path = require('path')
const resolve = function (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/wxr" : "/",
  outputDir: "dist",
  assetsDir: "static",
  lintOnSave: true, // 是否开启eslint保存检测
  productionSourceMap: false, // 是否在构建生产包时生成sourcdeMap
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
    config.optimization.runtimeChunk('single')
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [path.resolve(__dirname, './src/assets/css/common.less') ]
    }
  },
  devServer: {
    historyApiFallback: true,
    overlay: {
      warnings: true,
      errors: true
    },
    // 设置代理
    host: "0.0.0.0", // can be overwritten by process.env.HOST
    port: 8000, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
    proxy: {
      "^/api": {
          target: process.env.VUE_APP_BASE_API, // 域名
          // target: 'http://space-collect-dev.huixiaoer.com:8004/', // 域名
          ws: false, // 是否启用websockets
          changOrigin: true // 开启代理：在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
          // pathRewrite: {
          //     "/api": "",
          // }
      }
    }
  }
}