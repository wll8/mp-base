<template>
  <div class="pageBox">
    <div
      class="cloudimage-360"
      :data-folder="`${vuex_staticUrl}/scaleflex.airstore.io/demo/360-car/`"
      data-filename-x="iris-{index}.jpeg"
      data-amount-x="36"
      data-fullscreen
      data-magnifier="3"
      data-bottom-circle="false"
      data-pointer-zoom
    >
      <button class="cloudimage-360-prev cloudimage-360-btn prev"></button>
      <button class="cloudimage-360-next cloudimage-360-btn next"></button>
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
      window.CI360.init()
    },
  },
}
</script>

<style lang="scss" scoped>
.pageBox {
  .cloudimage-360 {
    .cloudimage-360-btn {
      &.prev,
      &.next {
        display: none;
        position: absolute;
        z-index: 100;
        top: calc(50% - 15px);
        padding: 8px;
        background: rgba(255, 255, 255, 0.1);
        border: none;
        border-radius: 4px;
        &:focus {
          outline: none;
        }
        &:before {
          content: '';
          display: block;
          width: 30px;
          height: 30px;
          background: 50% 50% / cover no-repeat;
        }
      }
      &.prev {
        left: 20px;
        &:before {
          background-image: url('#{$uni-static-url}/cdn.scaleflex.it/plugins/js-cloudimage-360-view/assets/img/arrow-left.svg');
        }
      }
      &.next {
        right: 20px;
        &:before {
          background-image: url('#{$uni-static-url}/cdn.scaleflex.it/plugins/js-cloudimage-360-view/assets/img/arrow-right.svg');
        }
      }
    }
    /deep/ {
      .cloudimage-360-view-360-icon {
        background: url(#{$uni-static-url}/scaleflex.airstore.io/filerobot/js-cloudimage-360-view/360_view.svg)
          50% 50% / contain no-repeat rgba(255, 255, 255, 0.8) !important;
      }
      .cloudimage-360-magnifier-icon {
        background: url(#{$uni-static-url}/scaleflex.airstore.io/filerobot/js-cloudimage-360-view/loupe.svg)
          50% 50% / cover no-repeat !important;
      }
      .cloudimage-360-close-fullscreen-icon {
        background: url(#{$uni-static-url}/scaleflex.airstore.io/filerobot/js-cloudimage-360-view/cross.svg)
          50% 50% / cover no-repeat !important;
      }
    }
  }
}
</style>
