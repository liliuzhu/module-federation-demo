const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  assetsDir: 'static',
  pages: {
    index: {
      // page 的入口
      entry: 'src/main.js',
      // 模板来源
      // template: 'src/index.html',
      // 在 dist/index.html 的输出
      // filename: 'index.html',
      // 当使用 title 选项时，
      // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      title: '李留住作品展示与个人简介',
      // 在这个页面中包含的块，默认情况下会包含
      // 提取出来的通用 chunk 和 vendor chunk。
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    }
  },
  configureWebpack: (config) => {
    var a = 23
    // console.log(JSON.stringify(config));
    console.log(config, a)
    // return config;
  },
  chainWebpack: config => {
    // console.log(config.plugins)
    config.resolve.alias
      .set('vue$', 'vue/dist/vue.runtime.esm-bundler.js')
      .set('@', resolve('src'))
      .set('~', resolve('/'))
  }
})
