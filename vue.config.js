const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: [],
  publicPath: process.env.NODE_ENV === 'production' 
  ? ''
  : '/',
  assetsDir: 'assets',
  productionSourceMap: false
})
