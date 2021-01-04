---
title: 通过node创建服务器
lang: zh-CN
---
```js
const express = require('express')
const compression = require('compression')//gzip压缩


//创建web服务器
const app = express()

//托管静态资源
app.use(compression())
app.use(express.static('./dist'))

//启动web服务器
app.listen(80, () => {
  console.log('web server running at http://127.0.0.1')
})
```