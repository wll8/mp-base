<template>
  <div class="comBox">
    <div :class="{ listBox: true, useIcon: useIcon }">
      <div
        @click="toPage(listItem.path)"
        class="listItem"
        v-for="(listItem, listItemIndex) in list"
        :key="listItemIndex"
      >
        <image
          v-if="useIcon"
          style="width: 46upx; height: 46upx"
          class="icon"
          :src="listItem.icon"
        ></image>
        <span class="text">{{ listItem.text }}</span>
        <uni-icons type="arrowright" class="arrowright"></uni-icons>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      default: () => [],
    },
    useIcon: {
      type: Boolean,
      default: false,
    },
  },
  created() {},
  data() {
    return {}
  },
  methods: {
    fn(arg) {
      console.log(`arg`, arg)
    },
  },
}
</script>

<style lang="scss" scoped>
.comBox {
  .listBox {
    &.useIcon {
      .listItem {
        &:not(:last-child) {
          &::before {
            width: 610upx;
            right: 0;
          }
        }
      }
    }
    .listItem {
      margin-bottom: 46upx;
      line-height: 46upx;
      position: relative;
      &:not(:last-child) {
        &::before {
          width: 100%;
          bottom: -22upx;
          position: absolute;
          content: '';
          display: block;
          height: 1px;
          background-color: #ddd;
        }
      }
      .arrowright {
        font-size: 30upx !important;
        float: right;
      }
      .icon {
        width: 46upx;
        height: 46upx;
        margin-right: 34upx;
        vertical-align: middle;
        display: inline-block;
      }
    }
  }
}
</style>
