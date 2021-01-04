---
title: ES6笔记
date: 2018-06-17 14:21:55
categories: 前端
---

>[ECMAScript 6 入门  阮一峰 著
](http://es6.ruanyifeng.com/)
> 常用
# let和const关键字
## let
### 作用
与var类似，用于声明一个变量
### 特点
- 在块级作用域有效
- 不能重复声明
- 不会预处理，不存在变量提升
### 应用：
- 循环遍历加监听
- 使用let取代var是趋势
## const
### 作用
- 定义一个常量
### 特点
- 不能修改（引用值可以改变）
- 其他特点同let
### 应用
- 保存不用更改的数据
# 变量的解构赋值
## 理解：
从对象或数组中提取数据，并赋值给变量（多个）
## 对象的解构赋值

```javascript
let {n,a} = {n:'tom',a:12}
```
## 数组的解构赋值

```javascript
let [a,b] = [1,'abc']
```
## 用途
给多个形参赋值
## EX：

```javascript
		//ES5
		var obj = {userName:'tom',lastName:'li'}
		var userName = obj.userName;
		var lastName = obj.lastName;
		//ES6
		let obj = {userName:'tom',lastName:'li'}
		let {userName,lastName} = obj
		console.log(userName,lastName)

		let arr = [1,3,5,'abc',true];
		let [,,a,b] = arr;
		console.log(a,b)

		//为形参赋值
		function foo ({userName,lastName}){
			console.log(userName,lastName)
		}
		foo(obj)
```
# 模板字符串
## 作用：
简化字符串的拼接
## 语法
模板字符串必须写在`两个``（反引号）里面`，变化部分使用`${xxx}`定义

```javascript
		let name = 'tom'
		let age = 13
		console.log(`my name is ${name},my age is ${age}`)
```
# 简化的对象写法
- 省略同名的属性值
- 省略方法的function

```javascript
let x = 1;
let y = 2;
let point = {
	x,
	y,
	set(x) {this.x = x}
```
# 箭头函数
- 箭头函数特点：
	1. 简洁
	2. 箭头函数没有自己的this，箭头函数的this不是调用的时候决定的，而是定义的时候处在的对象就是他的this
	3. 扩展理解： 箭头函数的this看外层是否有函数，
		如果有，外层函数的this就是内部箭头函数的this，
		如果没有，this就指向window
## 形参的情况
```javascript
//1. 没有形参的时候 必须有（）
let fun = () => console.log('我是箭头函数');
fun();
//2. 只有一个形参的时候（） 可以省略
let fun1 = a => console.log(a)
fun1('hehe');
//3. 两个及两个以上 （）  不能省略
let fun2 = (a,b,c,...) => console.log(x,y);
fun2()
```
##  函数体的情况

```javascript
//1. 函数体只有一条语句或者是表达式 {} 可以省略---->会自动返回语句执行结果或者是表达式的结果。
let fun3 = (x,y) => x + y;
console.log(fun3(1,3))
// 2. 函数体不止一条语句或者是表达式的情况 {} 不可以省略
let fun4 = (x,y) => {
	console.log(x,y);
	//需要手动返回
	return x + y;
};
console.log(fun4(35,49));
```
# 点点点运算符
## 用途
1. rest（可变）参数
	用来取代arguments 但比arguments灵活，只能是最后部分形参参数（如果`...value`前面还有形参，那么`...value`就是剩下的形参，而且`...value`只能放到最后面 ）
```javascript
    function fun(...value) {
        console.log(arguments);
        //arguments是伪数组，没有forEach方法，所以下面会报错
        /*arguments.forEach(function(item, index) {
            console.log(item, index);
        })*/
        console.log(value);
        value.forEach(function(item, index) {
            console.log(item, index);
        })
    }
    fun(1,2,3,3)
```
2. 扩展运算符

```javascript
let arr1 = [2,3,4,5];
let arr2 = [1,...arr1,6];
console.log(arr2);
// ====> [1,2,3,4,5,6]
```
# 形参默认值
当不传入参数的时候默认使用形参里的默认值

```javascript
    function Point(x=1,y=2){
    	this.x = x;
    	this.y = y;
    }
    let point = new Point()
    console.log(point)
    let point2 = new Point(3,4)
    console.log(point2)
```
输出结果：
![在这里插入图片描述](https://img-blog.csdnimg.cn/2019022613510974.png)
# Promise对象
## 理解：
- Promise对象：代表了未来某个将要发生的事件（通常是一个异步操作）
- 有了promise对象，可以将异步操作以同步的流程表达出来，避免回调地狱
- ES6的Promise是一个构造函数，用来生成promise实例
## 使用promise基本步骤（2步）
```javascript
// 创建promise对象
let promise = new Promise((resolve,reject) => {
	//初始化promise状态为pending
	//执行异步操作
	if(异步操作成功){
		resolve(value);//修改promise的状态为fullfilled
	} else {
		reject(errMsg);//修改promise状态W为rejected
	}
})
// 调用promise的then()
promise.then(function(result => console.log(result),
errorMsg => alert(errorMsg)
))
```
## promise对象的三个状态
- pending： 初始化状态
- fullfilled： 成功状态
- rejected： 失败状态
## 应用：
- 使用promise实现超时处理
- 使用promise封装处理Ajax请求

```javascript
let request = new XMLHttpRequest();
request.onreadystatechange = function(){}
request.responseType = 'json';
request.open("GET",url);
request.send();
```
# Symbol
>ES5中对象的属性名都是字符串，容易造成重名，污染环境
## 概念：
ES6中的          添加了一种原始数据类型`symbol`
## 特点：
1. Symbol属性对应的值是唯一的
2. Symbol值不能与其他数据进行计算，包括同字符串拼串
3. `for in`，`for of`遍历时不会遍历symbol属性
## 使用：
1. 调用Symbol函数得到symbol值

```javascript
let symbol = Symbol();
let obj = {};
obj[symbol] = 'hello';
```
2. 传参标识

```javascript
let symbol = Symbol('one');
let symbol2 - Symbol('two');
console.log(symbol);//Symbol('one')
console.log(symbol2);//Symbol('two')
```
3. 内置Symbol值
> 除了定义自己使用的Symbol值以外，ES6还提供了11个内置的Symbol值，指向语言内部的使用方法。
- `Symbol.iterator`
	对象的Symbol.iterator属性，指向该对象的默认遍历器方法
## Iterator遍历器
### 概念：
Iterator是一种接口机制，为各种不同的数据结构提供统一的访问机制
### 作用：
1. 为各种数据结构，提供统一的、简便的访问接口
2. 使得数据结构的成员能够按某种次序排列
3. ES6创造了一种新的遍历命令`for...of`循环，Iterator接口机制主要供`for...of`消费
### 工作原理
- 创建一个指针对象（遍历器对象），指向数据结构的起始位置。
- 第一次调用`next`方法，指针自动指向数据结构的第一个成员
- 接下来不断调用`next`方法，指针会一直往后移动，知道指向最后一个成员
- 每调用`next`方法返回的是一个包含`value`和`done`的对象，`value：当前成员的值，done：布尔值`
	* value表示当前成员的值，`done`对应的布尔值表示当前的数据结构是否遍历结束。
	* 当遍历结束的的时候返回的`value` 的值是`undefined`,`done`值为`false`
> 原生具备iterator接口的数据（可用for of遍历）
### 扩展理解
1. 当数据结构上部署了`Symbol.iterator`接口，该数据就是可以用`for of`遍历
# Generator函数
## 概念：
1. ES6提供的解决异步编程的方案之一
2. Generator函数是一个状态机，内部封装了不同状态的数据
3. 用来生成遍历器对象
4. 可暂停函数（惰性求值），`yield`可暂停，`next`方法可启动。每次返回的是`yield`后的表达式结果。
## 特点：
1. function与函数名之间有一个`*`号
2. 内部用`yield`表达式来定义不同的状态
	例如：
	

```javascript
function* generatorExample(){
	let result = yield 'hello'; // 状态值为hello
	yield 'generator'; // 状态值为generator
}
```
3. `generator函数`返回的是指针对象,而不会执行函数内部逻辑。
4. 调用`next`方法函数内部逻辑开始执行，遇到`yield`表达式停止，返回`{value: yiedl后的表达式结果/undefined，done: true/false}`
5. 再次调用`next`方法会从上一次停止时的`yield`处开始，直到最后
6. `yield`语句返回结果通常为undefined，当调用`next`方法时传参内容会作为启动时`yield`语句的返回值。
# async函数（源自ES2017）
## 概念：
 真正意义上去解决异步回调的问题，同步流程表达异步操作
## 本质
Generator的语法糖
## 语法：

```javascript
async function foo(){
	await 异步操作;
	await 异步操作;
}
```
## 特点：
1. 不需要像`Generator`去调用next方法，遇到`await`等待，当前的异步操作完成就会往下执行。
2. 返回的总是`Promise对象`，可以用`then`方法进行下一步操作
3. `async`取代`Generator函数`的`*`号，`await`取代`Generator`的`yield`
4. 语义上更为明确，使用简单。
# class
1. 通过`class`定义类/实现类的继承
2. 在类中通过`constructor`定义构造方法
3. 通过`new`	来创建类的实例
4. 通过`extends`类的继承
5. 通过`super`调用父类的构造方法
>里面必须用对象的简写方法

```javascript
//定义一个人物的类
//父类
class Person {
	constructor(name,age){
		this.name = name;
		this.age = age;
	}
	//类的一般方法
	sayHi(){
		console.log('hi');
	}
}
let person = new Person('jack',23);
console.log(person);
person.sayHi(); // hi

//子类
class StarPerson extends Person{
	constructor(name,age,salary){
		super(name,age);//调用父类的构造方法
		this.salary = salary;
	}
	//父类的方法重写，没有的话实例会向上找到父类的方法
	sayHi(){
		console.log('hello')
	}
}
let p1 = new StarPerson('tom',34,120000)
console.log(p1);
p1.showName();// hello
```
> 其他
# 字符串扩展
1. `includes(str)` 判断是否包含指定的字符串

```javascript
let str = 'sagkajsgjgsjg';
console.log(str.includes('t'))//false
console.log(str.includes('s'))//true
```

2. `startsWith(str)` 判断是否以指定字符串开头

```javascript
console.log(str.startsWith('sa'))//true
```

3. `endsWith(str)` 判断是否以指定字符串结尾

```javascript
console.log(str.endsWith('g'))//true
```

4. `repeat(count)` 重复指定次数

```javascript
let str = 'abc';
console.log(str.repeat(3))//abcabcabc
```
5. `padStart(maxLength,fillstring='')`从首位填充字符串

```js
//例如处理时间的情况，日期为单数则前面加一个0
let date = new Date()
let Month = date.getMonth()
Month.toString().padStart(2,'0') // 0X
```

6. `padEndt(maxLength,fillstring='')`从末位填充字符串
# 数值的扩展
1. 二进制与八进制数值表示法：二进制用`0b`，八进制用`0o`

```javascript
console.log(0b1010);//10
console.log(0o56);//46
```
2. `Number.isFinite(i)` 判断是否是有限大的数，`Infinity`无穷大
3. `Number.isNaN(i)` 判断是否是`NaN`
4. `Number.isInteger(i)` 判断是否是整数
5. `Number.parseInt(str)` 将字符串转换为对应的数值
6. `Math.trunc(i)` 直接去除小数部分
# 数组的扩展
1. `Array.from(v)` 将伪数组对象或可遍历对象转换为真数组

```javascript
let btns = document.getElementsByTagName('button');//伪数组
Array.form(btns).forEach(function(item,index){
	console.log(item);
})
```

2. `Array.of(v1,v2,v3)` 将一系列数值转换为数组
```javascript
let arr = Array.of(1,34,6,'ba',true);
console.log(arr); //[1,34,6,'ba',true]
```
3. `find(function(value,index,arr){return true})`找出第一个满足条件返回`true`的元素
```javascript
let arr = [1,2,3,4,5];
let result = arr.find(function(item,index){
	return item > 2
})
console.log(result)
//3
```
4. `findIndex(function(value,index,arr){return true})` 找出第一个满足条件返回`true`的元素的下标
```javascript
let arr = [1,2,3,4,5];
let result = arr.findIndex(function(item,index){
	return item > 2
})
console.log(result)
//2
```
# Object扩展
1. `Object.is(v1,v2)` 判断2个数据是否完全相等（以字符串形式判断）
2. `Object.assign(target,source1,source2..)` 将源对象的属性复制到目标对象上

```javascript
let obj = {};
let obj1 = {username: 'jack',age: 23}
let obj2 = {sex: 1}
console.log(Object.assign(obj,obj1,obj2))
// {username: 'jack',age: 23,sex: 1}
```

3. 直接操作`__proto__`属性

```javascript
let obj2 = {};
obj2.__proto__ = obj1;
```
# 深度克隆
## 拷贝数据
- 基本数据类型：
	拷贝后会生成一份新的数据，修改拷贝后的数据不会影响原数据
- 对象/数组
	拷贝后不会生成新的数据，而是引用。修改拷贝后的数据会影响原来的数据
1. 直接赋值给一个变量    浅拷贝
2. `Object.assign()`   浅拷贝
3. `Array.prototype.concat()`   浅拷贝
4. `Array.prototype.slice()`   浅拷贝
5. `JSON.parse(JSON.stringify())`   深拷贝（深度克隆），拷贝的数据里不能有函数，处理不了。
# Set容器和Map容器
## Set容器：无序不可重复的多个value的集合体
- `Set()`
- `Set(array)`
- `add(value)`
- `delete(value)`
- `has(value)`
- `clear()`
- `size`

```javascript
let set = new Set([1,2,3,4,5])
```

## Map容器：无序的key不重复的多个key-value的集合体
- `Map()`
- `Map(array)`
- `set(key,value) //添加`
- `get(key)`
- `delete(key)`
- `has(key)`
- `clear()`
- `size`

```javascript
//以二位数组的形式传入多个key-value
let map = new Map([['key','value'],[23,'age']])
```
# ES7
>ES7正式发布的
1. 指数运算符（幂）：`**`

```javascript
console.log(3 ** 3) // 27
```

2. `Array.prototype.includes(value)` 判断数组中是否包含指定`value`
