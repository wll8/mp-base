/**
 * 判断是否为空值
 * @param {*} value 要判断的值
 */
function isEmpty(value) {
  return [NaN, null, undefined, ``, [], {}].some((emptyItem) =>
    typeof value === `string` && value
      ? false
      : JSON.stringify(value) === JSON.stringify(emptyItem)
  )
}

/**
 * 删除空值
 * @param {object} obj 要处理的数据
 */
function removeEmpty(obj) {
  return JSON.parse(JSON.stringify(obj), (key, value) => {
    if (isEmpty(value) === false && Array.isArray(value)) {
      value = value.filter((v) => !isEmpty(v))
    }
    return isEmpty(value) ? undefined : value
  })
}

const install = (Vue, vm) => {
  Vue.prototype.$tool = {
    isEmpty,
    removeEmpty,
    diffTime(startDate, endDate) {
      const diff = endDate.getTime() - startDate.getTime() // 时间差的毫秒数

      // 计算出相差天数
      const days = Math.floor(diff / (24 * 3600 * 1000))

      // 计算出小时数
      const leave1 = diff % (24 * 3600 * 1000) // 计算天数后剩余的毫秒数
      const hours = Math.floor(leave1 / (3600 * 1000))
      // 计算相差分钟数
      const leave2 = leave1 % (3600 * 1000) // 计算小时数后剩余的毫秒数
      const minutes = Math.floor(leave2 / (60 * 1000))

      // 计算相差秒数
      const leave3 = leave2 % (60 * 1000) // 计算分钟数后剩余的毫秒数
      const seconds = Math.round(leave3 / 1000)

      return `${days}天${hours}时${minutes}分${seconds}秒`
    },
  }
}
export default {
  install,
}
