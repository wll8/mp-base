import Vue from 'vue'
import App from './App'
import uView from 'uview-ui'
import '@/common/page.interceptor'
import config from './common/config'
Vue.use(uView)

// 此处为演示vuex使用，非uView的功能部分
import store from '@/store'

// 引入uView提供的对vuex的简写法文件
let vuexStore = require(`@/store/$u.mixin.js`)
Vue.mixin(vuexStore)
Vue.mixin({
  methods: {
    viewHtml(cb) {
      this.$u.vuex(`vuex_html`, {})
      uni.navigateTo({
        url: `/pages/html/index`,
        success: async (res) => {
          const data = await cb()
          this.$u.vuex(`vuex_html`, data)
        },
      })
    },
    toPage(url, data) {
      uni.$u.route(url, data)
    },
    logoutFn() {
      this.$u.api.logout()
      uni.redirectTo({ url: config.loginPage })
    },
  },
})

App.mpType = `app`
const app = new Vue({
  store,
  ...App,
})

// http拦截器，将此部分放在new Vue()和app.$mount()之间，才能App.vue中正常使用
import httpInterceptor from '@/common/http.interceptor.js'
Vue.use(httpInterceptor, app)

// http接口API抽离，免于写url或者一些固定的参数
import httpApi from '@/common/http.api.js'
Vue.use(httpApi, app)

// http接口API抽离，免于写url或者一些固定的参数
import tool from '@/common/tool.js'
Vue.use(tool, app)

if (window) {
  window.$this = app
}
if (wx) {
  wx.$this = app
}
app.$mount()
