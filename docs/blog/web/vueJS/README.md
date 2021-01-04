---
title: VueJS笔记
date: 2019-01-19 11:35:44
categories: 前端框架
---

@[toc]
# Vue.js
[中文官网](https://cn.vuejs.org/)
## 单页面应用程序
>Single Page Application
>简称SPA
## 网站交互及开发方式
### 经典的多页面
>例如：京东、淘宝等电商网站。
- 前后端融合，开发维护效率低下
- 用户体验一般，点击刷新跳转，等待时间过长
- 每个页面都需要重新加载渲染，速度慢
- 有利于SEO搜索引擎搜索
### 现代式的单页面
>例如：[网易云音乐](https://music.163.com/)、coding等。
>单页面应用程序的最主要的目的是为了让前后端分离，用户体验是次要的。
- 前后端分离，开发效率高，可维护性好
  - 服务端不关心页面，只关心数据
  - 客户端不关心数据库及数据操作，只关心通过接口那数据和服务端做交互，处理页面。
- 用户体验好，就像一个原生的客户端软件一样使用
- 只需要加载渲染局部视图即可，不需要整页刷新
- 单页面应用开发技术复杂，所以诞生了一堆开发框架
  - AngularJS
  - ReactJS
  - VueJS
- 单页面技术不是特别成熟（无法兼容到低版本浏览器）
- 但是现在除了一些电商网站，其实已经很少有系统需要去兼容低版本浏览器
- 大部分都是ie9以上
- 单页面由于数据都是异步加载过来的，所以不利于搜索引擎搜索。
- 手机WEB页面
- 管理系统
## 前端三大开发框架
>单页开发其实是比较复杂的，需要有一定的技术支撑
>所以就有了我们现在需要学习的三大框架
- Angular
  - 09年诞生
  - Google
  - 他的目的就是让我们开发单页面应用程序更方便了
  - 但是他最主要的就是为前端带来了MVVM开发模式
  - MVVM一句话：数据驱动视图，不操作DOM
- React
  - Facebook公司自己开发的一个Web开发框架
  - 组件化
- Vue
  - Vue作者：尤雨溪
  - 早期由个人开发
  - Vue借鉴了angular和react之所长，后起之秀。
## Vue.js介绍
- Vue (读音 /vjuː/，类似于 view) 是一套用于构建用户界面的渐进式框架。
## 多页面：以服务端为主导，前后端混合
- `.php`文件
## 单页面：前后端分离，各司其职
- 服务端只处理数据
- 前端只处理页面（两者通过接口交互）
## 模拟前后端分离开发模式
- 项目立项
- 需求分析
- 服务端的工作
  - 需求分析
  - 设计数据库
  - 接口设计（有时候前端也需要参与其中）
  - 接口开发（处理数据）
- 前端的工作
  - 需求分析
  - 写页面
  - 页面写好功能
  - 通过接口和服务端进行交互
## 对比Angular React
- Vue.js更轻量，gzip后大小只有20k+
- Vue.js更易上手，学习曲线平稳
- 吸取两家之长，借鉴了angular的指令和react的组件化
# Vue-cli
>Vue-cli是Vue的脚手架工具

![Markdown](VueJS笔记\20190308104601520.png)
>脚手架是建筑工人搭建的架子，帮助工人作业

技术圈中的脚手架就是编写基础的代码，`Vue-cli`就是帮助我们写好`Vue.js`基础代码的工具
![Markdown](VueJS笔记\20190308104923255.png)

# vue实例的生命周期
> 什么是生命周期：从Vue实例创建、运行、到销毁期间，总是伴随着各种各样的事件，这些事件，统称为生命周期。
> 生命周期钩子：就是生命周期事件的别名而已
- 主要的生命周期函数分类：
  - 创建期间的生命周期函数：
    - `beforeCreate`：实例刚在内存中被创建出来，此时，还没有初始化好`data`和`methods`属性
    - `created`：实例已经在内存中创建完毕，此时`data`和`methods`已经创建完毕，此时还没有开始编译模板
    - `beforeMount`：此时已经完成了模板的编译，但是还没有挂载到页面中
    - `mounted`：此时，已经将编译好的模板挂载到了页面指定的容器中显示
  - 运行期间的生命周期函数
    - `beforeUpdate`：状态更新之前执行次函数，此时`data`中的状态值是最新的，但是界面上显示的数据还是旧的，因为此时还没有重新开始渲染DOM节点
    - `updated`：实例更新完毕之后调用次函数，此时`data`中的状态值和界面上显示的数据都已经完成了更新，界面已经被重新渲染好了！
  - 销毁期间的生命周期函数：
    - `beforeDestroy`：实例销毁之前调用，在这一步，实例仍然完全可用。
    - `destroyed`：Vue实例销毁后调用，调用后，Vue实例指示的所有东西都会解绑，所有的事件监听器会被移除，所有的子实例也会被销毁
      ![Markdown](VueJS笔记\20190311172302717.png)

# [vue-resource实现get,post,jsonp请求](https://github.com/pagekit/vue-resource)

## jsonp的实现原理

> 除了vue-resource之外，还可以使用`axios`第三方包。

- 由于浏览器的安全性限制，不允许Ajax访问协议不同、域名不同、端口号不同的数据接口，浏览器认为这种访问不安全；
- 可以通过动态创建script标签的形式，把script标签的src属性，指向数据接口的地址，因为script标签不存在跨域限制，这种数据获取方式，称为JSONP（注意：根据jsonp的实现原理，所以只支持get请求）；
- 具体实现过程：
  - 现在客户端定义一个回调方法，预定义对数据的操作；
  - 再把这个回调方法的名称，通过URL传参的形式，提交到服务器的数据接口；
  - 服务器数据接口组织好要发送的的客户端的数据，在拿着客户端传递过来的回调方法名称，拼接出一个调用这个方法的字符串，发送给客户端去解析执行；
  - 客户端拿到服务器返回的字符串之后，当做Script脚本去解析执行，这样就能拿到JSONP的数据了；

# Vue中的动画

> 为什么要有动画：动画能够提高用户体验，帮助用户更好的理解页面中的功能；
>
> [官网](https://cn.vuejs.org/v2/guide/transitions.html)

![03](VueJS笔记/03.png)

## 使用过渡类名

1. HTML结构

   ```html
   <div id="app">
       <input type="button" value="动起来" @click="myAnimate">
       <!-- 使用transition将需要过渡的元素包裹起来 -->
       <transition name="fade">
           <div v-show="isshow">动画哦</div>
       </transition>
   </div>
   ```


2. Vue实例

   ```js
   // 创建Vue实例，得到viewModel
       let app = new Vue({
           el: '#app'
           data: {
               isshow: false
           },
           methods: {
               myAnimate(){
                   this.isshow = !this.isshow
               }
           }
       })
   ```

## 列表过渡

> 在实现列表过度的时候，如果需要过渡的元素是通过`v-for`渲染出来的，不能使用`transition`包裹，需要使用`transition-group`

1. 如果要为`v-for`循环创建的元素设置动画，必须为每一个元素设置`:key`属性
2. 给`transition-group`添加`appear`属性，实现页面刚展示出来的时候，入场的效果。
3. 通过为`transition-group`元素设置`tag`属性，指定`transition-group`渲染为指定的元素，如果不指定`tag`属性，则默认渲染为`span`标签。

```html
<transition-group appear tag="ul">
	<li v-for="(item,i) in list" :key="item.id" @click="del(i)">
    	{{item.id}}====={{item.name}}
    </li>
</transition-group>
```

# 定义Vue组件

> 什么是组件： 组建的出现，就是为了拆分Vue实例的代码量的，能够让我们以不同的组件，来划分不同的功能模块，将来我们需要什么样的功能，就可以去调用对应的组件即可；
>
> 组件化和模块化的不同：
>
> - 模块化： 是从代码逻辑的角度进行划分的；方便代码分层开发，保证每个功能模块的职能单一；
> - 组件化： 是从UI界面的角度进行划分的；前端的组件化，方便UI组件的重用；

## 全局组件定义的三种方式

1. 使用`Vue.extend`配合`Vue.component`方法：

```js
var login = Vue.extend({
    template: '<h1>登录</h1>'
});
Vue.component('login',login);
```

2. 直接使用`Vue.component`方法：

```js
Vue.component('register',{
    template: '<h1>注册</h1>'
})
```

3. 将模板字符串定义到`scritp`标签中：

```html
<script id="tmp1" type="x-template">
    <div><a href="#">登录</a> | <a href="#">注册</a></div>
</script>
```

同时，需要使用`Vue.component`来定义组件：

```javascript
Vue.component('account',{
    template: '#tmp1'
})
```

> 注意： 组建中的`DOM`结构，有且只能有唯一的根元素`(root Element)`来进行包裹！

## 局部子组件注册方式

```html
<div id="app">
    <demo1></demo1>
  </div>
  <template id="demo1">
    <h1>我是vm的私有组件</h1>
  </template>
  <script src="./node_modules/vue/dist/vue.js"></script>
  <script>
    var vm = new Vue({
      el: '#app',
      data: {},
      methods: {},
      components: {
        demo1: {
          template: '#demo1'
        }
      }
    });
  </script>
```

## 组件中展示数据和响应事件

1. 在组件中，`data`被定义为一个方法，并且返回一个对象。如下：

   ```js
   Vue.component('demo2',{
     template: '#demo2',
     data(){
       return {msg: 0}
     },
     methods: {
       add(){
         this.msg += 1
       }
     }
   })
   ```

   注意： 为什么组件中的`data`需要定义为一个方法并且返回一个对象？ 以计数器案例来演示：

   ```html
   <!DOCTYPE html>
   <html lang="zh-CN">
   
   <head>
     <meta charset="UTF-8">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <meta http-equiv="X-UA-Compatible" content="ie=edge">
     <title>vue-demo</title>
   </head>
   
   <body>
     <div id="app">
       <h1>错误案例</h1>
       <demo1></demo1>
       <demo1></demo1>
       <demo1></demo1>
       <h1>正确案例</h1>
       <demo2></demo2>
       <demo2></demo2>
       <demo2></demo2>
     </div>
   
     <template id="demo1">
       <div>
           <button @click="add">+1</button>
           <h1>{{msg}}</h1>
       </div>
     </template>
     <template id="demo2">
         <div>
             <button @click="add">+1</button>
             <h1>{{msg}}</h1>
         </div>
       </template>
     <script src="./node_modules/vue/dist/vue.js"></script>
     <script>
       let message = {msg: 0};
       // 定义一个全局组件demo1
       Vue.component('demo1',{
         template: '#demo1',
         data:function(){
           return message;
         },
         methods: {
           add(){
             this.msg += 1;
           }
         }
       });
       Vue.component('demo2',{
         template: '#demo2',
         data(){
           return {msg: 0}
         },
         methods: {
           add(){
             this.msg += 1
           }
         }
       })
       var vm = new Vue({
         el: '#app',
         data: {},
         methods: {}
       });
     </script>
   </body>
   
   </html>
   ```


2. 在子组件中，如果将模板字符串定义到了`script`标签中，那么要访问子组件身上的`data`属性中的值，需要实用`this`来访问。

## 使用`v-if`和`v-else`切换组件

1. 页面结构

   ```html
   <div id="app">
     <a href="#" @click.prevent="onoff = true">登录</a>
     <a href="#" @click.prevent="onoff = false">注册</a>
     <login v-if="onoff"></login>
     <register v-else="onoff"></register>
   </div>
   <template id="login">
     <h1>登录组件</h1>
   </template>
   <template id="register">
     <h1>注册组件</h1>
   </template>
   ```

2. 创建`Vue`实例

   ```js
   var vm = new Vue({
     el: '#app',
     data: {
       onoff: false
     },
     methods: {},
     components: {
       login: {
         template: '#login'
       },
       register: {
         template: '#register'
       }
     }
   });
   ```

## 多组件之间的切换，并添加切换动画

页面结构：

> 使用`commonent`标签引用组件，并通过`:is`属性来指定要加载的组件；

```html
<div id="app">
  <a href="#" @click.prevent="trigger='login'">登录</a>
  <a href="#" @click.prevent="trigger='register'">注册</a>
  <a href="#" @click.prevent="trigger='logout'">退出</a>
  <transition mode="out-in">
      <component :is="trigger"></component>
  </transition>
</div>
<template id="login">
  <h1>登录组件</h1>
</template>
<template id="register">
  <h1>注册组件</h1>
</template>
<template id="logout">
  <h1>退出组件</h1>
</template>
```

创建`Vue`实例

```js
var vm = new Vue({
  el: '#app',
  data: {
    trigger: 'login'
  },
  methods: {},
  components: {
    login: {
      template: '#login'
    },
    register: {
      template: '#register'
    },
    logout: {
      template: '#logout'
    }
  }
});
```

切换样式

```css
.v-enter,
.v-leave-to {
  opacity: 0;
  transform: translateX(60px);
}
.v-enter-active,
.v-leave-active {
  transition: all .3s ease;
}
```

#组件之间的通信

## 父组件向子组件传值

> 子组件默认无法访问父组件中的`data`上的数据和`methods`中的方法。
>
> 可以利用动态绑定属性的方式接受父组件中的数据，并且需要在子组件中用`props`数组定义一下才可以使用，并且`props`是只读的，不能修改。

```html
<div id="app">
  <demo :par-msg="msg"></demo>
</div>
<script src="./node_modules/vue/dist/vue.js"></script>
<script>
  var vm = new Vue({
    el: '#app',
    data: {
      msg: '我是父组件中的数据'
    },
    methods: {},
    components: {
      demo: {
        template: '<h1>我是vm的子组件,这是父组件中的数据: {{ parMsg }}</h1>',
        props: ['parMsg']
      }
    }
  });
</script>
```

## 子组件调用父组件的方法并向父组件传值

> 利用`v-on`接收父组件的方法，并且在子组件的`methods`中定义一个方法，在方法里面通过`this.$emit('方法名')`方法调用父组件中的方法。如果父组件的方法需要传参，则需要在`this.$emit（'方法名',参数1，参数2）`添加第二个参数作为父组件方法的接收值。

```html
<div id="app">
  <son @fun="doSomething"></son>
</div>
<template id="son">
  <div>
    <h1>我是子组件son</h1>
    <!-- 接受父组件的方法 -->
    <input @click="sonFun" type="button" value="调用父组件的方法">
  </div>
</template>
<script src="./node_modules/vue/dist/vue.js"></script>
<script>
  let son = {
    template: '#son',
    data() {
      return {
        sonMsg: {
          name: 'jack',
          age: 12
        }
      }
    },
    methods: {
      sonFun() {
        // 调用接收到的父组件的方法
        this.$emit('fun', this.sonMsg)
      }
    }
  }
  var vm = new Vue({
    el: '#app',
    data: {
      sonData: null
    },
    methods: {
      doSomething(data) {
        this.sonData = data
        console.log('调用了父组件中的方法')
      }
    },
    components: {
      son,
    }
  });
</script>
```

## 使用`this.$refs`来获取元素和组件

```html
<div id="app">
    <div>
        <input type="button" value="获取元素内容" @click="getElement">
        <!-- 使用 ref 获取元素 -->
        <h1 ref="myh1">这是一个h1</h1>
        <hr>
        <!-- 使用 ref 获取子组件 -->
        <my-com ref="mycom"></my-com>
    </div>
</div>
<script>
    Vue.component('my-com',{
        template: '<h4>这是一个子组件</h4>',
        data(){
            return {
                name: 'hello world'
            }
        }
    })
    let vm = new Vue({
        el: '#app',
        data: {},
        methods: {
            getElement(){
                // 通过 this.$refs 来获取元素
                console.log(this.$refs.myh1.innerText);
                // 通过 this.$refs 来获取组件
                console.log(this.$refs.mycom.name)
            }
        }
    })
</script>
```

# 在`vue`中使用`vue-router`

> 1. 后端路由： 对于普通的网站，所有的超链接都是`URL`地址，所有的`URL`	地址都对应服务器上对应的资源；
> 2. 前端路由： 对于一个单页面应用程序来说，主要通过`URL`中的`hash`（#号）来实现不同也main之间的切换，同时，`hash`有一个特点：`HTTP`请求中不会包含`hash`相关的内容；所以，单页面程序中的页面跳转主要用`hash`实现；
> 3. 在单页面应用程序中，这种通过`hash`改变来切换页面的方式，称作前端路由（区别于后端路由）；

## `vue-router`的基本使用

1.  创建一个路由对象，当导入`vue-router`包之后，在`window`全局对象中，就有了一个路由的构造函数：`VueRouter`

2. 在`new`路由对象的时候，可以为构造函数传递一个配置对象

   `routes`： 这个配置对象中的`route`表示【路由匹配规则】的意思，是一个数组。

3. 每个路由规则都是一个对象，这个规则对象身上必须有两个属性

   `path`： 表示监听哪个路由链接地址；

   `component`： 表示如果路由匹配到相应的`path`，则展示`component`属性对应的那个组件；（属性值必须是一个组件模板对象）

```html
<div id="app">
  <h1>vue-router</h1>
  <!-- router-link 默认渲染为一个a标签 -->
  <router-link to="/login">Go to login</router-link>
  <router-link to="/register">Go to register</router-link>
  <router-view></router-view>
</div>
<script>
  let login = {
    template: '<h3>登陆组件</h3>'
  }
  let register = {
    template: '<h3>注册组件</h3>'
  }
  let router = new VueRouter({
     routes: [
      {path: '/', redirect: '/login'},//重定向
      {path: '/login', component: login},
      {path: '/register', component: register}
    ],
     linkActiveClass: 'currentClass'
  })
  var vm = new Vue({
    el: '#app',
    data: {},
    methods: {},
    router
  });
</script>
```

补充： 使用`tag`属性指定`router-link`渲染的标签类型

`linkActiveClass`可以为当前选中组件添加类名。

## 在路由规则中定义参数

```html
<router-link to="/login?id=12">Go to login</router-link>
<router-link to="/register:1111">Go to register</router-link>
```

方式一：查询字符串

> 如果在路由中使用查询字符串给路由传递参数，则不需要修改路由规则的`path`属性。

```js
{path: '/login', component: login},
```

使用`this.$route.query.id`获取参数

方式二： 占位符`:`

```js
{ path: '/register:name', component: register }
```

使用`this.$route.params.name`获取参数

## 使用`children`属性实现路由嵌套

> 使用`children`属性实现子路由，注意：子路由的`path`前面不要带`/`，否则会以根路径进行请求。（这样不方便用户理解`url`地址）

```html
<div id="app">
  <router-link to="/account">点击展开</router-link>
  <router-view></router-view>
</div>
<template id="tmp1">
  <div>
    <h1>这是account组件</h1>
    <router-link to="/account/login">登录</router-link>
    <router-link to="/account/register">注册</router-link>
    <router-view></router-view>
  </div>
</template>
<script>
  let account = {
    template: '#tmp1'
  }
  let login = {
    template: '<h2>登录组件</h2>'
  }
  let register = {
    template: '<h2>注册组件</h2>'
  }
  let router = new VueRouter({
    routes: [
      {
        path: '/account',
        component: account,
        children: [
          {path: 'login', component: login},
          {path: 'register', component: register}
        ]
      }
    ]
  })
  let vm = new Vue({
    el: '#app',
    data: {},
    methods: {},
    router
  });
</script>
```

# 命名视图实习经典布局

> 给`<router-view>`添加`name`属性，可以在`components`配置对象中制定该标签要渲染的组件。

HTML结构

```html
<div id="app">
  <router-view></router-view>
  <div class="flexBox">
    <router-view name="left"></router-view>
    <router-view name="main"></router-view>
  </div>
</div>
```

JS

```js
let header = {
  template: '<h1 class="header">header</h1>'
}
let leftBox = {
  template: '<h1 class="left">leftBox</h1>'
}
let mainBox = {
  template: '<h1 class="main">mainBox</h1>'
}
let router = new VueRouter({
  routes: [
    {
      path: '/', components: {
        default: header,
        left: leftBox,
        main: mainBox
      }
    }
  ]
})
var vm = new Vue({
  el: '#app',
  data: {},
  methods: {},
  router
});
```

# 计算属性的特点

> 在`computed`中可以定义一些属性，叫做 **计算属性**，计算属性的本质就是一个方法，在使用计算属性的时候是把他们的名称直接当作属性来使用，并不会把计算属性当作方法去调用；

1. 计算属性在引用的时候不要加`()`去调用，直接当作普通属性去使用；
2. 只要计算属性内部所用到的任何`data`中的数据发生了变化，就会立即重新计算这个计算属性的值；
3. 计算属性的求值结果会被缓存起来方便下次直接使用；如果计算属性方法中用到的任何数据都没有发生变化，则不会重新对计算属性求值。提高运行效率；

# `watch`、`computed`和`methods`之间的对比

1. `computed`属性的结果会被缓存，除非依赖的响应式属性变化才会重新计算，主要当作属性来使用；
2. `methods`方法表示一个具体的操作，主要书写业务逻辑；
3. `watch`一个对象，键是需要观察的白哦大师，值是对应的回掉函数，主要用来监听某些特点数据的变化，从而进行某些具体的业务逻辑操作；可以看作是`computed`和`methods`的结合体；

# 在使用webpack构建的Vue项目中使用模板对象

> `import Vue from 'vue'`这种方式导入的是`dist/vue.runtime.common.js`这是由Vue包中的`package.json`中`main`属性决定的。

1. 在`webpack.config.js`中添加`resolve`属性：

```js
resolve:{
    alias: {
        'vue$': 'vue/dist/vue.js'
    }
}
```

2. 直接导入包的路径

   ![1560756528978](VueJS笔记/snipaste20190617_153012.png)

# vue-loader vue-template-compiler的使用

```shell
npm i vue-loader vue-template-compiler -D
```

`webpack.config.js`文件

```js
module: {
    rules: [
        {test: /\.vue$/, use: 'vue-loader'}
    ]
}
```

注意： 还需要启用vue-loader中的插件才可以正常使用

```js
const vueLoaderPlugin = require('vue-loader/lib/plugin')
//在插件配置对象中
plugins: [
    new vueLoaderPlugin()
]
```

# webpack中使用vue

1. 安装`vue`的包： `npm i vue`

2. 由于在`webpack`中推荐使用`.vue`这个组建模板定义组件，所以需要安装对应的`loader`： `npm i vue-loader vue-template-compiler -D`

3. 在`main.js`中导入`vue`模块： `import Vue from 'vue'`

4. 定义一个`.vue`结尾的组件，组建有三部分组成：

   ```html
   <template></template>
   <script></script>
   <style></style>
   ```

5. 使用`import login form './login.vue'`导入这个组件（不要忘了配置loader）

6. 创建`vm`实例

   ```js
   let vm = new Vue({
       el: '#app',
       render: c => c(login)
   })
   ```

7. 在页面中创建一个`id`为`app`的`div`元素，作为`vm`实例要控制的区域；

# 在vue组件页面中，集成vue-router路由模块

> [vue-router官网](https://router.vuejs.org/)

1. 导入路由模块

   ```js
   import VueRouter from 'vue-router'
   ```

2. 将路由挂载到vue上

   ```js
   Vue.use(VueRouter)
   ```

3. 导入需要展示的组件

   ```js
   import login from './components/login.vue'
   import register from './components/register.vue'
   ```

4. 创建路由对象

   ```js
   var router = new VueRouter({
     routes: [
       { path: '/', redirect: '/login' },
       { path: '/login', component: login },
       { path: '/register', component: register }
     ]
   });
   ```

5. 将路由对象，挂载到 Vue 实例上

   ```js
   var vm = new Vue({
     el: '#app',
     // render: c => { return c(App) }
     render(c) {
       return c(App);
     },
     router // 将路由对象，挂载到 Vue 实例上
   });
   ```

   # 组件中的css作用域

   > 样式默认是全局的，如果想只在组件内部生效，可以为`style`标签添加`scoped`属性，实现原理是通过`css`的属性选择器实现的；

   ```html
   <style scoped>
   </style>
   ```

   > 如果用`less`或者`sass`，则可以为`style`标签添加`lang`属性

   ```html
   <style scoped lang="less">
   </style>
   ```


