---
title: JS模块化
date: 2019-01-17 14:21:36
categories: 前端
---

>将一个复杂的程序依据一定的规则（规范）封装成几个块（文件），并组合在一起，这就是JS模块化。块的内部数据/实现是私有的，只是向外暴露一些接口（方法）与外部其他模块通信。
# 模块化规范
## CommonJS
### 规范
#### 说明
- 
- 每个文件都可当做一个模块
- 在服务器端：模块的加载是运行时同步加载的
- 在浏览器端：模块需要提前编译打包处理
#### 基本语法
##### 暴露模块
- `module.exports = value`
- `exports.xxx = value`
##### 引入模块
`require(xxx)`

###### 第三方模块、系统模块
xxx为模块名
###### 自定义模块
xxx为模块文件路径
### 实现
#### 服务端实现
`Node.js`
#### 浏览器端实现
`Browserify`
也称为CommonJS的浏览器端的打包工具
##### `Browserify`模块化使用教程
1. 创建目录结构

```javascript
|- js
	|- dist // 打包生成文件的目录
	|- src // 源码所在的目录
		|- module1.js
		|- module2.js
		|- module3.js
		|- app.js // 应用主源文件
|- index.html
|- package.json
```
2. 下载`browserify`
	- 全局安装
```shell
npm install browserify -g
```
	- 局部安装
```shell
npm install browserify --save-dev
```
3. 打包处理`js`

```shell
browserify js/src/app.js -o js/dist/bundle.js 
# -o output输出 前面是要打包的文件，后面是输出后的位置及文件名
```

## AMD
### 规范
#### 说明
- `Asynchronous Module Definition`（异步模块定义）
- https://github.com/amdjs/amdjs-api/wiki/AMD
- 专门用于浏览器端，模块的加载是异步的
#### 基本语法
##### 定义暴露模块

```javascript
//定义没有依赖的模块
define(function(){
	return 模块
})

//定义有依赖的模块
define(['module1','module2'],function(m1,m2){
	return 模块
})
```
##### 引入使用模块

```javascript
require(['moudle1','moudle2'],function(m2,m2){
	使用m1/m2
})
```
### 实现（浏览器端）
- `Require.js`
- http://www.requirejs.cn/
- http://www.ruanyifeng.com/blog/2012/11/require_js.html
#### require.js使用教程
1. 下载`require.js`	，并引入 `js/libs/require.js`
2. 创建项目结构

```javascript
|-js
	|- libs
		|- require.js
	|- modules
		|- modules1.js
		|- modulew2.js
	|- main.js
|- index.html
```
3. 定义`require.js`的模块代码
4. 应用主(入口)js: main.js

```javascript
(function () {
  //配置
  require.config({
    //基本路径
    baseUrl: 'js/',
    //映射: 模块标识名: 路径
    paths: {
      //自定义模块
      'alerter': 'modules/alerter',
      'dataService': 'modules/dataService',

      //库模块
      'jquery': 'libs/jquery-1.10.1',
      'angular': 'libs/angular'
      
    },

    //配置不兼容AMD的模块
    shim: {
      angular: {
        exports: 'angular'
      }
    }
  })

  //引入模块使用
  require(['alerter', 'angular'], function (alerter, angular) {
    alerter.showMsg()
    console.log(angular);
  })
})()
```
5. 引入require.js并指定js主文件的入口

```javascript
<script type="text/javascript" src="js/libs/require.js" data-main="js/main.js"></script>
```

## CMD（了解）
### 规范
#### 说明
- Common Module Definition（通用模块定义）
- https://github.com/seajs/seajs/issues/242
- 专门用于浏览器端，模块的加载是异步的
- 模块使用时才会加载执行
#### 基本语法
##### 定义暴露模块

```javascript
//定义没有依赖的模块
define(function(require,exports,module){
	exports.xxx = value
	module.exports = value
})

//定义有依赖的模块
define(function(require,exports,module){
	//引入依赖模块（同步）
	var module2 = require('./module2')
	//引入依赖模块（异步）
	require.async('./module3',function(m3){
	})
	//暴露模块
	exports.xxx = value
})
```

##### 引入使用模块

```javascript
define(function(require){
	var m1 = require('./module1')
	var m4 = require('./module4')
	m1.show()
	m4.show()
})
```
### 实现（浏览器端）
- Sea.js
- http://www.zhangxinxu.com/sp/seajs

```javascript
<!--
使用seajs:
  1. 引入sea.js库
  2. 如何定义导出模块 :
    define()
    exports
    module.exports
  3. 如何依赖模块:
    require()
  4. 如何使用模块:
    seajs.use()
-->
<script type="text/javascript" src="js/libs/sea.js"></script>
<script type="text/javascript">
  seajs.use('./js/modules/main')
</script>
```

## ES6*
### 规范
#### 说明
- http://es6.ruanyifeng.com/#docs/module
- 依赖模块需要编译打包处理	
#### 语法
- 导出模块：`export`，`export default`
- 引入模块：`import xxx，{xxx} from '路径'`
### `export`和`export default`的区别

​      `export default`

1. `export default`向外暴露的成员，可以使用任意的变量来接受，

2. 在一个模块中，`export default`只允许向外暴露一次，

3. 在一个模块中可以同时使用`export default`和`export`向外暴露成员，

   `export`

4. 使用`export`向外暴露的成员，只能使用`{}`的形式来接收，这种形式叫（按需导出），

5. `export`可以向外暴露多个成员，同时，如果某些成员在`import`的时侯不需要则可以不在`{}`中定义

6. 使用`export`导出的成员必须严格安装导出时的名称使用`{}`接收，

7. 如果想换个名称来接收的话可以使用`as`改名；

例如：

module1.js

```js
export msg = 'hello world'
```

module2.js

```js
import {msg as msg222} from './m'
```



### 实现（浏览器端）

- 使用`Babel`将ES6编译为ES5代码
- 使用`Browserify`编译打包js
#### ES6-Babel-Browserify使用教程
1. 安装`babel-cli`,`babel-preset-es2015`和`browserify`

```shell
npm install babel-cli browserify -g
npm install babel-preset-es2015 --save-dev
```
2. 定义`.babelrc`文件

```json
{
	"presets": ["es2015"]
}
```
3. 定义`.babelrc`文件

```json
{
	"presets":["es2015"]
}
```
4. 编码
- js/src/module1.js  分别暴露

```javascript
export function foo() {
  console.log('module1 foo()');
}
export function bar() {
  console.log('module1 bar()');
}
export const DATA_ARR = [1, 3, 5, 1]
```
- js/src/module2.js  统一暴露

```javascript
let data = 'module2 data'

function fun1() {
  console.log('module2 fun1() ' + data);
}

function fun2() {
  console.log('module2 fun2() ' + data);
}

export {fun1, fun2}
```
- js/src/module3.js默认暴露

```javascript
export default {
  name: 'Tom',
  setName: function (name) {
    this.name = name
  }
}
```
- js/src/app.js

```javascript
import {foo, bar} from './module1'
import {DATA_ARR} from './module1'
import {fun1, fun2} from './module2'
import person from './module3'

import $ from 'jquery'

$('body').css('background', 'red')

foo()
bar()
console.log(DATA_ARR);
fun1()
fun2()

person.setName('JACK')
```
5. 编译
- 使用Babel将ES6编译为ES5代码(但包含CommonJS语法) : babel js/src -d js/lib
- 使用Browserify编译js : browserify js/lib/app.js -o js/lib/bundle.js
6. 页面中引入测试

```javascript
<script type="text/javascript" src="js/lib/bundle.js"></script>
```
7. 引入第三方模块(jQuery)
- 下载jquery模块
- 在app.js中引入并使用
```javascript
 import $ from 'jquery'
 $('body').css('background', 'red')
```
