const config = {
  development: {
    baseUrl: `http://127.0.0.1:9100`,
    staticUrl: `http://127.0.0.1:9100/h5/static`,
  },
  production: {
    baseUrl: `/`,
    staticUrl: `/h5/static`,
  },
}[process.env.NODE_ENV]

module.exports = config
