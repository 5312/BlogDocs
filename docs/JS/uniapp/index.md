---
  sidebar: false
---

# 安卓软件更新

unipp安卓软件更新方案

## 获取系统软件版本

```js
let _this = this;
plus.runtime.getProperty(plus.runtime.appid, function(widgetInfo) {
	_this.versioninfo = widgetInfo.version // 版本名称1.0.0			_this.$tool.uniAjax({
		url: 'version/',
		method: 'GET',
		params: {
			version:widgetInfo.versionCode//版本号100
		},
		success: function(result) {
			console.log('ver', result)
			if (result.data.code == 0) {
				_this.show = true;
				_this.content = result.data.msg;
				_this.url = result.data.data[0].url;
			
			} 

		}
	})
})
```

## 发起下载安装

```js
let downUrl = this.url;
let _this = this;
console.log(downUrl)
var dtask = plus.downloader.createDownload(downUrl, {}, function(d, status) {//后台下载
	// 下载完成
	_this.show = false;
	if (status == 200) {
		plus.runtime.install(plus.io.convertLocalFileSystemURL(d.filename), {}, {}, function(error) {//发起安装
			uni.showToast({
				title: '安装失败',
				duration: 1500
			});
		})
	} else {
		uni.showToast({
			title: '更新失败',
			duration: 1500
		});
	}
});
dtask.start();
```