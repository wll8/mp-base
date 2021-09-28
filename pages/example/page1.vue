<template>
  <div class="pageBox">
    <u-button @click="fn">u-button</u-button>
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
}
</style>
