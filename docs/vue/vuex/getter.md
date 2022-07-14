# Getter

getter的返回值会根据它的依赖被缓存起来，且只有当它的依赖值发生了改变才会被重新计算，并且默认接受state作为其第一个参数，也可以接受其他getter作为第二个参数（如下例）

可以看作 vuex 的计算属性

```js
const store = createStore({
  state: {
    todos: [
      { id: 1, text: '...', done: true },
      { id: 2, text: '...', done: false }
    ]
  },
  getters: {
    doneTodos: (state) => {
      return state.todos.filter(todo => todo.done)
    }
  }
})
```

### 通过属性访问

Getter 会暴露为 store.getters 对象，你可以以属性的形式访问这些值：

```
this.$store.getters.doneTodos // -> [{ id: 1, text: '...', done: true }]

```

Getter 也可以接受其他 getter 作为第二个参数：

```js
getters: {
  doneTodos: (state) => {
      return state.todos.filter(todo => todo.done)
    }
  // ...
  doneTodosCount (state, getters) {
    return getters.doneTodos.length
  }
}
```
```
store.getters.doneTodosCount // -> 1
```

### 通过方法访问

如果需要给getter 传递参数, 可以返回一个 函数 如下

```js
getters: {
  // ...
  getTodoById: (state) => (id) => {
    return state.todos.find(todo => todo.id === id)
  }
}
```
注意，getter 在通过方法访问时，每次都会去进行调用，而不会缓存结果。

```
store.getters.getTodoById(2) // -> { id: 2, text: '...', done: false }

```

### ```mapGetters```辅助函数
----

```mapGetters``` 辅助函数仅仅是将 store中的 getter映射到局部计算属性:

```js
import { mapGetters } from 'vuex'

export default {
  // ...
  computed: {
  // 使用对象展开运算符将 getter 混入 computed 对象中
    ...mapGetters([
      'doneTodosCount',
      'anotherGetter',
    ])
  }
}
```
还可以用对象形式 , 给getter属性 改名

```js
...mapGetters({
  // 把 `this.doneCount` 映射为 `this.$store.getters.doneTodosCount`
  doneCount: 'doneTodosCount'
})
```