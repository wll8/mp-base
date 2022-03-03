<template>
  <div class="pageBox pagePadding">
    <u-button class="btn" @click="fn">全景</u-button>
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
      this.$router.push(`/pages/example/page2`)
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
