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
    ]
  }
})
