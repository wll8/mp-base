<template>
  <div class="pageBox">
    <div
      class="cloudimage-360"
      :data-folder="`${vuex_staticUrl}/scaleflex.airstore.io/demo/360-car/`"
      data-filename-x="iris-{index}.jpeg"
      data-amount-x="36"
    ></div>
  </div>
</template>

<script>
// todo 实现 vue-360 的工具栏
// todo fix 进入页面后点击中心的 view360 图片控制台会报错

export default {
  components: {},
  created() {},
  data() {
    return {
      list: [],
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.init()
    })
  },
  methods: {
    async init() {
      window.CI360.init()
    },
  },
}
</script>

<style lang="scss" scoped>
.pageBox {
}
</style>
