const config = {
  development: {
    baseUrl: `http://127.0.0.1:9000`,
    staticUrl: `http://127.0.0.1:9000/static`,
  },
  production: {
    baseUrl: ``,
    staticUrl: ``,
  },
}[process.env.NODE_ENV]

module.exports = config
