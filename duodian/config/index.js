// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')

module.exports = {
  build: {
    env: require('./prod.env'),
    index: path.resolve(__dirname, '../dist/index.html'),
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    productionSourceMap: true,
    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],
    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  },
  dev: {
    env: require('./dev.env'),
    port: 8080,
    autoOpenBrowser: true,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {
        '/api': { // 名字
          target: 'https://gatewx.dmall.com/customersite/searchWareByCategory?param=%7B%22pageNum%22%3A1%2C%22pageSize%22%3A30%2C%22venderId%22%3A%221%22%2C%22storeId%22%3A%2210437%22%2C%22sort%22%3A%221%22%2C%22categoryId%22%3A10262%2C%22categoryLevel%22%3A3%2C%22cateSource%22%3A1%2C%22bizType%22%3A%221%22%7D&token=3A6084F73395D67F998DCB9DCDC1CE7E856FE7F0E95F83CCC0EF6EC476584D0FE4BF7767A7636E9213F9908179F1C39FAE044D5E9018C345357571051176CF8CBC69ADA04F60EE748F14FD5F8F4FB6435A5ADBAA6722880CF2288F53D15553B2A1488B62DAC2CA9B9D2FB3DD49F63E4FC8928D0676DB6E0E37760F5DCD0EA1EE&source=2&tempid=C78D1809503000027F691B763750FB60&pubParam=%7B%7D&_=1496649352929', // 目标地址
            changeOrigin: true,
              pathRewrite: {
                '^/api': '/' // 名字
              }
        },
        '/api1': { // 名字
          target: 'https://gatewx.dmall.com/customersite/index?param=%7B%22pairs%22%3A%221-0-10437%22%2C%22bizType%22%3A%221%22%7D&token=3A6084F73395D67F998DCB9DCDC1CE7E856FE7F0E95F83CCC0EF6EC476584D0FE4BF7767A7636E9213F9908179F1C39FAE044D5E9018C345357571051176CF8CBC69ADA04F60EE748F14FD5F8F4FB6435A5ADBAA6722880CF2288F53D15553B2A1488B62DAC2CA9B9D2FB3DD49F63E4FC8928D0676DB6E0E37760F5DCD0EA1EE&source=2&tempid=C78D1809503000027F691B763750FB60&pubParam=%7B%7D&_=1496651403746', // 目标地址
            changeOrigin: true,
              pathRewrite: {
                '^/api1': '/' // 名字
              }
        },
    },
    // CSS Sourcemaps off by default because relative paths are "buggy"
    // with this option, according to the CSS-Loader README
    // (https://github.com/webpack/css-loader#sourcemaps)
    // In our experience, they generally work as expected,
    // just be aware of this issue when enabling this option.
    cssSourceMap: false
  }
}
