

# ES6	

```js
 // 解构赋值，还是赋值的表达式，只不过对‘=’的左右两侧格式上有些许要求，通过解析‘=’右边的数据来为左侧声明
    // 的变量赋值，js支持的数据类型基本都可以解构赋值，但通常值使用数组和对象的解构赋值

    // 1. 数组的解构赋值
    // 形势上：var/let/const [name1,name2,name3...] = [value1,value2value3...]
    // 例如：声明 三个变量a，b，c，分别赋值为10，20，30：
    {
        // let a =10;
        // let b =20;
        // let c =30;

        let [a,b,c] = [10,20,30];
        console.log(a,b,c);
    }
    // 2. 对象的解构赋值
    // 形式上;let {a,b} = {a:10,b:20};
    // 对象的解构赋值，无序，根据对应的key与变量名去为变量赋值，当变量名不存在与对象的key中，那末解构失败，不会为声明的变量赋值
    {
        // let {a,b} = {a:10,b:20};

        // 另外一种写法 可以使变量名与obj中的key不相同
        // let {key1:a,key2:b} = {key1:10,key2:20};

        //用途
        // 从json数据中取值
        let data= {
            classID:'xah',
            students:[{
                id:001,
                name:'lala'
            },{
                id:002,
                name:'haha'
            }]
        }
        let {id,name} = data.students[0];

        // 2. 交换变量的值
        let [a,b] = [10,20];
        console.log(a,b);
        console.log(a,b);

        let arr = [10,7,20,3,1,6];
        for (let i = 0; i < arr.length -1; i++) {
            for (let j  = 0; j < arr.length; j++) {
                if(arr[j] < arr[j+1]){
                    [arr[j],arr[j+1]] = [arr[j+1],arr[j]];
                }
            }
        }
        console.log(arr)
    }

    // 字符串的拓展
    // 1. 遍历器 for..of....循环
    {
        let str = '==this is ECMAScripts';
        for (let x of str) {
            // 循环变量x表示被遍历值value 不是index
        }
    }
    // 2.模板字符串(``);
// 这是es6 新增加的
// 1.支持字符串中换行缩进，保留字符串原有格式

// // 2. 支持字符串内解析变量(需要将变量使用${} 进行包裹)
// let [r,g,b] =[rn(),rn(),rn()];
//   let color = `rgb(${r},${g},${b})`;
//   // 4. 支持表达式的运算
//   let sumstr = `3 * 4 = ${3*4}`;
//   console.log(sumstr);
{
    for(let i=1;i<=9;i++){

        for(let j = 1;j<=i ;j++){
            let con =  `${j} * ${i} = ${i*j}`;
            document.write(con+'&emsp;')
        }
        document.write('<br>')
    }
}
// es6 对String.prototype的拓展
// includes(),startsWidth(),endsWidth()
//查询指定字符串是否包含指定字符。如果包含返回true，否则返回false
console.log(str.includes('bcd'));
//查询指定字符串是否以指定字符结尾
console.log(str.endsWidth('S'))
// 新增方法
// repeat() // 返回给一个重复后的新字符串
// 新增方法
// padStart(),padEnd();补足字符串长度的方法
{
    let a = 'abc';
    a.padStart(6,'x');
}
{
    //使用对象的解构赋值从Math中提取方法
    let {max,min,round,random,abs,pow,sqrt} = Math;
    console.log(abs());
}
```

```js
    // Number.isNaN()用来判断指定数值是否为NaN
    // let n5 = false;
    // console.log(n5 == NaN);
    // console.log(Number.isNaN(n5));
    // 将parseInt()以及oarsefloat()方法添加到Number构造函数上
    //这样做的目的是减少全局的方法，做到模块化
    // hypot();
    // 函数拓展
    // 1. 允许为函数参数设置默认值
    {
        // 为函数参数设置默认值
        // function sum(x=0,y=0){
        //     console.log(x+y)
        // }
        // sum();
        // 默认参数一定要放在参数列表的最后，否则函数调用结果异常
    }
    // 2， rest参数，在函数体内部，得到参数列表，功能和arguments相似
    {
        // function sum(){
        //     var s = 0;
        //     // ES5使用arguments获取参数列表
        //     for (var i = 0; i < arguments.length; i++) {
        //         s+=arguments[i];
        //
        //     }
        //     console.log(s)
        // }
        // sum(1,2,2,3)
        function sum(...rest){
            var s = 0;
            for (var i = 0; i < rest.length; i++) {
                s += rest[i];
            }
            console.log(s);
        }
        sum(1,2,3,4,5,6)
        //声明：rest参数功能上和grguments参数一样都是函数内获取参数列表，但是底层实现上，rest参数的工作效率要远远高于grguments参数，所以，今后尽量使用rest参数。
    }
    // 3. 箭头函数
    {
        // 箭头函数对函数的申明方式进行的改变
        document.querySelector('div').onclick = function(){
            // let _this = this;
            // setTimeout(function(){
            //     _this.innerHTML = '成功'
            // },200)

            // 新语法，箭头函数
            // 箭头函数不会改变函数体内this的指向，this永远指向箭头函数声明时所在作用域的this
            // 注意：一定不要将箭头函数写成元素的事件处理函数。
            // 3.不要写成构造函数，无法通过new 得到对象
            // 3.箭头函数无法使用arguments对象，需要使用rest
            setTimeout(()=>{
                this.innerHTML = '成功'
            })

            // 在不涉及this指向的问题上，箭头函数能一定程度上简化函数声明的代码
            // function ptint(x){
            //     console.log(x);
            // }
            // let print = x=> x;
            // print(123);
            // 0 ，箭头函数声明不需要function关键字
            // 箭头函数可以省略的部分：
            // 1. 参数列表：当参数只有一个的时候，（）是可以省略的，没有参数或者参数大于1 那么（）就必须存在。
            // 2。 函数体内容只有一个表达式或一行代码时{}可以省略
            // 3. 返回值，返回值包含形式参数，那末return可以省略。
            let  add = ()=>{
                let count =0;
                return () => {return ++count}
            }

        }
        //函数也存在length属性..函数的参数列表长度(不包含默认值的参数)
        {
            function fn(a,b){}
                console.log(fn.length)//2
            // function rn(){};
            // window[fn.name]();/
        }
        // 拓展运算符
        // 展开啊数组
        let str = 'abcdef';
        console.log([...str]);

        function fn(a,b,c,d,e,f){
            console.log(a,b,c,d,e,f)
        }
        // fu(...arrs)/
    }
    {
        // 应用场景
        // /1. 拷贝数组(深拷贝);
        let a = [1,2,3];
        let b =[...a];
        a.push(4);
        console.log(a,b);

        // 合并数组
        [...a,...b];

        // Array.prototype.find()
        {
            let a = [10,2,2,3,45];
            a.find(x => x%11 ==0);
        }
        // indexOf方法有两个缺点,一是不够语义化,

        // let a = [0,[1,[2,3,[4,5]]]]
        // let b = a.flat(4);
        // console.log(b);

        {
            let uname = '小王';
            let age = 20;
            let obj = {
                uname,
                age,
                say(){
                    console.log(`${this.name}`)
                }

            }
        }
        // 属性名表达式
        {
            let key = 'uname';
            let obj = {
                [key]:'小王'
            }
        }
        // 3. 对象属性的描述枚举
        {
            let obj = {name:'小王'}
            Object.getOwnPropertyDescriptor(obj,'name');
        }
        // 4. super 箭头函数声明不需要function关键字
        {
            // 只能在对象的方法中使用.在对象方法外报错.指向调用方法的对象的原型
            Object.prototype.type ='obj';
            let obj = {
                fn(){
                    console.log(this);
                    console.log(super.type);//原型上的属性
                }
            }
            obj.fn()
        }
        //拓展运算符
        {
            let o = {x:20,y:100};

        }
        // Object.assign
        // Class语法:es6 中声明类的方式,本质上还是构造函数
        class Student{
            // 构造方法
            constructor(name,age){

            }
        }
        let s1 = new Student();
        // console.log(s1.constructor)
        // 与构造函数的区别,语法上更加严谨,class声明的类功能就是创建对象,必须配合new使用,单数构造函数写法,不使用new依然会执行,不会报错
        // 继承:extends实现继承 原型
        class middleStudent extends Student{
            constructor(name,age,sex){
                // 需要先调用父类的构造方法
                super(name,age,sex);//构造
                this.time = '青春期';

            }

            favorite(){
                console.log(`我是一个初中生`)
            }

        }
        let ms = new middleStudent('小张');


    }

```