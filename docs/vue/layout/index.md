
# 布局

 页面整体布局是一个产品最外层的框架结构，往往会包含导航、侧边栏、面包屑以及内容等。想要了解一个后台项目，先要了解它的基础布局。

## Layout

![layout](/images/layout.png)
> 在element-admin 项目中 ,布局一般由layout 组件构成

```vue
<!-- 页面布局 -->
<template>
  <div :class="layoutClass">
    <ele-header/><!-- 顶栏 -->
    <el-container class="ele-admin-main">
      <ele-sidebar v-if="showSidebar"/><!-- 侧边栏 -->
      <div class="ele-admin-body">
        <ele-tabs v-if="theme.showTabs"/><!-- 多页签 -->
        <keep-alive :include="$setting.keepAliveList">
          <router-view v-if="!theme.reload"/><!-- 路由出口 -->
        </keep-alive>
      </div>
    </el-container>
    <div class="ele-admin-shade" @click="collapse"></div><!-- 小屏幕下遮罩层 -->
    <ele-setting v-if="$setting.showSetting"/><!-- 主题设置抽屉 -->
    <ele-password/><!-- 修改密码弹窗 -->
  </div>
</template>

<script>
import {mapGetters,mapMutations} from "vuex";
import EleHeader from "./Header";
import EleSidebar from "./Sidebar";
import EleTabs from "./Tabs";
import EleSetting from "../fragment/Setting";
import ElePassword from "../fragment/Password";

```

## 多布局切换

如果你想在一个项目里面使用多个不同的 layout，只要在你想作用的```路由父级```上引用它就可以了。

如下, 在一级路由里添加不同的layout

```js
{
    path: '/environment',

     // 你可以选择不同的layout组件
    component: EnrviLayout,
    meta: { hide: true, title: '一张图' },
    children: [{
        path: '/index',
        component: () =>
            import ('@/views/environment/oneOfpicture/index'),
        meta: { hide: true, title: '一张图' }
    }]
},

// Has layout
{
  path: '/documentation',

  // 你可以选择不同的layout组件
  component: Layout,

  // 这里开始对应的路由都会显示在app-main中 如上图所示
  children: [{
    path: 'index',
    component: () => import('documentation/index'),
    name: 'documentation'
  }]
}
```
### 嵌套路由

这里使用了 vue-router [路由嵌套](https://router.vuejs.org/zh/guide/essentials/nested-routes.html), 所以一般情况下，你增加或者修改页面只会影响 app-main这个主体区域。其它配置在 layout 中的内容如：侧边栏或者导航栏都是不会随着你主体页面变化而变化的

```
/foo                                  /bar
+------------------+                  +-----------------+
| layout           |                  | layout          |
| +--------------+ |                  | +-------------+ |
| | foo.vue      | |  +------------>  | | bar.vue     | |
| |              | |                  | |             | |
| +--------------+ |                  | +-------------+ |
+------------------+                  +-----------------+
```


### 命名视图

有时候想同时 (同级) 展示多个视图，而不是嵌套展示，例如创建一个布局，
有 ```sidebar``` (侧导航) 和 ```main``` (主内容) 两个视图，这个时候命名视图就派上用场了。
你可以在界面中拥有多个单独命名的视图，而不是只有一个单独的出口。如果 router-view 没有设置名字，那么默认为 default

```js
<router-view class="view left-sidebar" name="LeftSidebar"></router-view>
<router-view class="view main-content"></router-view>
<router-view class="view right-sidebar" name="RightSidebar"></router-view>
```


一个视图使用一个组件渲染，因此对于同个路由，多个视图就需要多个组件。
确保正确使用 ```components``` 配置 (带上 ***s*** )：

```js
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      components: {
        default: Home,
        // LeftSidebar: LeftSidebar 的缩写
        LeftSidebar,
        // 它们与 `<router-view>` 上的 `name` 属性匹配
        RightSidebar,
      },
    },
  ],
})
```
