<script>
export default {
  async onLaunch() {
    console.log(`App Launch`)
  },
  onShow() {
    console.log(`App Show`)
  },
  onHide() {
    console.log(`App Hide`)
  },
}
</script>

<style lang="scss">
/* 注意声明lang="scss"！ */
@import 'uview-ui/index.scss';
@import '~@/common/style.scss';
</style>
