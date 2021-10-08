# uniapp 入坑记
在写 uniapp 项目遇到的一些问题及解决方案记录.

<details>
<summary>问题模板</summary>

```
## 某某问题或笔记的标题
问题的简要说明

### 相关环境
- 操作系统/HBuilderX/微信开发者工具/组件工具库...

### 重现步骤
some text...

### 期望现象
some text...

### 实际现象
some text...

### 解决方案
some text...
```

</details>

## 微信小程序的 u-button 函数的参数与浏览器行为不一致
### 相关环境
- 操作系统 Windows 10.0.19042
- HBuilderX 3.2.9.20210927
- 微信开发者工具 1.05.2107090
- uview-ui@1.8.2
### 重现步骤

1. 使用 HBuilderX 创建项目运行以下代码: 

```html
<template>
  <div class="pageBox">
    <u-button @click="fn">1</u-button>
    <u-button @click="fn()">2</u-button>
    <u-button @click="fn(undefined)">3</u-button>
  </div>
</template>

<script>
export default {
  methods: {
    async fn(arg) {
      console.log(`arg`, typeof arg)
    },
  },
}
</script>

```

2. 依次点击三个按钮

### 实际现象
浏览器看到输出:
```
arg object
arg undefined
arg undefined
```

微信看到输出:
```
arg object
arg object
arg undefined
```

### 期望现象
微信与浏览器一致

### 解决方案
疑似 uview-ui 的问题, 尝试更改 u-button 标签为 button 标签后无此问题.


## 组件中的 watch 方法在微信小程序中不执行
### 相关环境
- 操作系统 Windows 10.0.19042
- HBuilderX 3.2.9.20210927
- 微信开发者工具 1.05.2107090
### 重现步骤

1. 使用 HBuilderX 创建项目运行以下代码: 

`com.vue`
```html
<template>
  <div class="com">
    <input type="text" v-model="value.name" placeholder="请输入" />
  </div>
</template>

<script>
export default {
  model: {
    prop: `value`,
    event: `input`,
  },
  props: {
    value: {},
  },
  watch: {
    value: {
      deep: true,
      handler(val) {
        console.log(`val`, val)
        this.$emit(`input`, val)
      },
    },
  },
}
</script>
```

`page1.vue`
```html
<template>
  <div class="pageBox">
    <com v-model="formData.value.male" />
    {{ JSON.stringify(formData.value.male.name, null, 2) }}
  </div>
</template>

<script>
import com from './com.vue'

export default {
  data() {
    return {
      formData: {
        value: {
          male: {},
        },
      },
    }
  },
  components: {
    com,
  },
}
</script>
```

2. 输入 `123`

### 实际现象
浏览器看到输出:
```
val 1 
val 2
val 3
```

微信看到输出: 没有触发 watch

### 期望现象
微信与浏览器一致

### 解决方案
无

## undefined 在微信小程序中会被显示为字符串
### 相关环境
- 操作系统 Windows 10.0.19042
- HBuilderX 3.2.9.20210927
- 微信开发者工具 1.05.2107090
### 重现步骤

1. 使用 HBuilderX 创建项目运行以下代码: 

`page1.vue`
```html
<template>
  <div class="pageBox">-{{ undefined }}-</div>
</template>
```

2. 输入 `123`

### 实际现象
- 浏览器看到 `--`
- 微信看到 `-undefined-`

### 期望现象
微信与浏览器一致

### 解决方案
无
