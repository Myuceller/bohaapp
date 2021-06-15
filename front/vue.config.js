module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  devServer: {
    historyApiFallback: true,
  },
  filenameHashing: false,
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
