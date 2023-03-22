module.exports = {
  devServer: {
    proxy: {
      '^/api': {
        target: 'http://localhost:4500',
        changeOrigin: true,
        logLevel: 'debug',
        pathRewrite: { '^/api': '/'}
      }
    }
  }
}
