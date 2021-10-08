import config from '@/common/config.js'
import store from '@/store'

const install = (Vue, vm) => {
  Vue.prototype.$u.http.setConfig({
    baseUrl: config.baseUrl,
    staticUrl: config.staticUrl,
    originalData: true,
  })
  // 请求拦截，配置Token等参数
  Vue.prototype.$u.http.interceptor.request = (config) => {
    config.header.authorization = store.state.vuex_token
    return config
  }
  // 响应拦截，判断状态码是否通过
  Vue.prototype.$u.http.interceptor.response = (res) => {
    if (String(res.statusCode).match(/^2/)) {
      return res.data
    } else {
      res.config.showLoading && uni.$u.toast(res.message || `网络数据错误`)
      throw res.message
    }
  }
}

export default {
  install,
}
