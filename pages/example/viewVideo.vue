<template>
  <div class="pageBox">
    <div>
      <div id="dplayer"></div>
    </div>
  </div>
</template>

<script>
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
      const DPlayer = window.DPlayer
      const dp = new DPlayer({
        container: document.getElementById(`dplayer`),
        video: {
          url: `${this.vuex_staticUrl}/video/movie.mp4`,
        },
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.pageBox {
  #dplayer {
    width: 100vw;
    height: calc(100vh - 44px);
  }
}
</style>
