const config = require(`./common/config.js`) || {}

module.exports = {
  css: {
    loaderOptions: {
      scss: {
        // https://vue-loader.vuejs.org/zh/guide/pre-processors.html#共享全局变量
        // 你也可以从一个文件读取，例如 `variables.scss`
        // 如果 sass-loader 版本 = 8，这里使用 `prependData` 字段
        // 如果 sass-loader 版本 < 8，这里使用 `data` 字段
        prependData: `
          @import "~@/uni.scss";
          $uni-static-url: '${config.staticUrl}';
        `,
      },
    },
  },
}
