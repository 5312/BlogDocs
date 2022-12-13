---
sidebar: false
---

# 大屏自适应

- 最近在项目中遇到需要 pc 端自适应。这里采用 rem 方式

> 我为了方便起见将 html 的尺寸设置为 100px，这里将 body 设置为正常高度 贴上如下代码就可以使用 rem 代替 px 了

```js
(function (win) {
  var tid;
  function refreshRem() {
    let designSize = 1920; // 设计图尺寸
    let html = document.documentElement;
    let wW = html.clientWidth; // 窗口宽度
    let rem = (wW * 100) / designSize;
    document.documentElement.style.fontSize = rem + "px";
  }

  win.addEventListener(
    "resize",
    function () {
      clearTimeout(tid);
      tid = setTimeout(refreshRem, 300);
    },
    false
  );
  win.addEventListener(
    "pageshow",
    function (e) {
      if (e.persisted) {
        clearTimeout(tid);
        tid = setTimeout(refreshRem, 300);
      }
    },
    false
  );

  refreshRem();
})(window);
```
