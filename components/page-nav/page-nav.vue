<template>
  <div>
    <u-tabbar
      class="u-tabbar"
      @change="tabbarChange"
      :value="vuex_tabbarIndex"
      height="100rpx"
      :list="tabBarlistFull"
    ></u-tabbar>
  </div>
</template>

<script>
const tabBarlist = [
  {
    iconPath: `grid`,
    selectedIconPath: `grid-fill`,
    text: `商品列表`,
    name: `goodsList`,
    path: `/pages/goodsList/goodsList`,
  },
  {
    iconPath: `file-text`,
    selectedIconPath: `file-text-fill`,
    text: `关于我们`,
    name: `about`,
    path: `/pages/about/about`,
  },
]
export default {
  data() {
    return {
      list: [],
    }
  },
  created() {},
  computed: {
    tabBarlistFull() {
      const { userType = `` } = this.vuex_user || {}
      const res = tabBarlist
        .filter((item) => {
          // 只显示对应用户应该看到的 tab
          if (item.userType) {
            return item.userType.includes(userType)
          } else {
            return true
          }
        })
        .map((item) => {
          // 需要在 tab 上显示的消息通知条数
          if (item.countFn) {
            item.count = item.countFn(this.vuex_getGlobalNotificationRes)
          }
          return item
        })
      return res
    },
  },
  methods: {
    tabbarChange(index) {
      const row = this.tabBarlistFull[index]
      this.$u.vuex(`vuex_infoList`, this.list)
      if (row.indexEvent) {
        row.indexEvent(row)
      } else {
        this.$u.vuex(`vuex_tabbarIndex`, index)
        this.$u.vuex(`vuex_tabbarName`, row.name)
      }
    },
  },
}
</script>

<style scoped lang="scss"></style>
