const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  pluginOptions: {
    webpackBundleAnalyzer: {
      openAnalyzer: false, // 자동으로 open하지 않음
      analyzerMode: 'static' /* 분석파일 html 보고서를 dist 폴더에 저장한다  */,
      reportFilename: 'manbalboy-bundle-report.html', // 리포트이름
    },
  },
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
