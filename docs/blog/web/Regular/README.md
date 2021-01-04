---
title: 正则表达式（笔记）
date: 2018-01-17 11:25:07
categories: 前端
---

# RegExp
w3school: http://www.w3school.com.cn/js/jsref_obj_regexp.asp
## 正则表达式的作用：
  匹配特殊字符或有特殊搭配原则的字符串的最佳选择。
## 两种创建方式
1. 推荐使用
```javascript
var reg = /abc/;
   ```
  - 例：
```javascript
 var reg = /abc/i     //i  ignoreCase    忽视大小写
 var reg = /abc/m  //m  执行多行匹配
 var reg = /abc/ g   //  g  global  执行全局匹配（查找所有匹配而非在找到第一个匹配后停止）
 ```
2. new  RegExp( )
```javascript
var reg = new RegExp()
```
## 正则表达式方法
- compile : 编译正则表达式。
- exec : 检索字符串中指定的值。返回找到的值，并确定其位置。
- test : 检索字符串中指定的值。返回 true 或 false。
## 支持正则的字符串方法
- search ： 检索与正则表达式相匹配的值。
- match : 找到一个或多个正则表达式的匹配
- replace：替换与正则表达式匹配的子符串。
- split：把字符串分割为字符串数组
## 方括号（摘自w3school）
![摘自w3school](https://img-blog.csdnimg.cn/20181220203455347.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L01vbmVzdGVyXw==,size_16,color_FFFFFF,t_70)
## 元字符（摘自w3school）
![在这里插入图片描述](https://img-blog.csdnimg.cn/2018122020365470.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L01vbmVzdGVyXw==,size_16,color_FFFFFF,t_70)
## 量词（摘自w3school）
![在这里插入图片描述](https://img-blog.csdnimg.cn/20181220205121264.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L01vbmVzdGVyXw==,size_16,color_FFFFFF,t_70)
## 例题
```javascript
var str = "100000000";
var reg = /(?=(\B)(\d{3})+$)/g;
console.log(str.replace(reg,"."));
//输出结果为：100.000.000
```