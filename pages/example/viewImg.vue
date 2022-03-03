<template>
  <div class="pageBox">
    <div>
      <div id="images">
        <img
          v-for="item in 4"
          :key="item"
          :src="`${vuex_staticUrl}/fengyuanchen.github.io/viewerjs/images/tibet-${item}.jpg`"
          :alt="`Picture ${item}`"
        />
      </div>
    </div>
  </div>
</template>

<script>
// todo fix 当放大图片后, 图片被滑离视图区域时应切换到下一张

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
      const Viewer = window.Viewer
      const viewer = new Viewer(document.getElementById(`images`), {
        inline: true,
        navbar: true,
        loading: false,
        movable: true, // 移动
        scalable: true, // 镜像
        zoomable: true, // 缩放
        zoomOnTouch: true, // 缩放
        zoomOnWheel: true, // 缩放
        slideOnTouch: true, // 滑动切换一下个
        toggleOnDblclick: false, // 转换单双击放大
        toolbar: {
          zoomIn: true,
          zoomOut: true,
          oneToOne: true,
          reset: true,
          // prev: true,
          // play: true,
          // next: true,
          rotateLeft: true,
          rotateRight: true,
          flipHorizontal: true,
          flipVertical: true,
        },
        viewed() {
          // viewer.zoomTo(1)
        },
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.pageBox {
  #images {
    opacity: 0;
    width: 100vw;
    height: calc(100vh - 44px);
  }
}
</style>
