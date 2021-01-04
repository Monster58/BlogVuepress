---
title: webpack入门
date: 2019-03-17 14:21:22
categories: 前端
---


>[webpack中文文档](https://www.webpackjs.com/concepts/)
>[webpack官网](https://webpack.github.io/)
# 了解webpack相关
## 什么是webpack
- webpack是一个模块打包器（bundler）
- 在webpack看来，前端所有的资源文件（js/json/css/img/less/...）都会作为模块处理
- 它将根据模块的依赖关系进行静态分析，生成对应的静态资源
### 理解loader
- `webpack`本身只能加载`JS/JSON`模块，如果要加载其他类型的文件（模块），就需要使用对应的`loader`进行转换/加载
- `loader`本身也是运行在node.js环境中的javascript模块
- 它本身是个函数，接受源文件作为参数，返回转换得结果
- `loader`一般以`xxx-loader`的方式命名，`xxx`代表了这个`loader`需要做的转换功能，比如`json-loader`
### 配置文件（默认）
- `webpack.config.js`是一个node模块，返回一个json格式的配置信息对象
## 插件
- 插件可以完成一些loader不能完成的功能。
- 插件的使用一般是在webpack的配置信息plugins选项中指定。
- `CleanWebpackPlugin`： 自动生成HTML文件
- `UgligyJSPlugin`: 压缩js文件
# 安装webpack
```shell
# 全局安装
# 不推荐全局安装 webpack。这会将你项目中的 webpack 锁定到指定版本，并且在使用不同的 webpack 版本的项目中，可能会导致构建失败。
npm install webpack -g
# 局部安装
npm install webpack --save-dev
```
>如果你使用 webpack 4+ 版本，你还需要安装 CLI。

```shell
npm install --save-dev webpack-cli
```
# 编译打包应用
- 创建入口`src/js/entry.js`
- 创建主页面`dist/index.html`
	- `<script type="text/javascript" src="bundle.js"></script>`
- 编译js
	

```shell
webpack src/js/entry.js dist/bundle.js
```
# 添加js/json文件
* 创建第二个js: src/js/math.js
    ```javascript
    export function square(x) {
      return x * x;
    }
    
    export function cube(x) {
      return x * x * x;
    }
    ```
* 创建json文件: src/json/data.json
    ```json
    {
      "name": "Tom",
      "age": 12
    }
    ```
* 更新入口js : entry.js
    ```javascript
    import {cube} from './math'
    import data from '../json/data.json'
    //注意data会自动被转换为原生的js对象或者数组
    document.write("entry.js is work <br/>");
    document.write(cube(2) + '<br/>');
    document.write(JSON.stringify(data) + '<br/>')
    ```
* 编译js:
    ```shell
    webpack src/js/entry.js dist/bundle.js
    ```
# 使用webpack配置文件 
1. 根目录下创建`webpack.config.js`文件

```javascript
    const path = require('path'); //path内置的模块，用来设置路径。
    
    module.exports = {
      entry: './src/js/entry.js',   // 入口文件
      output: {                     // 输出配置
      	filename: 'bundle.js',      // 输出文件名
      	path: path.resolve(__dirname, 'dist')   //输出文件路径配置
      }
    };
```
## 配置npm命令`package.json`

```shell
"scripts": {
      "build": "webpack"
 },
```
## 打包应用

```shell
npm run build
```
# 打包css和图片文件
- 安装样式的`loader`

```shell
npm install css-loader style-loader --save-dev
npm install file-loader url-loader --save-dev
#补充：url-loader是对象file-loader的上层封装，使用时需配合file-loader使用。
```
>大图无法打包到entry.js文件中，index.html不在生成资源目录下。
>页面加载图片会在所在目录位置查找，导致页面加载图片时候大图路径无法找到
>解决办法：
>
>	1. 使用publicPath : `dist/js/' `//设置为`index.html`提供资源的路径,设置完后找所有的资源都会去当前目录下找。
>
>2. 将`index.html`放在`dist/js/`也可以解决。
```js
module: { //用来配置第三方loader模块的
    rules: { //文件的匹配规则
        {test: /\.css$/, use: ['style-loader', 'css-loader']}//处理css文件的规则
    }
}
```

注意： `use`表示使用哪些模块来处理`test`所匹配到的文件；`use`中相关`loader`模块的调用顺序 是从后向前调用的；

## url-loader的使用

> webpack无法处理css文件中的url地址，不管是图片还是字体库；
>
> url-loader默认会把图片转为base64格式，并且为避免图片重名会对对图片进行重命名

```js
{ test: /\.(jpg|png|gif|bmp|jpeg)$/, use: 'url-loader?limit=7631&name=[hash:8]-[name].[ext]'}
```

- 以浏览器地址栏传参的形式为url-loader传入参数，`limit`给定的值是图片的大小，单位是字节`byte`，如果引用的图片大于或等于给定的`limit`值，则不会转为`base64`格式的字符串，如果图片小于给定的`limit`值，则会转为`base64`字符串；
- `name`设定文件名的格式，`[hash：8]`为hash值的前八位，`-`表示以`-`进行拼接,`[name]`表示原名字，`[ext]`表示已原后缀名结尾；

# 打包less

```shell
npm i less less-loader -D
```

```js
{test: /\.less/, use: ['style-loader', 'css-loader', 'less-loader']}
```



# 自动编译打包

- 利用webpack开发服务期工具`webpack-dev-server`
- 下载

```shell
npm install --save-dev webpack-dev-server
```
- webpack.config.js配置

```js
devServer:{
	contentBase: './dist'
},
```
- package.json配置

```json
"start": "webpack-dev-server --open"
```
- 编译打包应用并运行

```shell
npm start
```
# 使用webpack插件

> 由于使用`--contentBase`指令的过程比较繁琐，需要指定启动的目录，同时还需要修改`index.html中的script标签的src属性`，所以推荐使用`html-webpack-plugin`插件配置启动页面；

- 常用的插件
	- 使用`html-webpack-plugin`根据模板html生成引入script的页面
	- 使用`clean-webpack-plugin`清除dist文件夹
- 下载

```shell
npm install --save-dev html-webpack-plugin clean-webpack-plugin
```
- `webpack.config.js`配置

```js
const HtmlWebpackPlugin = require('html-webpack-plugin'); //自动生成html文件的插件
const CleanWebpackPlugin = require('clean-webpack-plugin'); //清除之前打包的文件   
plugins: [
	new HtmlWebpackPlugin({template: './index.html'}),
	new CleanWebpackPlugin(['dist']),
]
```
- 打包运行项目

```shell
npm run build
npm start
```
