module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  devServer: {
    historyApiFallback: true,
  },
  outputDir:"../back/public",
  devServer:{
    proxy:{
      "/api":{
        target:"http://localhost:3000/api",
        changeOrigin: true,
        pathRewrite:{
          "^api":""
        }
      }
    }
  }
}
