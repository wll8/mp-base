import store from '@/store'
import config from '@/common/config'

const { whitelistPage = [] } = config
let list = [`navigateTo`, `redirectTo`, `reLaunch`, `switchTab`]
list.forEach((item) => {
  uni.addInterceptor(item, {
    invoke(e) {
      const token = store.state.vuex_token
      const url = e.url.split(`?`)[0]
      if (!token && whitelistPage.length) {
        const isNext = whitelistPage.some((item) => item.startsWith(url))
        if (!isNext) {
          uni.showModal({
            content: `系统检测您暂未登录，点击确认立即跳转登录`,
            showCancel: true,
            title: `温馨提示`,
            success: (res) => {
              if (res.confirm) {
                uni.navigateTo({
                  url: config.loginPage,
                })
              }
            },
          })
        }
        return isNext
      } else {
        return true
      }
    },
    fail(err) {
      // 失败回调拦截
      console.log(err)
    },
  })
})
