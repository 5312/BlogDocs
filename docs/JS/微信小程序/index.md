---
  sidebar: false
---

# 自定义组件的不同样式

 在微信小程序中使用自定义组件时，在不同的页面显示不同的css样式

###  一，在组件js文件中

![组件](/images/Blog20200409002410.png)

增加externalClasses:['className'] 字段 ，填入class名

### 二，在组件页面中加入class名
![class](/images/Blog20200409002646.png)

在需要更改的标签中加入要定义class名

### 三，在使用的页面加入属性class名

![](/images/Blog20200409002931.png)

### 四，更改本页的class样式

![](/images/Blog20200409003038.png)