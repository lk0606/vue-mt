/* eslint-disable */

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? './'
    : '/',
  // 自动打开浏览器
  devServer: {
    open: false,
    // proxy: {
    //   '/api': {
    //     // target: 'http://192.168.3.105:3000',
    //     target: 'http://localhost:3000',
    //     ws: true,
    //     changeOrigin: false, // 跨域
    //     pathRewrite: {
    //       '^/api': '/', // rewrite path
    //     },
    //   },
    // }
  }
}
