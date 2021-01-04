---
title: node.js入门和使用
date: 2018-05-17 14:16:49
categories: 前端
---


# nodejs是什么
 - Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine.
 - Node.js不是一门语言
 - Node.js不是库、不是框架
 - 是一个JavaScript运行时环境
 - 简单来讲就是Node.js可以解析和执行JavaScript代码
 - 以前只有浏览器可以解析JavaScript代码
 - 现在JavaScript可以完全脱离浏览器来执行，一切都归功于：Node.js
 - 浏览器中的JavaScript
 - ECMAScript
     - 基本语法
     - if
     - var 
     - function
     - Object
     - Array
 - BOM
 - DOM
 - Node.js中的JavaScript
 - 没有BOM、DOM
 - ECMAScript
 - 在node这个js执行环境中为JavaScript提供了一些服务器级别的操作API
 - 例如文件读写
 - 网络服务的构建
 - 网络通信
 - http服务器
 - 等处理、、、、
 - 构建与chrome浏览器v8引擎之上
 -  代码只是具有特定格式的字符串
 - 引擎可以认识他，可以帮你去解析和执行 
 - Google Chrome的v8引擎是目前公认的解析执行JavaScript代码最快的
 - Node.js的作者把Google Chrome中的V8引擎移植了出来，开发了一个独立的JavaScript运行时环境。
 - Node.js uses an event-driven,non-blocking I/O model that makes it lightweight and efficient.
 - event-driven 事件驱动
 - non-blocking I/O model 非阻塞IO模型（异步）
 - lightweight and efficient. 轻量和高效
 - Node.js package ecosytem,npm,is the largest ecosystem of open source libraries in the world
 -  npm是世界上最大的开源库生态系统
 - 绝大多数JavaScript相关的包都存放在npm上，这样做的目的是为了让开发人员更方便的去下载使用。
 - `npm install jquery` 
# Node.js可以做什么
- web服务器后台
- 命令行工具
   - npm（node）
   - git（c语言）
   - hexo（node）
   - 。。。
- 对于前端开发工程师来讲，接触node最多的是他的命令行工具
	- 自己写的很少，主要是使用第三方开发的
	- webpack
	- gulp
	- npm
# 预备知识
- HTML
- css
- JavaScript
- 简单的命令行操作
- 具有服务端开发经验更佳
# 一些资源
- 《深入浅出Node.js》
	- 朴灵
	- 偏理论，几乎没有任何实战性内容
	- 理解原理底层有帮助
- 《Node.js权威指南》
	- API讲解
	- 没有业务，没有实战
- JavaScript标准参考教程（alpha）： https://wangdoc.com/javascript/
- Node入门： http://www.nodebeginner.org/index-zh-cn.html
- 官方API文档： https://nodejs.org/dist/latest-v6.x/docs/api/
- CNODE社区：http://cnodejs.org
- CNODE-新手入门： http://cnodejs.org/getstart
# 可以学到什么
- B/S编程模型
	- Browser-Server
	- back-end
	- 任何服务端技术这种BS编程模型都是一样，和语言无关
	- Node只是我们学习BS编程模型的的一个工具而已
- 模块化编程
	- RequireJS
	- SeaJS
	- `@import('文件路径')`
	- 以前认知的的JavaScript只能通过`script`标签来加载
	- 在Node中可以像`@import  ()`一样来引用加载JavaScript脚本文件
- Node常用API
- 异步编程
	- 回调函数
	- Promise
	- async
	- generator
- Express Web开发框架
- 学习node不仅会帮助大家打开服务端黑盒子，同时会帮助你学习前端高级内容
	- Vue.js
	- React
	- angular 
# 起步
## 安装Node环境 
- 查看当前Node环境的版本号`node --version`
- 环境变量
## REPL
- read 读取
- eval 执行
- print 输出
- loop 循环
在终端输入`node`命令直接敲回车
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190123131811377.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L01vbmVzdGVyXw==,size_16,color_FFFFFF,t_70)
这个环境的作用只是用来帮助我们做一些辅助测试，例如在里面可以直接使用node中的核心模块而不需要`require`加载。
## HelloWorld
1. 创建编写JavaScript脚本文件
2. 打开终端，定位到脚本文件所属目录
3. 输入`node文件名`执行对应文件
注意： 文件名不要使用`node.js`来命名！
- 解析执行JavaScript
- 读写文件
	- 浏览器中的JavaScript是没有文件操作的能力的
	- 但是Node中的JavaScript具有文件操作的能力
	- fs是file-system的简写，就是文件系统的意思
	- 在Node中如果想要进行文件操作，就必须引入fs这个核心模块
	- 在fs这个核心模块中，就提供了所有的文件操作相关的API
	- 例如：fs.readFile就是用来读取文件的
		1. 使用require方法加载fs核心模块
```java
// 1.使用require方法加载fs核心模块
var fs = require('fs');
/* 2.读取文件
第一个参数是要读取的文件路径
第二个参数就是一个回调函数
	成功
		data 数据
		error null
	失败
		data null
		error 错误对象
*/
fs.readFile('data/readfile.txt',function(error,data){
	// console.log(data);
	console.log(data.toString());
/*	<Buffer 68 65 6c 6c 6f 20 6e 6f 64 65 6a 73 0d 0a e4 bd a0 e5 a5 bd 20 6e 6f 64
65 6a 73>
文件中存取的其实都是二进制数据
这里为什么看到的不是0和1呢？原因是二进制转为了16进制
但是无论是二进制还是16进制，人类都不认识
所以可以通过toString方法转为我们能认识的字符
*/
});
```
- 创建http服务
	- 我们可以使用Node非常轻松的构建一个web服务器
	- 在Node中专门提供了一个核心模块：http
	- http这个模块的职责就是帮你创建编写服务器的
```javascript
//1.加载http核心模块
var http = require('http');
//2.使用http.createServer()方法创建一个web服务器
//  返回一个Server实例
var server = http.createServer();
//3.服务器要干嘛
//	提供服务：对数据的服务
//	发送请求
//	接受请求
//	处理请求
//	发送响应
//3.绑定端口号，启动服务器
server.listen(3000,function(){
	console.log('服务器启动成功，通过http://127.0.0.1:3000/ 进行访问');
});
//  4.注册request请求事件
//  当客户端请求过来，就会自动触发request请求事件，然后执行第二个参数（回调函数）	
server.on('request',function(){
	console.log('接收到客户端请求');
});
  ```
- request请求处理函数
```javascript
var http = require('http');
var server = http.createServer();
server.listen(3000,function(){
	console.log('服务器启动成功，通过http://127.0.0.1:3000/ 进行访问');
});
/*
request请求事件处理函数，需要接受两个参数
	Request请求对象
		请求对象可以用来获取客户端的一些请求信息，例如请求路径
	Response响应对象
		响应对象可以用来给客户端发送响应消息
*/
server.on('request',function(request,response){
	console.log('接收到客户端请求,请求路径是：'+ request.url);
	/*response对象有一个方法：write可以用来给客户端发送响应数据
	write可以使用多次，但是最后一定要使用 “end” 来结束响应，否则客户端会一直等待*/
	/*response.write('hello ');
	response.write('this is node.js');
	response.end();*/
	//上面write的方式比较麻烦，可以直接end的同时发送数据
	response.end('hello this is node.js');
});
```
![01](https://img-blog.csdnimg.cn/20190103143931751.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L01vbmVzdGVyXw==,size_16,color_FFFFFF,t_70)

- 响应内容只能是二进制数据或者字符串
# Node中的模块系统
- ECMAScript
- 核心模块
- 第三方模块
- 用户自定义模块
## 核心模块
Node为JavaScript提供了很多服务器级别的API，这些API绝大多数都被包装到了一个具名的核心模块中。例如：
1. 文件操作的`fs`核心模块
`fs`核心模块中`readFile`API的第二个参数是可选的，传入utf8可以把读取到的文件直接按照utf8编码转成我们能认识的字符（默认是二进制）,除了这种方法，也可以通过`data.toString()`方法。
```javascript
fs.readFile('./db.json','utf8',function(err,data){
	if(err){
		return res.status(500).send('Server error...')
	}
	console.log(data)
})
```
2. http服务构建的`http`模块
3. url路径操作模块
4. `path`路径操作模块
5. `os`操作系统信息模块
6. 。。。
7. 详细见[node官方API文档][nodeAPI]
只要是这个模块是一个核心模块，就必须使用require方法来引入。
```javascript
//用来获取机器信息的
var os = require('os');
//用来操作路径的
var path = require('path');
//获取当前机器的CPU信息
console.log(os.cpus());
//memory 内存
console.log(os.totalmem());
//获取一个路径中的扩展名部分
//extname extension name
console.log(path.extname('D:/a/c/d/c/hellow.txt'));
```
### path路径操作模块
参考文档：https://nodejs.org/dist/latest-v11.x/docs/api/path.html
- `path.basename`
	- 获取一个路径的文件名（默认包含扩展名）
- `path.dirname`
	- 获取一个路径中的目录部分
- `path.extname`
	- 获取一个路径中的扩展名部分
- `path.parse`
	- 把一个路径转为对象
		- root 根路径
		- dir 目录
		- base 包含后缀名的文件名
		- ext 后缀名
		- name 不包含后缀名的文件名
- `path.join`
	- 当需要进行路径拼接的时候，推荐使用这个方法

- `path.isAbsolute`
	- 判断一个路径是否是绝对路径
## Node中的其他成员
在每个模块中，除了`require`、`exports`等模块相关API之外，还有两个特殊成员：
- `__dirname` **动态获取** 可以用来获取当前文件模块所属目录的绝对路径
- `__filename` **动态获取** 可以用来获取当前文件的绝对路径
- `__dirname`和`__filename`是不受执行node命令所属路径影响的
在文件操作中，使用相对路径是不可靠的，因为在Node中文件操作的路径被设计为相对执行node命令所处的终端路径（这不是bug）。
所以为了解决这个问题，只需要把相对路径变为绝对路径。
我们可以使用`__dirname`或者`__filename`来解决这个问题。
在拼接路径的过程中，为了避免手动拼接带来的一些低级错误，所以推荐多使用：`path.join()`来辅助拼接。
所以为了尽量避免这个问题，以后再文件操作中使用的相对路径都统一换为**动态的绝对路径**
> 补充：模块中的路径标识和这里的路径没关系，不受影响（就是相对于文件模块）
## 用户自定义模块
- require
	- require是用来加载模块的
	- 在Node中，模块有三种：
		- 具名的核心模块，例如：`fs`,`http`
		- 用户自己编写的文件模块
			-  相对路径必须加`./`（不然会当做核心模块）。
			- 可以省略后缀名
		- 在Node中，没有==全局作用域==，只有==模块作用域==
			- 外部访问不到内部
			- 内部也访问不到外部
			- 默认都是封闭的
		- 既然是模块作用域，那如何让模块和模块之间进行通信
		- 有时候我们加载文件模块的目的不是为了简简单单的执行里面的代码，更重要的是使用里面的成员。
		- require方法的第二个作用：拿到被加载文件模块导出的接口对象
		- 在每个文件模块中都提供了一个对象：`exports`
- exports
	- `exports`默认是一个空对象
         ![在这里插入图片描述](https://img-blog.csdnimg.cn/20190104200419988.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L01vbmVzdGVyXw==,size_16,color_FFFFFF,t_70)
	- 我们要做的就是把所有需要被外部访问的成员挂载到这个`exports`对象中。
	 ![在这里插入图片描述](https://img-blog.csdnimg.cn/20190104201630947.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L01vbmVzdGVyXw==,size_16,color_FFFFFF,t_70)
	 - 如果一个模块需要直接导出某个成员，而非挂载的方式。那我们就需要用到下面这个方法
	 `module.exports = 'hello'`
### 加载和导出的使用规则
#### `require`加载规则
如果想要了解更多底层细节，可以自行参考：[《深入浅出Node.js》中的模块系统章节]。
- 语法：` var 自定义变量名 = require('模块')`
 -  核心模块
	- 模块名
- 第三方模块
	- 模块名
- 自己写的模块
	- 路径  
- 两个作用：
	+ 执行被加载模块中的代码
	+ 得到被加载模块中的`exports`导出的接口对象
- 优先从缓存加载
	![在这里插入图片描述](https://img-blog.csdnimg.cn/20190125111716180.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L01vbmVzdGVyXw==,size_16,color_FFFFFF,t_70)
这里b.js只被执行了一次
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190125112136638.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L01vbmVzdGVyXw==,size_16,color_FFFFFF,t_70)
优先从缓存加载，由于a中已经加载过b了，所以这里不会重复加载，可以拿到其中的接口对象，但是不会重复执行里面的代码。这样做的目的是为了 避免重复加载， 提高模块加载效率。
- 判断模块标识
	 - 核心模块
	 本质也是文件，已经被编译到二进制文件中了，我们只需要按照名字来加载就可以了。
` require('fs')`
 `require('http')`
	 - 第三方模块   
	 凡是第三方模块都必须通过npm来下载
	 使用的时候就可以通过`require('包名')`的方式来进行加载就可以使用
	 不可能有任何一个第三方包和核心模块的名字是一样的
	 既不是核心模块，也不是路径形式的模块
	 	模块加载机制：
	        `node_modules/art-template`
	 		`node_modules/art-template/package.json文件`
	 		`node_modules/art-template/package.json文件中的main属性`
	 		`main属性中就记录了art-template的入口模块`
	 		`然后加载使用这个第三方包`
	 		`实际上最终加载的还是文件` 
	 		 如果package.json文件不存在或者main指定的入口模块也没有
	 		 则node会自动找该目录下的index.js。(index.js会作为默认备选项)
	 		 如果以上所有条件都不成立，则会进入上一级目录中的node_modules目录查找，如果上一级也没有，则逐级向上查找，直到磁盘根目录，最后报错`Can not find module xxx`。
	 		 一个项目中有且仅有一个node_modules而且是存放在项目的根目录。
	 - 自己写的模块

路径形式的模块：
`./`当前目录，不可省略
`../`上一级目录，不可省略
`/`几乎不用，macOS和linux的磁盘根目录
`d:/a/foo.js/`几乎不用
#### 导出`exports`
- Node中是模块作用域，默认文件中的所有成员只在当前文件模块中有效
- 对于希望可以被其他模块访问的成员，我们就需要把这些公开的成员都挂载到`exports`接口对象中就可以了
- 导出多个成员（必须在对象中）：
```javascript
exports.a = 123;
exports.b = 'hello';
exports.c = function(){
	console.log('ccc');
}
exports.d = {
	foo : 'bar'
}
```
- 导出单个成员（拿到的就是：函数、字符串、、、）：
```javascript
module.exports = function(x,y){
	return x + y;
}
```
下面这个方法同样可以导出多个成员，但是需要重新建立与`require`的引用关系
`module.exports = { }`
- 在Node中，每个模块内部都有一个自己的module对象，该module对象中有一个成员叫exports，他也是一个对象，也就是说如果你需要对外导出成员，只需要把导出的成员挂载到module.exports上
```javascript
var module = {
	exports: {
		foo : 'bar'
	}
}
module.exports.foo = 'bar';
```
谁来require我，谁就得到module.exports
默认在代码的最后有一句：
`return module.exports`
我们发现，每次导出接口成员的时候都通过module.exports.xxx = xxx的方式很麻烦。所以，Node为了简化我们的操作，专门提供了一个变量`exports`等于module.exports,所以在return之前还有一句`exports = module.exports`
#### 原理解析（exports和module.exports的区别）
`exports`是`module.exports`的一个引用
```javascript
console.log(exports === module.exports) // => true
exports.foo = 'bar' // 等价于 module.exports.foo = 'bar'
```

- 每个模块中都有一个module对象
- module对象中有一个exports对象
- 我们可以把需要导出的成员都挂载到module.exports接口对象中
- 也就是：`module.exports.xxx = xxx`的方式
- 但是每次都`module.exports.xxx = xxx`的方式很麻烦。
- 所以Node为了方便操作，同时在每一个模块中都提供了一个成员叫：`exports`
- `exports === module.exports`的结果为`true`
- 所以对于：`module.exports.xxx = xxx`的方式完全可以替换为`exports.xxx = xxx`
- 当一个模块需要导出单个成员的时候，必须使用：`module.exports = xxx`的方式
- 因为每个模块最终向外`return`的是`module.exports`
- 而`exports`只是`module.exports`的一个引用
- 所以即便你为`exports`重新赋值，也不会影响`module.exports`
- 但是有一种赋值方式比较特殊：`exports = module.exports`这个用来重新建立引用关系的
- 之所以让大家明白这个道理，是希望可以灵活运用它
## 第三方模块
- art-template
- 必须通过npm来下载才可以使用
# 什么是模块化
- 文件作用域
- 通信规则
	+ 加载 require
	+ 导出
# CommonJS模块规范
在Node中的JavaScript还有一个重要的概念：模块系统。
- 模块作用域
- 使用require方法用来加载模块
- 使用exports接口对象来导出模块中的成员
# web服务器开发
## IP地址和端口号
- IP地址用来定位计算机
- 端口号用来定位具体的应用程序
- 所有需要联网通信的应用程序都会占用一个端口号
- 端口号的范围从0 - 65536之间
- 在计算机中有一些默认端口号，最好不要去使用
	- 例如`http`服务的80 
- 我们在开发过程中使用一些简单好记的就可以了，例如 3000、5000等
- 可以同时开启多个服务，但一定要确保不同服务占用不同的端口号才可以
- 说白了，同一个端口号同一时间只能被一个程序占用	
## Content-Type（响应内容类型）
- 在服务端默认发送的数据，其实是utf-8编码的内容，但是浏览器并不知道你是utf-8编码的内容。浏览器在不知道服务器响应内容的编码情况下会按照当前操作系统的默认编码去解析。中文操作系统默认是gbk。解决办法就是告诉浏览器我给你发送的内容是什么编码的`response.setHeader('Content-Type','text/plain; charset=utf-8') `
```java
var http = require('http');
var server = http.createServer();;
server.on('request',function(request,response){
	//设置请求头信息，告诉浏览器用utf-8去解析响应内容
	response.setHeader('Content-type','text/plain;charset=utf-8');
	response.end('hello,世界');
});
server.listen(3000,function(){
	console.log('Server is runing...');
});
```
- `text/plain`：普通文本
- `text/html`：HTML格式的字符串
更多请参考[开源中国contentType对照表]
## 请求对象 Request

## 响应对象 Response

## 在Node中使用模板引擎
模板引擎最早就是诞生于服务器领域，后来才发展到了前端
1. 安装
```cmd
npm install art-template
```
2. 在需要使用的文件模块中加载`art-template`
只需要使用`require`方法加载就可以了：`require('art-template')`
参数中的art-template就是你下载的包的名字
也就是说你`install`的名字是什么，则你require中的就是什么
3. 查文档，使用模板引擎的API

## 统一处理静态资源 

## 服务端渲染

# 留言本 （小案例）
- 处理留言本案例首页数据列表渲染展示
- 处理留言本案例发表留言功能
	+ 路径
	+ 设计好的请求路径
	+ #GET直接或查询字符串数据
	+ Node中需要我们手动解析
		* url.parse()
	+ /pinglun?name=jack&message=hello world
	+ split('?')
	+ name=jack&messgae=hello world 
	+ split('&')
	+ name=jack message=hello world
	+ forEach()
	+ name=jack.split('=')
	+ 0 key
	+ 1 value
- 掌握如何解析请求路径中的查询字符串
	+ url.parse()
- 如何在Node中实现服务器重定向
	+ setHeader('location')
		* 301 永久重定向
		* 302 临时重定向 浏览器不会记住

# npm
- node package manager  node包管理器
## npm网站
https://www.npmjs.com/
## npm命令行工具
只要安装了node就会自动安装npm
npm也有版本这个概念
可以通过在命令行中输入：
```javascript
npm --version
```
升级npm
```javascript
npm install --global npm
```
## 常用命令
[npm常用命令参考链接]
- `npm init`
	 `npm init -y`可以跳过向导，快速生成
- `npm install`
	一次性把`dependencies`选项中的依赖全部安装
- `npm install 包名`
	只下载
	`npm i` 简写
- `npm install --save 包名`
	下载并且保存依赖项（`package.json`文件中的`dependencies`选项）
- `npm uninstall 包名`
	只删除，如果有依赖项依然保存
- `npm uninstall --save 包名`
	删除的同时也会把依赖信息去除
	`npm un -S 包名`
- `npm help`
	查看使用帮助
- `npm 命令 --help`
	查看指定命令的使用帮助
	例如：`npm uninstall --help`
## 解决npm被墙（下载速度慢）问题
npm存储包文件的服务器在国外，有时候会被墙，速度很慢，我们需要解决这个问题
- 安装淘宝的cnpm
```shell
// --global 表示安装到全局，而非当前目录
npm insatll --global cnpm
```
接下来安装包的时候把`npm`替换成`cnpm`
例子：
```shell
//还是通过国外npm服务器，速度比较慢
npm insatll jquery
//使用cnpm会通过淘宝的服务器来下载jquery
```
- 如果不想安装`cnpm`又想使用淘宝的服务器来下载
```shell
npm install jquery --registry=https://registry.npm.taobao.org
```
但是每次手动添加参数很麻烦，所以可以把这个选项添加到配置文件中：
```shell
npm config set registry https://registry.npm.taobao.org
npm config list  可以查看配置信息
```
通过上述命令的配置，以后下载所有的包都会通过淘宝镜像来下载。
# package.json
我们建议每一个项目都要有一个`package.json`文件（包描述文件，就像产品说明书一样）
这个文件可以通过`npm init`的方式来自动初始化出来
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190126153648641.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L01vbmVzdGVyXw==,size_16,color_FFFFFF,t_70)
对于前端开发者来说，最有用的是那个`dependencies`选项，可以用来帮我们保存第三方包的依赖信息。
- 建议执行`npm install 包名`的时候都加上`--save`这个选项，目的是为了保存依赖信息。
- 如果你的`node_modules`删除了也不用担心，我们只需要：`npm install`就会自动把`package,json`中的`dependencies`中所有的依赖项都下载下来
## package.json和package-lock.json
npm5 以前是不会有`package-lock.json`这个文件的
npm5 之后才加入这个文件
当你安装包的时候，npm都会生成或者更新`package-lock.json`文件
# Express
[Express官方网站]
原生的http在某些方面表现不足以应对我们的开发需求，所以我们就需要使用框架来加快我们的开发效率，框架的目的就是提高效率，让我们的代码高度统一。
- 第三方web开发框架
- 高度封装了http模块
- 更加专注于业务，而非底层细节
- 知其所以然
## 安装：
```cmd
npm install --save express
```
## hello world
```javascript
const express = require('express')
const app = express()
app.get('/',(req,res) => res.send('hello world')
app.listen(3000,() => console.log('express app listening on port 3000!'))
```
## 基本路由
路由
- 请求方法
- 请求路径
- 请求处理函数 
get：
```javascript
//当你以GET方法请求/的时候，执行对应的处理函数
app.get('/',function(req,res) {
	res.send('Hello World!');
});
```
post：
```javascript
//当你以POST方法请求/的时候，执行对应的处理函数
app.post('/',function(req,res) {
	res.send('Hello World!');
});
```
## 静态服务
```javascript
// /public资源
app.use(express.static('public'));
// /files资源
app.use(express.static('files'));
// /public/xxx
app.use('/public'express.static('public'))
// /static/xxx
app.use('/static',express.static('public'));
app.use('/static',express.static(path.join(__dirname,'public')));
```
## 在Express中配置使用`art-template`模板引擎
[github仓库]
[官方网站]
- 安装
```shell
npm install --save art-template
npm install --save express-art-template
```
- 配置
```javascript
var express = require('express'); 
var app = express(); 
// 第一个参数用来配置视图的后缀名，这里是art，则你存储在veiws目录中的模板文件必须是xxx.art，我们可以把art改为html
app.engine('art',require('express-art-template')); 
app.set('view options'，{ 
    debug：process.env.NODE_ENV！== 'production'
 });
```
配置使用`art-template模板引擎`
第一个参数表示：当渲染以，`.art`结尾的文件的时候，使用`art-template模板引擎`
`express-art-template`是专门用来在`Express`中把`art-template`整合到`Express`中
虽然外面不需要加载`art-template`但是也必须安装
原因就在于`express-art-template`依赖了`art-template`

`Express`为`Response`响应对象提供了一个方法：`render`
`render`方法默认不可以使用，但是如果配置了模板引擎就可以使用了
`res.render('html模板名',{模板数据})`
第一个参数不能写路径，默认回去项目中的`views目录`查找该模板文件
也就是说`Express`有一个约定：开发人员把所有的视图文件都放到`views目录`中

另外：如果想要修改默认的views目录，则可以使用下面的方法
```javascript
app.set('views',目录路径)
```
- 使用
```javascript
app.get（'/'，function（req，res） { 
    res.render（'index.art'，{ 
        user：{ 
            name：'aui'，
            tags：[ 'art'，'template'，'nodejs' ] 
        } 
    }）; 
}）;
```
## 在Express中获取表单GET请求参数
Express内置了一个API，可以直接通过`req.query`来获取
```javascript
req.query
```
## 在Express获取表单POST请求体数据
在Express中没有内置获取表单POST请求体的API，所以我们需要借助第三方包：`body-parser`。![在这里插入图片描述](https://img-blog.csdnimg.cn/20190129193940745.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L01vbmVzdGVyXw==,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190129194205938.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L01vbmVzdGVyXw==,size_16,color_FFFFFF,t_70)
- 安装：
```shell
npm install --save body-parser
```
- 配置：
```javascript
var express = require('express')
var bodyParser = require('body-parser')

var app = express()

// parse application/x-www-form-urlencoded
/*配置body-parser
只要加入了这个配置，则在req请求对象上会多出来一个属性：body
也就是说可以直接通过req.body来获取表单POST请求体数据*/
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(function (req, res) {
  res.setHeader('Content-Type', 'text/plain')
  res.write('you posted:\n')
  res.end(JSON.stringify(req.body, null, 2))
})
```
## 在Express中配置使用`express-session`插件
> 参考文档：https://github.com/expressjs/session
1. 安装

```shell
npm i express-session
```
2. 配置

```javascript
//在Express这个框架中，默认不支持Session和Cookie
//但是我们可以使用第三方中间件：express-session来解决
//该插件会为req请求对象添加一个成员：req.session默认是一个对象
app.use(session({
  secret: 'keyboard cat', //配置加密字符串，他会在原有加密基础之上和这个字符串拼起来去加密，增加安全性，防止客户端恶意伪造！
  resave: false,
  saveUninitialized: true//无论你是否使用session，都会默认分配一把钥匙。
}))
```
3. 使用

```javascript
// 添加Session数据
req.session.foo = 'bar'
// 获取Session数据
req.session.foo
```
>提示：默认Session数据时内存存储的，服务器一旦重启就会丢失，真正的生产环境会把Session进行持久化存储。
## Express中的路由API
路由因为比较多，一般都单独放在一个模块中
```javascript
var express = require('express');
//创建路由容器
var router = express.Router();
//把路由都挂载到router路由容器上
router.get('/',function(req,res){}
//把router导出
module.exports = router
```
接下来在入口模块中
```javascript
var express = require('express');
var router = require('./router');//路由文件
var app = express();
//把路由容器挂载到app服务中
app.use(router);
```
我们划分模块的目的就是为了增强项目的可维护性，提升开发效率。
## 中间件
>https://expressjs.com/en/guide/using-middleware.html

![在这里插入图片描述](https://img-blog.csdnimg.cn/20190218144003713.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L01vbmVzdGVyXw==,size_16,color_FFFFFF,t_70)
中间件的本质就是一个请求处理方法，我们把用户从请求到响应的整个过程分发到多个中间件去处理，这样做的目的是提高代码的灵活性，动态可扩展的。
- 同一个请求所经过的中间件都是同一个请求对象和响应对象
### 应用程序级别中间件
万能匹配（不关心任何请求路径和请求方法）：

```javascript
app.use(function(req,res,next){
	console.log('Time:',Date.now())
	next()
})
```
仅以`/xxx/`开头的：

```javascript
app.use('/a',function(req,res,next){
	console.log('Time:',Date.now())
	next()
})
```
### 路由级别中间件
get:

```javascript
app.get('/',function(req,res){
	res.send('Hello World!')
})
```
post:
```javascript
app.post('/',function(req,res){
	res.send('Get a POST request')
})
```
put: 
```javascript
app.put('/user',function(req,res){
	res.send('Get a PUT request at /user')
})
```
delete:
```javascript
app.delete('/user',function(req,res){
	res.send('Get a DELETE request at /user')
})
```
### 错误处理中间件

```javascript
app.use(function(err,req,res,next){
	console.error(err.stack)
	res.status(500).send('Something broke!')
})
```
### 内置中间件
- [express.static()](https://expressjs.com/en/4x/api.html#express.static) serves static assets such as HTML files, images, and so on.
- [express.json()](https://expressjs.com/en/4x/api.html#express.json) parses incoming requests with JSON payloads. NOTE: Available with Express 4.16.0+
- [express.urlencoded()](https://expressjs.com/en/4x/api.html#express.urlencoded) parses incoming requests with URL-encoded payloads. NOTE: Available with Express 4.16.0+
### 第三方中间件
>https://expressjs.com/en/resources/middleware.html

- [body-parser](https://expressjs.com/en/resources/middleware/body-parser.html)
- [session](https://expressjs.com/en/resources/middleware/session.html)
- ... ...
# 增删改查curd案例
[github项目地址]
- 文件型数据库（锻炼异步编码）
## 起步
- 初始化
- 安装依赖
- 模块处理
## 路由设计
请求方法 | 请求路径 | get参数 | post参数 | 备注
-------- | ------- | ------- | ------- |----
GET      | /students |       |         | 渲染首页
GET      | /students/new |   |         | 渲染添加学生页面
POST     | /students/new |       | name,age,gender,hobbies | 处理添加学生请求
GET      | /students/edit | id  |      | 渲染编辑页面
POST     | /students/edit |  | id,name,age,gender,hobbies | 处理编辑请求
GET      | /students/delete | id |     | 处理删除请求
## 提取路由模块
router.js
```javascript
/*
router.js路由模块
职责：
	处理路由
	根据不同的请求方法+请求路径设置具体的请求处理函数
模块职责要单一
划分模块的目的是为了增强代码的可维护性
提高开发效率
*/
var express = require('express')
//1. 创建一个路由容器
var router = express.Router()
//2. 把路由都挂在到router路由容器中
router.get('/students',function(req,res){
})
router.get('/students/new',function(req,res){
})
router.post('/students/new',function(req,res){
})
router.get('/students/edit',function(req,res){
})
router.post('/students/edit',function(req,res){
})
router.get('/students/delete',function(req,res){
})
//3. 把router导出
module.exports = router
```
## 自己编写的步骤
- 处理模板
- 配置开放静态资源
- 配置模板引擎
- 简单路由：`/students`渲染静态页
- 路由设计
- 提取路由模块
- 由于接下来的业务操作都需要处理文件数据，所以我们要封装`student.js`
- 先写好`student.js`文件结构
	+ 查询所有学生列表的API find
	+ findById
	+ save
	+ updateById
	+ deleteById
- 实现具体功能
	+ 通过路由收到请求
	+ 接受请求中的数据（get,post）
		* `req.query`
		* `req.body`
	+ 通过数据操作API处理数据
	+ 根据操作结果给客户端发送响应
- 业务功能顺序
	+ 列表
	+ 添加
	+ 编辑
	+ 删除

# MongoDB（芒果数据库）
[菜鸟教程|MongoDB参考文档]
## 关系型数据库和非关系型数据库
表就是关系，或者说表与表之间存在关系
- 所有的关系型数据库都需要`sql`语言来操作
- 所有的关系型数据都在操作之前需要设计表结构
- 而且数据表还支持约束
	- 唯一的
	- 主键
	- 默认值
	- 非空
- 非关系型数据库非常的灵活
- 有的非关系型数据就是`key-value`键值对
- 但是MongoDB是长的最像关系型数据库的非关系型数据库
	- 数据库——数据库
	- 数据表——集合（数组）
	- 表记录——文档对象
- MongoDB不需要设计表结构
- 也就是说你可以任意的向里面存数据，没有结构性这个概念
## MongoDB数据库的基本概念
- 可以有多个数据库
- 一个数据库中可以有多个集合（表）
- 一个集合中可以有多个文档（表记录）
- 文档结构很灵活，没有任何限制
- MongoDB非常灵活，不需要像MySQL一样先创建数据库、表、设计表结构
	- 这里只需要当你需要插入数据的时候，只需要指定往哪个数据库的哪个集合操作就可以了
	- 一切都由MongoDB来自动帮你完成建库建表的事。
```javascript
{
	qq:{
		users:[
			{name:'张三1',age:15},
			{name:'张三2',age:15},
			{name:'张三3',age:15},
			{name:'张三4',age:15},
		],
		products:[],
		...
	}
	wechat:{}
	...
}
```
## 安装
### 下载
[MongoDB官网]
### 安装
这里不要勾选，其他一路下一步
![在这里插入图片描述](https://img-blog.csdnimg.cn/2019020117420736.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L01vbmVzdGVyXw==,size_16,color_FFFFFF,t_70)
### 配置环境变量
- 鼠标右键选择“计算机”“属性”，会弹出一个框，点击 “高级系统设置”，会弹出一个系统属性，找到环境变量，再点击系统变量里面的Path变量，点击编辑
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190201174419703.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L01vbmVzdGVyXw==,size_16,color_FFFFFF,t_70)
- 将MongoDB默认安装路径复制到里面，例如：`C:\Program Files\MongoDB\Server\4.0\bin`
- 命令行输入`mongod --version`出现以下结果就是安装成功。
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190201174753451.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L01vbmVzdGVyXw==,size_16,color_FFFFFF,t_70)
## 启动和关闭数据库
启动：
```shell
# mongodb默认使用执行mongod命令所处盘符根目录下的/data/db作为自己的数据存储目录
# 所以在第一次执行该命令之前手动新建/data/db目录
mongod
```
如果想要修改默认的数据存储目录，可以：
```shell
mongod --dbpath=数据存储目录路径
```
停止：
```shell
在开启服务的控制台，直接Ctrl+c即可停止
或者直接关闭控制台
```
## 连接和退出数据库
连接：
```shell
# 该命令默认连接本机的MongoDB服务
mongo
```
退出：
```shell
# 在连接状态输入exit退出连接
exit
```
## 基本命令
- 查看显示所有数据库
```shell 
show dbs
```
- 切换到指定的数据库（没有就会创建）
```shell
use 数据库名称
```
- 查看当前操作的数据库
```shell
db
```
- 查看当前数据库所有的集合
```shell
show collections
```
- 插入数据
```shell
db.students.insertOne({"name":"Jack"})
```
- 查询数据
```shell
# 查询所有students的数据
db.students.find()
```
## 在Node中如何操作MongoDB数据
### 使用官方的`mongodb`包来操作
[MongoDB官方驱动包]
#### 使用第三方mongoose操作MongoDB数据库
第三方包：`mongoose`基于MongoDB官方的`mongodb`包再一次做了封装
[mongoose官网]
[mongoose官方指南]
[mongoose官方API文档]
##### 起步
```shell
npm i mongoose
```
hello world
```javascript
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true});

const Cat = mongoose.model('Cat', { name: String });

const kitty = new Cat({ name: 'Zildjian' });
kitty.save().then(() => console.log('meow'));
```
##### 官方指南
- 设计Schema发布Model
```javascript
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//1. 连接数据库，指定连接的数据库不需要存在，当你插入第一条数据之后就会自动被创建出来
mongoose.connect('mongodb://localhost/demo1');
/*
2. 设计文档结构（表结构）
字段名称就是表结构中的属性名称
约束的目的就是为了保证数据的完整性，不要有脏数据
*/
var userSchema = new Schema({
	username: {
		type:String,
		required: true//必须有
	},
	password: {
		type: String,
		required: true
	},
	email: {
		type: String
	}
});
/*
3. 将文档结构发布为模型
   mongoose.model方法就是将一个架构发布为model
   第一个参数：传入一个大写名词单数字符串用来表示你的数据库名称
   			  mongoose会自动将大写名词的字符串生成小写复数的集合名称
   			  例如这里的User最终会变为users集合名称
   第二个参数：Schema
   返回值： 模型构造函数
*/ 
var User = mongoose.model('User',userSchema);
/*
4. 当我们有了模型构造函数之后，就可以使用这个构造函数对users集合中的数据为所欲为了(增删改查)
*/

```
- 增加数据
```javascript
var admin = new User({
	username: 'admin',
	password: '123456',
	email: 'admin@admin.com'
});
admin.save(function(err,ret){
	if(err){
		console.log('err')
	} else{
		console.log('ok')
		console.log(ret)
	}
});
```
- 查询数据
```javascript
 // 查询
User.find(/*{name: 'admin'},查找所有符合条件的，不加就是查询所有*/function(err,ret){
	if(err){
		console.log('err')
	} else {
		console.log(ret)
	}
})
// 按条件查询单个数据
User.findOne({
	username: 'admin', password: '123456'
},function(err,ret){
	if(err){
		console.log('err')
	} else {
		console.log(ret)
	}
})
```
- 删除数据
```javascript
User.remove({
	username: 'admin'
},function(err,ret){
	if(err){
		console.log('err')
	} else {
		console.log('ok')
	}
});
```
- 更新数据
```javascript
// 根据条件更新所有：
Model.update(conditiions,doc,[options],[callback]);
// 根据指定条件更新一个：
Model.findOneAndUpdate([conditions],[update],[options],[callback]);
// 根据id更新一个
User.findByIdAndUpdate('50dfd4535500df00554gf',{
	password: '123'
},function(err,ret){
	if(err){
		console.log('err')
	} else {
		console.log('ok')
	}
})
```
# 其他
## 修改完代码自动重启服务器
我们这里可以使用一个第三方工具：`nodemon`来帮我们解决频繁修改代码重启服务器的问题。
`nodemon`是一个基于Node.js开发的一个第三方命令行工具，我们使用的时候需要独立安装：
```cmd
npm install --global nodemon
```
安装完毕之后，使用：
```cmd
不用再使用node xx.js命令
使用nodemon
nodemon xxx.js
```
只要是通过`nodemon`启动的服务，它会监视你的文件变化，当文件发生变化，会自动重启服务器。
## 文件操作路径和模块路径
文件操作路径：
```javascript
/*
在文件操作的相对路径中
	./data/a.txt 相对于当前目录
	data/a.txt   相对于当前目录
	/data/a.txt  绝对路径，当前文件模块所处磁盘根目录
	c:/xx/xxx... 绝对路径
	fs.readFile('./data/a.txt',function(err,data){
		if(err){
			console.log(err)
			return console.log('读取失败')
		}
		console.log(data.toString)())
	})
*/
```
模块操作路径：
```javascript
//这里如果忽略了，则也是磁盘根目录
require('/data/foo.js')
//相对路径
require('.data/foo.js')
//模块加载的路径中的相对路径不能省略 ./
```







注：Node不适合从来没有接触过服务端的人学习
如果想要真正的学好服务端，还是老牌的java、PHP这些平台
node不是特别适合入门服务端，但不代表node不强大
node很厉害，具有经验的人可以玩的非常牛
不适合新手的原因就是在于偏底层、而且太灵活
java、PHP好入门的原因就在于：这些平台屏蔽了一些底层









[nodeAPI]:https://nodejs.org/en/docs/
[开源中国contentType对照表  ]:http://tool.oschina.net/commons
[《深入浅出Node.js》中的模块系统章节]:https://www.infoq.cn/article/nodejs-module-mechanism
[npm常用命令参考链接]:http://www.cnblogs.com/PeunZhang/p/5553574.html
[github仓库]:https://github.com/aui/art-template
[官方网站]:https://aui.github.io/art-template/
[Express官方网站]:https://expressjs.com/
[github项目地址]:https://github.com/Monster58/crud-express
[MongoDB官网]:https://www.mongodb.com/
[菜鸟教程|MongoDB参考文档]:http://www.runoob.com/mongodb/mongodb-tutorial.html
[MongoDB官方驱动包]:https://github.com/mongodb/node-mongodb-native
[mongoose官网]:https://mongoosejs.com/
[mongoose官方指南]:https://mongoosejs.com/docs/guides.html
[mongoose官方API文档]:https://mongoosejs.com/docs/api.html
