---
title: 什么是MVVM
date: 2019-03-17 14:21:09
categories: 前端框架
---

![在这里插入图片描述](https://img-blog.csdnimg.cn/20190308102316203.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L01vbmVzdGVyXw==,size_16,color_FFFFFF,t_70)
# 特点：
- 针对具有复杂交互逻辑的前端应用
- 提供基础的架构抽象
- 通过Ajax数据持久化，保证前端用户体验
# 市面上几个主流的MVVM框架
- AngularJS
- reactJS
- VueJS
# 数据驱动
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190308103641689.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L01vbmVzdGVyXw==,size_16,color_FFFFFF,t_70)
## 数据响应原理
数据（model）改变**驱动**视图（view）自动更新
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190308103746907.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L01vbmVzdGVyXw==,size_16,color_FFFFFF,t_70)
## 组件化
扩展HTML元素，封装可重用的代码
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190308104116626.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L01vbmVzdGVyXw==,size_16,color_FFFFFF,t_70)
## 组件设计原则
- 页面上每个独立的可视/可交互区域视为一个组件
- 每个组件对应一个工程目录，组件所需要的各种资源在这个目录下就近维护
- 页面不过是组件的容器，组件可以嵌套自由组合形成完整的页面
