# 开始

## Vuex 是什么
Vuex是专为Vue.js开发的状态管理模式。它采用集中式存储，管理所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化（我的理解就是全局变量）。

## 最简单的 Store

:::tip 提示  
  我们将在后续的文档示例代码中使用 ES2015 语法
:::

创建 store。创建过程直截了当——仅需要提供一个初始 state 对象和一些 mutation：

```js
import { createApp } from 'vue'
import { createStore } from 'vuex'

// 创建一个新的 store 实例
const store = createStore({
  state () {
    return {
      count: 0
    }
  },
  mutations: {
    setvalue (state) {
      state.count++
    }
  }
})

const app = createApp({ /* 根组件 */ })

// 将 store 实例作为插件安装
app.use(store)
```

通过 ```store.state``` 获取状态对象 ,通过 ```store.commit``` 触发状态变更;
```js
store.commit('setvalue')

console.log(store.state.count) // -> 1

```

在 Vue 组件中， 可以通过 ``` this.$store``` 访问store实例。现在我们可以从组件的方法提交一个变更：

```js
methods: {
  increment() {
    this.$store.commit('setvalue')
    console.log(this.$store.state.count)
  }
}
```

由于 store 中的状态是响应式的，在组件中调用 store 中的状态简单到仅需要在计算属性中返回即可。触发变化也仅仅是在组件的 methods 中提交 mutation