
# 需求

- 支持大小屏 -- 例如 ipad -- 数量很多
- 查看视频、图片 -- 注意流畅性
  - 可以使用本地加载素材的方式保证流畅性，但多个端如何同步更新？分享给客户后客户本地并没有这些素材。
  - 所以只能从线上的方式解决流畅性(例如素材缓存)。
- vr 全景
  - webview 可用
- vr 全景 + 图文交互
  - webview 可用
- vr 全景 + 虚拟旅游
  - webview 可用
- 图片浏览
  - https://fengyuanchen.github.io/viewerjs/ - 有 bug
  - https://photoswipe.com/
  - https://sachinchoolur.github.io/lightgallery.js/
  - https://www.lightgalleryjs.com/
- 访问统计
- 分享之后知道谁打开的这个链接
  - 参考客户雷达
  - 可能从企业微信分享出来
  - https://www.qwbm.com/new.asp?id=930
## 调研结果
- 注: 对于全景图的制作是一个麻烦的事情
- 使用微信小程序可以获取客户信息, 实现访问统计
- 在微信小程序中通过 webview 可实现全景+标记+旅游

## 设计
- 分组依据 -- 参考 windows 文件管理器
  - 类别 -- 创建素材时设置的分组, 这是默认选项
  - 名称
  - 日期
  - 标签
  - 大小
  - 格式 -- 文件格式, 例如 全景, 视频, 图片
- 排序方式 -- 按分组依据中的内容以递增或递减方式排序, 可以使用级联选择

## 思考
- 哪些东西使用小程序完成, 哪些东西使用 webview 完成
  - 答: 小程序只有两个页面, 父页面和子页面, 子页面用来放 webview.
## todo
  - [ ] feat(view360): 实现类 vue-360 的工具栏
  - [ ] fix(view360): 进入页面后点击中心的 view360 图片控制台会报错
  - [ ] fix(view360): 中间的图片是在网线上, 可能会加载错误
  - [ ] fix(vr): 横屏时按钮栏图标位置不正确
  - [ ] fix(vr): 横屏时刷新会看到很多按钮, 但点击屏幕时突然变少了
  - [ ] feat: 实现页面强制横屏或者自动旋转, 要注意屏幕改变化的样式问题

## 参考
  - 在线图片生成 vr https://renderstuff.com/tools/360-panorama-web-viewer/
  - Javascript 360 全景查看器 https://github.com/pchen66/panolens.js
  - 环绕物体的制作 https://www.pano2vr8.com/%E4%BB%80%E4%B9%88%E6%98%AF%E7%8E%AF%E7%89%A9/
  - PANO2VR基础教程 https://www.pano2vr8.com/pano2vr%e5%9f%ba%e7%a1%80%e6%95%99%e7%a8%8b/
  - 手把手教你实现web前端VR全景看房 https://www.bilibili.com/read/cv11733004
  - 全景图详细拍摄与制作教程（地拍） https://www.bilibili.com/video/BV19v41167ob
  - 全景图制作全流程，10分钟学会它 https://www.bilibili.com/video/BV1WE411t7j3/
  - 用GoogleCamera 谷歌相机拍摄全景 https://panorover.com/B/wi
  - CRM和SCRM有什么区别 https://www.zhihu.com/question/19826381
  - 三种微信小程序VR实现方法 http://blog.he29.com/wblog/?p=1405&ivk_sa=1024320u
    - https://photo-sphere-viewer.js.org/
  - 如何快速720云的全景图片 http://www.360doc.com/content/17/0404/13/11604731_642767414.shtml
  - MoChat——让企业微信开发更简单 https://github.com/mochat-cloud/mochat
  - 手机拍摄360度全景照片 https://jingyan.baidu.com/article/46650658dd7b78f549e5f8b5.html
  - 360全景相机(360全景照片) v3.9.2 安卓版 http://www.downcc.com/soft/47452.html
  - 使用谷歌相册看谷歌相机拍摄的全景照片 https://www.bilibili.com/video/av626246485/
  - 现代网络的 360° 媒体查看器。 https://github.com/google/marzipano
  - 360度产品 https://www.jqueryscript.net/blog/best-360-product-view.html
    - 推荐 https://www.ajax-zoom.com/examples/example32.php
    - https://scaleflex.github.io/js-cloudimage-360-view/
    - https://github.com/search?o=desc&q=Product+Viewer&s=stars&type=Repositories
  - uniapp中使用全景图片查看器，查看全景VR图片 https://ask.dcloud.net.cn/article/id-37297__page-2
