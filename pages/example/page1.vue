<template>
  <div class="pageBox pagePadding">
    <u-button class="btn" @click="fn">u-button</u-button>
    <p>这是一些文本这是一些文本这是一些文本这是一些文本这是一些文本</p>
  </div>
</template>

<script>
export default {
  created() {},
  data() {
    return {
      list: [],
    }
  },
  methods: {
    async fn() {
      this.$u.toast(`什么也不干的按钮`)
    },
  },
}
</script>

<style lang="scss" scoped>
.pageBox {
  color: $uni-text-color;
  p {
    @include line(1);
  }
}
</style>
