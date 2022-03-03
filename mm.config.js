/**
 * 文档: https://www.hongqiye.com/doc/mockm
 */
module.exports = (util) => {
  const {
    libObj: { mockjs },
  } = util
  return {
    guard: true,
    port: 9100,
    testPort: 9105,
    replayPort: 9101,
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
      {
        path: `/h5/`,
        fileDir: `./unpackage/dist/build/h5/`,
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
