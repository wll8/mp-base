const base = {
  name: `demo`,
  whitelistPage: [
    `/pages/example/home`,
    `/pages/example/api`,
    `/pages/passport/wechatMPLogin`,
    `/pages/html/index`,
  ],
  loginPage: `/pages/passport/wechatMPLogin`,
  homePage: `/pages/example/home`,
}
const config = {
  development: {
    baseUrl: `http://127.0.0.1:9400`,
    staticUrl: `http://127.0.0.1:9400/static`,
  },
  production: {
    baseUrl: ``,
    staticUrl: ``,
  },
}[process.env.NODE_ENV]

module.exports = {
  ...base,
  ...config,
}
