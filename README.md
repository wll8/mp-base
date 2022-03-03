# mp-base

本项目默认封装了以下功能:

- http 请求方法
- 接口调试工具
- UI库
- 通用工具函数

## 启动
- 使用 hbuilderx 启动本项目
- 运行命令 `cnpm i` 安装相关工具
- 运行命令 `npm run mockm` 启动接口调试工具
- 原型 http://127.0.0.1:9100/static/rp/

注: 使用 vscode/eslint/EditorConfig 可自动进行代码风格统一.

## 目录结构
``` txt
│  mm.config.js // 接口调试工具配置文件
│
├─common
│  config.js // 业务配置, 例如请求地址前缀
│  http.api.js // api 编写的地方
│  http.interceptor.js // api 拦截器
│  tool.js // 通用工具函数

```

其他文件说明请参考 [目录结构](https://uniapp.dcloud.io/uniCloud/admin?id=%e7%9b%ae%e5%bd%95%e7%bb%93%e6%9e%84).

## 技术栈
- [uniapp](https://uniapp.dcloud.io/)
- [uview-ui](https://www.uviewui.com/)
- [vue](https://cn.vuejs.org/v2/guide/)
- [vuex](https://vuex.vuejs.org/zh/guide/)
- [scss](https://www.sass.hk/guide/)
- [mockm](https://hongqiye.com/doc/mockm/)
