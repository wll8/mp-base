<template>
  <div class="pageBox">demo</div>
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
    fn(arg) {
      console.log(`arg`, arg)
    },
  },
}
</script>

<style lang="scss" scoped>
.pageBox {
  background-color: #ccc;
}
</style>
