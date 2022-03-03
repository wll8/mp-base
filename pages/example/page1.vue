<template>
  <div class="pageBox pagePadding">
    <u-button class="btn" @click="$router.push(`/pages/example/vr`)"
      >vr</u-button
    >
    <u-button class="btn" @click="$router.push(`/pages/example/view360`)"
      >view360</u-button
    >
    <u-button class="btn" @click="$router.push(`/pages/example/viewImg`)"
      >viewImg</u-button
    >
    <u-button class="btn" @click="$router.push(`/pages/example/viewVideo`)"
      >viewVideo</u-button
    >
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
  methods: {},
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
