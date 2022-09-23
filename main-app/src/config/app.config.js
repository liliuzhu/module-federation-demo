const path = require('path')
const packageInfo = require(`${process.cwd()}/package.json`)
const ModuleFederationConfig = (module.exports = {
  name: `${packageInfo.name}`, // 当前应用名称
  filename: `${packageInfo.name}_${packageInfo.version}.js`, // name + version 导出的map 文件名
  exposes: {
    './mis_follow_clue_bootstrap': path.resolve(process.cwd(), './src/bootstrap')
  },
  remotes: {},
  shared: ['vue', 'vuex', 'vue-router']
})

module.exports = ModuleFederationConfig
