<template>
  <view class="container">
    <u-modal
      v-model="phoneAuthPopup"
      :mask-close-able="true"
      :title="projectName"
      :show-confirm-button="false"
    >
      <div class="tips">为了更好地用户体验，需要您授权手机号</div>
      <button
        class="register"
        type="primary"
        open-type="getPhoneNumber"
        @getphonenumber="getPhoneNumber"
        :disabled="authLoaing"
        :loading="authLoaing"
      >
        {{ authLoaing ? '授权中...' : '去授权' }}
      </button>
    </u-modal>
    <view class="wx-auth-container">
      <div class="box">
        <view class="logo-info">
          <text class="title">欢迎进入{{ projectName }}</text>
        </view>
        <view class="small-tips">
          <view>为您提供优质服务,{{ projectName }}需要获取以下信息</view>
          <view>您的公开信息（昵称、头像）</view>
        </view>
        <view class="btns">
          <button
            type="primary"
            :disabled="logingFlag"
            bindtap="getUserProfile"
            @click="getUserProfile()"
            class="btn-auth"
          >
            登录
          </button>
          <div @click="backToHome" class="btn-callback">暂不登录</div>
        </view>
        <div class="privacy">
          <u-checkbox shape="circle" v-model="checked">
            <div class="flex">
              <div>阅读并同意</div>
            </div>
          </u-checkbox>
          <span class="gWxColor">
            <span @click="clickItem(`privacy`)">《隐私协议》</span>
            <span @click="clickItem(`user`)">《用户协议》</span>
          </span>
        </div>
      </div>
    </view>
  </view>
</template>

<script>
import config from '@/common/config'

export default {
  data() {
    return {
      checked: false,
      // 是否展示手机号码授权弹窗，默认第一步不展示，要先获取用户基础信息
      phoneAuthPopup: false,
      // 授权信息展示，商城名称
      projectName: config.name,
      // 微信返回信息，用于揭秘信息，获取sessionkey
      code: ``,
      logingFlag: false,
      authLoaing: false,
      // 微信昵称
      nickName: ``,
      // 微信头像
      image: ``,
    }
  },

  // 微信小程序进入页面，先获取code，否则几率出现code和后续交互数据不对应情况
  mounted() {
    // 小程序默认分享
    uni.showShareMenu({
      withShareTicket: true,
    })

    // 获取code
    uni.login({
      success: (res) => {
        if (res.errMsg === `login:ok`) {
          this.code = res.code
        } else {
          uni.showToast({
            title: `系统异常，请联系管理员！`,
          })
        }
      },
    })
  },
  methods: {
    clickItem(type) {
      this.viewHtml(async () => {
        const res = await this.$u.api.getBlogDetails(1)
        return {
          title: res.title,
          html: res.content,
        }
      })
    },
    back() {},
    backToHome() {
      uni.navigateBack()
    },

    // 获取用户信息
    getUserProfile(e) {
      console.log(`getUserProfile`, e)
      if (!this.checked) {
        uni.showToast({
          title: `请勾选协议`,
          icon: `none`,
        })
        return
      }
      this.logingFlag = true
      if (this.code) {
        uni.getUserProfile({
          desc: `用于完善会员资料`, // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
          success: async (res) => {
            console.log(`success`, res)
            this.nickName = res.userInfo.nickName
            this.image = res.userInfo.avatarUrl
            this.phoneAuthPopup = true
          },
          fail: (res) => {
            console.log(`fail`, res)
          },
        })

        this.logingFlag = false
      }
    },

    // 获取手机号授权
    async getPhoneNumber(e) {
      console.log(`getPhoneNumber`, e)
      this.authLoaing = true
      let iv = e.detail.iv
      let encryptedData = e.detail.encryptedData
      if (!encryptedData) {
        uni.showToast({
          title: `请授予手机号码权限，手机号码会和会员系统用户绑定！`,
          icon: `none`,
        })
        this.authLoaing = false
        return
      }
      const data = {
        encryptedData,
        iv,
        code: this.code,
        image: this.image,
        nickName: this.nickName,
      }
      const wxLoginRes = await this.$u.api.wxLogin(data)
      this.$u.vuex(`vuex_token`, wxLoginRes.token)
      const getUserRes = await this.$u.api.getUser()
      this.$u.vuex(`vuex_user`, getUserRes)

      uni.showToast({
        title: `登录成功!`,
        duration: 2000,
        icon: `none`,
      })
      setTimeout(() => {
        uni.redirectTo({
          url: config.homePage,
        })
      }, 2000)
    },

    getOwnerHomes(mobile) {
      // ...
    },
    login() {},
  },
}
</script>
<style lang="scss" scoped>
/*微信授权*/
page {
  background-color: #ffffff;
}

.register {
  color: $weChat-color !important;
  border: none !important;
  background: #fff !important;
}

.wx-auth-container {
  width: 100%;
  margin-top: 20%;
}

.logo-info {
  display: flex;
  flex-wrap: nowrap;
  justify-content: flex-start;
  flex-direction: row;
  align-items: flex-start;
  padding: 20rpx;

  flex-direction: column;
  font-weight: bold;
}

text.title,
text.shop {
  display: inline-block;
  font-size: 60rpx;
  color: #333;
}

text.shop {
  display: inline-block;
  font-size: 55rpx;
  color: #333;
}

.box {
  margin: 0 32rpx;
}

/* 文字提示*/
.small-tips {
  width: 94%;
  padding: 20rpx;
  font-size: 24rpx;
  margin: 0 0 20rpx;
  color: #999;
}

.tips {
  width: 80%;
  text-align: left;
  margin: 6% 10%;
  margin-top: 48rpx;
  line-height: 1.75;
}

.btn-auth {
  width: 92%;
  margin: 0 auto 40rpx;
  border-radius: 100px;
}
.btn-callback {
  text-align: center;
  font-size: 30rpx;
  background: #ededed;
  height: 90rpx;
  line-height: 90rpx;
  border-radius: 100px;
  width: 92%;
  margin: 0 auto;
}

.btn-callback {
  text-align: center;
  font-size: 30rpx;
  background: #ededed;
  height: 90rpx;
  line-height: 90rpx;
  border-radius: 100px;
  width: 92%;
  margin: 0 auto;
}

.btns {
  margin-top: 100rpx;
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
}

.privacy {
  text-align: center;
  margin-top: 20rpx;
  display: inline-block;
  width: 100%;
}
</style>
