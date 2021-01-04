---
title: 常用JS代码段
date: 2018-05-30 12:10:37
categories: 前端
---

# HTML5 DOM选择器

```js
//querySelector() 返回匹配到的第一个元素
var item = document.querySelector('.item');
console.log(item);

//querySelectorAll() 返回匹配到的所有元素，是一个nodeList集合
var items = document.querySelectorAll('.itme');
cosole.log(item[0]);
```

# 阻止默认行为

```javascript
//原生js
document.getElementById('btn').addEventListener('click',function(event){
    event = event || window.event;
    if (event.preventDefault){
        //主流浏览器阻止默认行为
        event.preventDefault();
    } else{
        //IE阻止默认行为
        event.returnValue = false;
    }
},false);

//JQuery
$('#btn').on('click',function(event){
    event.preventDefault();
});

```

# 阻止冒泡

```javascript
//原生js
document.getElementById('btn').addEventListener('click',function(e){
	event = event || window.event;
	if (event.stopPropagation){
		// 主流浏览器阻止冒泡
		event.stopPropagation();
	} else {
		//ie阻止冒泡
		event.cancelBubble = true;
	}
},false);

//jQuery
$('#btn').on('click',function(e){
	event.stopPropagation();
});
```

# 鼠标滚轮事件

```javascript
$('#content').on('mousewheel DOMMouseScroll',function(e){
    //滚动兼容处理
    var delta = (event.originalEvent.wheelDelta && (event.originalEvent.wheelDelta > 0 ? 1 : -1)) || (event.originalEvent.detail && (event.originalEvent.detail > 0 ? -1 : 1));
    if (delta > 0) {
        //向上滚动
        console.log('mousewheel top');
    } else if (delta < 0){
        //向下滚动
        console.log('mousewheel bottom');
    }
})
```

# 检查浏览器是否支持svg

```javascript
function isSupportSVG() {
    var SVG_NS = 'http://www.w3.org/2000/svg';
    return !!document.createElementNS &&!!docunent.createElementNS(SVG_NS,'svg').createSVGRect;
}
```

# 检查浏览器是否支持canvas

```javascript
function isSupportCanvas(){
    if(document.createElemetn('canvas').getContext){
        return true;
    } else {
        return false;
    }
    //测试，打开浏览器查看结果
    console.log(isSupportCanvas());
}
```

# 检查是否是微信浏览器

```javascript
function isWeiXinClient() {
    var ua = navigator.userAgent.tolowerCAse();
    if (ua.match(/MicroMessenger/i) == "micromessenger") {
        return true;
    } else {
        return false;
    }
}
//测试
console.log(isWeiXinClient());
```

# 常用的一些正则表达式

```javascript
//匹配字母、数字、中文字符
/^([A-Za-z0-9]|[\u4e00-\u9fa5])*$/;
//验证邮箱
/^\w+@([0-9a-zA-Z]+[.])+[a-z]{2,4}$/;
//验证手机号
/^1[3|5|8|7]\d{9}$/;
//验证URL
/^http:\/\/.+\./;
//验证身份证号码
/(^\d{15}$)|(^\d{17}([0-9]|x|X)$)/;
//匹配中文字符的正则表达式
/[\u4e00-\u9fa5]/;
//匹配双字节字符（包括汉字在内）
/[^\x00-\xff/;

```

# js时间戳、毫秒格式化

```javascript
function formatDate(now) {
    var y = now.getFullYear();
    var m = now. getMonth() + 1;
    var d = now.getDate();
    var h = now.getHours();
    var m = now.getMinutes();
    var s = now.getSeconds();
    return y + '-' + m + '-' + d + ' ' + h + ':' + m + ':' + s;
}
var nowDate = new Date(2018,5,13,19,18,30,20);
console.log(nowDate.getTime());//获得当前毫秒数
console.log(formatDate(nowDate));
```

# getBoundingClientRect()获取元素位置

```javascript
//它返回一个对象，其中包含了left、right、top、bottom四个属性
var myDiv = document.getElementById('myDiv');
var x = myDiv.getBoundingClientRect().left;
var x = myDiv.getBoundingClientRect().top;
/*
	相当于jquery的: $(this).offset().left、$(this).offset().top
	相当于js的： this.offsetLeft、this.offsetTop
*/
```

# HTML5全屏

```javascript
function fullscreen(element){
    if (element.requestFullScreen) {
        element.requestFullscreen();
    } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen();
    }
}
fullscreen(document.documentElement);
```

