import Vue from 'vue'
import App from './App'
import uView from 'uview-ui'
Vue.use(uView)
Vue.config.productionTip = false

// 此处为演示vuex使用，非uView的功能部分
import store from '@/store'

// 引入uView提供的对vuex的简写法文件
let vuexStore = require(`@/store/$u.mixin.js`)
Vue.prototype.initUserInfo = function () {
  // 初始化当前登录用户的信息
  clearInterval(Vue.prototype.TIME_ER)
  return new Promise((resove, reject) => {
    this.$u.api
      .getUserInformation()
      .then((res) => {
        console.log(`resresresres`, res)
        this.$u.vuex(`vuex_user`, res)
        if (!!res === false) {
          return false
        }
        Vue.prototype.TIME_ER = setInterval(() => {
          this.$u.api.getGlobalNotification().then((res) => {
            res = {
              ...this.vuex_getGlobalNotificationRes,
              ...res,
            }
            this.$u.vuex(`vuex_getGlobalNotificationRes`, res)
          })
        }, 3e3)
        console.log(`Vue.prototype.TIME_ER`, Vue.prototype.TIME_ER)
        resove(res)
      })
      .catch((err) => {
        uni.$u.toast(`初始化用户信息失败`)
        // this.toPage(`/pages/my/register`, {pageType: `signIn`})
        reject(err)
      })
  })
}
Vue.mixin(vuexStore)
Vue.mixin({
  methods: {
    toPage(url, data) {
      uni.$u.route(url, data)
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
