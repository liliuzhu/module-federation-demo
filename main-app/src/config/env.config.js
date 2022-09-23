const BUILD_ENV = process.env.NODE_ENV
const differentEnvConfig = {
  dev: {
    publicPath: 'http://aa.renrenaiche.cn:8002/',
    devtool: 'cheap-source-map',
    htmlFilename: 'index.html',
    mfcRemotesPath: {
      base_vue_2_x: 'http://rrc.58cdn.com.cn/rrc-fe/partner/partners-ceres-base/vue2/alpha/'
    }
  },
  pro: {
    htmlFilename: 'index.html',
    publicPath: 'https://busi.rrcimg.com/mis-partners/pro/',
    devtool: false,
    mfcRemotesPath: {
      base_vue_2_x: 'https://rrc.58cdn.com.cn/rrc-fe/partner/partners-ceres-base/vue2/pro/'
    }
  }
}
module.exports = differentEnvConfig[BUILD_ENV]
