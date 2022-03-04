<template>
  <div class="pageBox">
    <div id="lightgallery" v-show="true">
      <a
        v-for="item in 4"
        :key="item"
        :href="`${vuex_staticUrl}/fengyuanchen.github.io/viewerjs/images/tibet-${item}.jpg`"
      >
        <img
          :src="`${vuex_staticUrl}/fengyuanchen.github.io/viewerjs/images/tibet-${item}.jpg`"
        />
      </a>
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
      const lightGallery = window.lightGallery
      const lgZoom = window.lgZoom
      const lgThumbnail = window.lgThumbnail
      const el = document.getElementById(`lightgallery`)
      const plugin = lightGallery(el, {
        plugins: [lgZoom, lgThumbnail],
        mobileSettings: {
          download: false,
        },
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.pageBox {
  #lightgallery {
    // opacity: 0;
    // width: 100vw;
    // height: calc(100vh - 0px);
    img {
      width: 100px;
    }
  }
}
</style>
