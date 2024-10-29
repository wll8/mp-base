/**
 * 文档: https://www.hongqiye.com/doc/mockm
 */
module.exports = (util) => {
  const {
    libObj: { mockjs },
  } = util
  return {
    guard: true,
    port: 9400,
    testPort: 9405,
    replayPort: 9401,
    watch: [],
    proxy: {
      '/': `http://www.httpbin.org/`, // 要代理的后端接口地址
    },
    openApi: `http://www.httpbin.org/spec.json`,
    static: [
      {
        path: `/static/`,
        fileDir: `./static-http/`,
        list: true,
      },
    ],
    api() {
      const staticUrl = `//${global.config.osIp}:${global.config.port}/static`
      return {
        // 微信登录
        '/wxLogin'(req, res) {
          return res.json({
            token: `tokentokentoken`,
          })
        },
        '/logout'(req, res) {
          return res.json({})
        },
        // 获取用户信息
        '/user'(req, res) {
          return res.json({
            name: `hello`,
            id: Date.now(),
          })
        },
      }
    },
    dbCover: true,
    db: mockjs.mock({
      blogs: [
        {
          id: 1,
          content: `mockm 是一款便于使用, 功能灵活的接口工具. 看起来不错~`,
          title: `认识 mockm 的第一天`,
        },
      ],
    }),
  }
}
