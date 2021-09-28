<template>
  <div class="pageBox">
    <u-button @click="getBlogList">获取博文列表</u-button>
    <u-button @click="getBlogDetails">获取博文详情</u-button>
    <u-button @click="createBlog">创建博文</u-button>
    <pre>{{ JSON.stringify(httpData, null, 2) }}</pre>
  </div>
</template>

<script>
export default {
  created() {},
  data() {
    return {
      list: [],
      httpData: undefined,
    }
  },
  methods: {
    async getBlogList() {
      this.httpData = await this.$u.api.getBlogList({ arg: `arg` })
      this.list = this.httpData.data
    },
    async createBlog() {
      this.httpData = await this.$u.api.createBlog({
        title: `标题${Date.now()}`,
        content: `内容${Date.now()}`,
      })
    },
    async getBlogDetails() {
      this.httpData = await this.$u.api.getBlogDetails(this.list.length || 1)
    },
  },
}
</script>

<style lang="scss" scoped>
.pageBox {
  pre {
    white-space: pre-wrap;
  }
}
</style>
