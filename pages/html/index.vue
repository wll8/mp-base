<template>
  <!-- 此文件路径禁止移动 -->
  <view>
    <view class="container">
      <view class="u-skeleton" v-if="!html">
        <u-empty text="暂无内容" mode="list"></u-empty>
      </view>
      <u-parse v-else :html="html"></u-parse>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      title: ``,
      html: ``,
    }
  },
  onLoad() {},
  watch: {
    vuex_html: {
      immediate: true,
      handler() {
        this.title = this.vuex_html.title
        this.html = this.vuex_html.html
        uni.setNavigationBarTitle({ title: this.title })
      },
    },
  },
}
</script>
<style lang="scss" scoped>
page {
  background: #fff;
}

.container {
  padding: 32rpx;

  > p {
    margin: 20rpx;
  }
}
</style>
