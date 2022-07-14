# State 

对象类型，类似于实例的 data属性，存放数据

存储在state中的数据和Vue实例中的data遵循相同的规则，必须是纯粹的对象.

### 直接访问
```this.$store.state.xxx```

### 使用mapState映射

```js

import { mapState } from 'vuex'

export default {
    name: 'Vuex',
    data() {
        return {
            date: 1998
        }
    },
    computed: {
        ...mapState({
            // mapState默认会把state当第一个参数传进来
            getCount: state => state.count,
            getSchool(state) {
                return (val) => {
                    return state.school + val + this.date
                }
            }
        })
    },
    mounted(){
      console.log(this.getCount) // state.count
      console.log(this.getSchool) // state.school + val + this.date
    }
}

```

当映射的计算属性的名称与 state 的子节点名称相同时，我们也可以给 mapState 传一个字符串数组。

```js
computed: mapState([
  // 映射 this.count 为 store.state.count
  'count'
])

```
### 对象展开运算符

```mapState``` 函数返回的是一个对象 , 在es6中可以使用 对象展开运算符 简化写法

```js
computed: {
  // 使用对象展开运算符将此对象混入到外部对象中
  ...mapState({
    // ...
  })
}
```

### 使用

使用 Vuex 并不意味着你需要将所有的状态放入 Vuex, 在项目中请酌情使用

