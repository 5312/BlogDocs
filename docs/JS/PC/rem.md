---
  sidebar: false
---
# 大屏自适应

* 最近在项目中遇到需要pc端自适应。这里采用rem方式
  
> 我为了方便起见将html的尺寸设置为100px，这里将body设置为正常高度 贴上如下代码就可以使用rem代替px了

```js
(function(win) {
      var tid;
      function refreshRem() {
       	let designSize = 1920; // 设计图尺寸
       	let html = document.documentElement;
       	let wW = html.clientWidth;// 窗口宽度
      	let rem = wW * 100 / designSize; 
      	document.documentElement.style.fontSize = rem + 'px';
      }
      
     win.addEventListener('resize', function() {
      clearTimeout(tid);
      tid = setTimeout(refreshRem, 300);
     }, false);
     win.addEventListener('pageshow', function(e) {
      if (e.persisted) {
       clearTimeout(tid);
       tid = setTimeout(refreshRem, 300);
      }
     }, false);

     refreshRem();
})(window);
```

* 清浮动的方法

```css
.clear:after{
  display:block;
  clear:both;
  content:'';
}
```