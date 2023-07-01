const { defineConfig } = require('@vue/cli-service')
const { VantResolver } = require('unplugin-vue-components/resolvers')
const ComponentsPlugin = require('unplugin-vue-components/webpack')
const dynamic = process.env.VUE_APP_API
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  devServer: {
    host: 'localhost',
    port: 8088,
    proxy: {
      [dynamic]: {
        target: 'http://localhost:7001',
        changeOrigin: true,
        pathRewrite: {
          [`${dynamic}`]: ''
        }
      }
    }
  },
  configureWebpack: {
    plugins: [
      ComponentsPlugin({
        resolvers: [VantResolver()]
      })
    ],
    performance: {
      hints: 'warning',
      //入口起点的最大体积
      maxEntrypointSize: 60000000,
      //生成文件的最大体积**加粗样式**
      maxAssetSize: 40000000,
      //只给出 js 文件的性能提示
      assetFilter: function (assetFilename) {
        return assetFilename.endsWith('.js')
      }
    }
  }
})
