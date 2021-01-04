---
title: 配置browser-sync浏览器同步测试工具
date: 2018-07-17 10:21:55
categories: 前端
---

>BrowserSync是基于Node.js的, 是一个Node模块， 如果想要使用它，需要先安装一下Node.js

官方网站：https://browsersync.io/
中文参考网站：http://browsersync.cn/
# 安装
## 全局安装
```shell
#简写方式：npm i -D browser-sync
npm install -g browser-sync
```
## 在项目中安装

```shell
npm install --save-dev browser-sync
```
# 在项目中配置scripts
![AsyclQ.png](https://s2.ax1x.com/2019/04/01/AsyclQ.png)
在项目的包描述文件中插入以下代码

```json
"scripts":{
  	"dev": "browser-sync start --server --files \"*.html, css/*.css, js/\"",
  	"start": "npm run dev"
  }
```
# 启动项目
![Asy6Sg.png](https://s2.ax1x.com/2019/04/01/Asy6Sg.png)
在命令行中输入以下，即可启动项目

```shell
npm start
```
