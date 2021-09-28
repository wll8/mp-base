const install = (Vue, vm) => {
  vm.$u.api = {
    getBlogList(data) {
      // 获取博文列表
      return vm.$u.get(`/blogs`, data)
    },
    createBlog(data) {
      // 创建博文
      return vm.$u.post(`/blogs`, data)
    },
    getBlogDetails(id) {
      // 获取博文详情
      return vm.$u.get(`/blogs/${id}`)
    },
  }
}
export default {
  install,
}
