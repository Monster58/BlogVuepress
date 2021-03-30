---
title: React扩展笔记
date: 2021-03-30 10:56:44
categories: 前端框架
---

@[toc]
# React.js
[中文官网](https://react.docschina.org/)

## setState

### setState更新状态的两种写法

```js
(1).setState(stateChange,[callback]) ------对象式的setState
	1.stateChange为状态改变对象（该对象可以体现出状态的更改）
  2.callback是可选的回调函数，它在状态更新完毕，界面更新后（render调用后）才被调用
(2).setState(updater,[callback])-------函数式的setState
	1.updater为返回stateChange对象的函数。
  2.updater可以接收到state和props.
  3.callback是可选的回调函数，它在状态更新完毕，界面更新后（render调用后）才被调用
总结：
	1.对象式的setState是函数式的setState的简写方式
  2.使用原则
  	(1).如果新状态不依赖原状态=====>使用对象方式
		(2).如果新状态依赖原状态 ===> 使用函数方式
		(3).如果需要在setState()执行后获取最新的状态数据，需要在第二个callback函数中读取。
```

## LazyLoad

### 路由组件的LazyLoad

```jsx
//1.通过React的lazy函数配合import()函数动态加载路由组件 ====> 路由组件代码会被分开打包
const login = lazy(() => import('@/pages/Login'))

//2.通过<Suspense>指定在加载得到路由打包文件前显示一个自定义loding界面。
<Suspense fallback={<h1>loading....</h1>}>
  <Switch>
  	<Route path="/xxx" component={xxx} />
    <Redirect to="/login" />
  </Switch>
```

## Hooks

### React Hook/Hooks是什么

1. Hook是React 16.8.0版本增加的新特性/新语法。
2. 可以让你在函数式组件中使用state以及其他的React特性。

### 三个常用的Hook

```js
state Hook: React.useState()
Effect Hook: React.useEffect()
Ref Hook: React.useRef()
```

### State Hook

1. `State Hook`让函数组件也可以有`state`状态，并进行状态数据的读写操作
2. 语法：`const [xxx,setXxx] = React.useState(initValue)`
3. `useState()`说明：
   1. 参数：第一次初始化指定的值在内部作缓存
   2. 返回值：包含两个元素的数组，第一个为内部当前状态值，第二个为更新状态值得函数
4. `setXxx()`两种写法：
   1. `setXxx(newValue)`：参数为非函数值，直接指定新的状态值，内部用其覆盖原来的状态值。
   2. `setXxx(value => newValue)`：参数为函数，接受原本的状态值，返回新的状态值，内部用其覆盖原来的状态值

### Effect Hook

1. `Effect Hook`可以让你在函数组件中执行副作用操作（用于模拟类组件中的生命周期钩子）

2. React中的副作用操作：

   1. 发送`ajax`请求数据获取
   2. 设置订阅/启动定时器
   3. 手动更改真实DOM

3. 语法和说明：

   ```js
   useEffect(() => {
     //执行任何副作用操作
     return () => {
       //组件卸载前执行，可以做收尾工作，例如取消定时器/取消订阅
     }
   },[stateValue])//如果指定的[],回调函数只会在第一次render()后执行
   ```
   
4. 可以把`useEffect Hook`看做如下三个函数的结合

   1. `componentDidiMount()`
   2. `componentDidUpdate()`
   3. `componentWillUnmount()`
   
### Ref Hook

1. `Ref Hook`可以在函数组件中存储/查找组件内的标签或任意其他数据。
2. 语法：`const refContainer = useRef()`。
3. 作用：保存标签对象，功能与`React.createRef()`一样。

## Fragment

### 使用

```jsx
<Fragment></Fragment>
<></>
```

### 作用

> 替代真实的DOM根标签

## Context

> 一种组件间通信方式，常用于【祖组件】与【后代组件】间通信

### 使用

1. 创建Context容器对象

   ```js
   const XxxContext = React.createContext()
   ```

2. 渲染子组件时，外面包裹`xxxcontext.Provider`,通过value属性给后代组件传递数据：

   ```jsx
   <xxxContext.Provider value={data}>
   	<子组件/>
   </xxxContext.Provider>
   ```

3. 后代组件读取数据：

   ```jsx
   //第一种方式：仅适用于类组件
   static contextType = XxxContext//声明接受context
   this.context //读取context中的value数据
   //第二种方式：函数组件与类组件都可以
   <xxxContext.Consumer>
   	{
     	value => (//value就是context中的数据
     		return() //要显示的内容
     	)
   	} 
   </xxxContext.consumer>
   ```

### 注意

> 在应用开发中一般不用context，一般都用他封装react插件。

## 组件优化

### Component的两个问题

> 1. 只要执行`setState()`,即使不改变状态数据，组件也会重新`render()`
> 2. 只要当前组件重新`render()`，就会自动更新render子组件 ===> 效率低

### 效率高的做法

> 只有当前组件的state或props数据发生改变时才重新render()

### 原因

> Component中的shouldComponentUpdate()总是返回true

### 解决

1. 方法一：

   重写`shouldComponentUpdate()`方法

   比较新旧state或props数据，如果有变化才返回true，如果没有返回false

2. 方法二：

   使用PureComponent

   PureComponent重写了`shouldComponentUpdate()`，只有state或props发生变化才返回true

   注意：

   ​	只是进行state和props数据的浅比较，如果只是数据对象内部数据变了，返回false

   ​	不要直接修改state数据，而是产生新数据

3. 项目中一般使用`PureComponent`优化。

## render props

### 如何向组件内部动态传入带内容的结构（标签）？

vue中：

​	使用slot技术，也就是通过组件标签体传入结构`<a><b/></a>`

React中：

​	使用children props：通过组件标签体传入结构。

​	使用render props：通过组件标签属性传入结构，一般用render函数属性

### children props

```jsx
<A>
	<B>xxxxx</B>
</A>
{this.props.children}
//问题：如果B组件需要A组件内的数据， ===> 做不到
```

### render props

```jsx
<A render={data => <C data={data} />} />
//A组件：{this.props.render(内部state数据)
//C组件：读取A组件传入的数据显示{this.props.data}
```

## 错误边界

### 理解：

错误边界（Error boundary)：用来捕获后代组件错误，渲染出备用页面

### 特点：

只能捕获后代组件生命周期产生的错误，不能捕获自己组件产生的错误和其他组件在合成事件、定时器中产生的错误。

### 使用方式：

getDerivedStateFromError配合componentDidCatch

```jsx
//生命周期函数，一旦后代组件报错，就会触发
static getDerivedStateFromError(error){
  console.log(error)
  //在render之前触发
  //返回新的state
  return {
    haserror: true
  }
}
componentDidCatch(error,info){
  //统计页面的错误，发送请求到后台
  console.log(error,info)
}
```

## 组件通信方式总结

### 组件间的关系：

- 父子组件
- 兄弟组件（非嵌套组件）
- 祖孙组件（跨级组件）

### 几种通信方式：

1. props：

   1. children props
   2. render props

2. 消息订阅-发布：

   1. pub-sub、event等等

3. 集中式管理：

   redux、dva等等

4. conText：

   生产者-消费者模式

### 比较好的搭配方式

- 父子组件： props
- 兄弟组件：消息订阅-发布、集中式管理
- 祖孙组件（跨级组件）：消息订阅-发布、集中式状态管理、conText（开发用的少，封装插件用的多）





   

