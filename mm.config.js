/**
 * 文档: https://www.hongqiye.com/doc/mockm
 */
module.exports = (util) => {
  const {
    libObj: { mockjs },
  } = util
  return {
    guard: true,
    port: 9000,
    testPort: 9005,
    replayPort: 9001,
    watch: [],
    proxy: {
      '/': `http://www.httpbin.org/`, // 要代理的后端接口地址
    },
    openApi: `http://www.httpbin.org/spec.json`,
    static: [
      // 不同的路径访问不同的静态文件目录
      {
        path: `/static/`,
        fileDir: `./static/`,
      },
    ],
    db: {
      blogs: [
        {
          id: 1,
          content: `mockm 是一款便于使用, 功能灵活的接口工具. 看起来不错~`,
          title: `认识 mockm 的第一天`,
        },
      ],
    },
  }
}
