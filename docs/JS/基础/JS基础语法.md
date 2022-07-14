<!-- [[toc]] -->


[五子棋](http://118.178.180.247:90/%E4%BA%94%E5%AD%90%E6%A3%8B.html)

[贪吃蛇](http://118.178.180.247:90/snake.html)

[像素鸟](http://118.178.180.247:90/像素鸟/像素鸟_02.html)

[植物大战僵尸](http://118.178.180.247:90/植物大战僵尸/植物大战僵尸.html)

[考拉海购](http://118.178.180.247:90/考拉海购/index.html)

[LOL完全体](http://118.178.180.247:90/LOL完全体/pages/index/index.html)

[象棋](http://118.178.180.247:90/象棋/index.html)

[打飞机](http://118.178.180.247:89)


[纯CSS--网易游戏](http://118.178.180.247:88)



# JS基础语法


![js基础语法](/images/js基础语法.png)


### JS基础
```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<title>js</title>
	<!-- 1.一般写一些功能性js代码，不直接对文档中的标签进行操作的js代码 -->
	<script></script>

</head>
<body>
	<!-- 2，一般情况都会将script标签写在其他标签之后，确保标签先加载后操作 -->
	<script></script>
	<!-- 
		javascript是浏览器内置的脚本语言，后面简称js，执行依赖浏览器引擎。现在主流浏览器都到了v8引擎。

		JavaScript与java完全没有关系。
		
		HTML + CSS + JS
		JS: ES +DOM + BOM

		ECMAScript:是js语言的规范，当前学习版本ES5，后面会学习es6

		DOM: document object model 文档对象模型

		BOM：Browser Object Model 浏览器对象模型
	 -->


<!--引入方式：
	 1.行间 ,必须依赖标签的行间属性，大多是事件属性
	 2.内部引入：
		script标签内编写js代码：
	 	（1）head标签内
	 	（2）body标签内
	 	（3）body标签后。html标签内

	3.外部引入：
		通过创建.js文件编写js 代码，使用script标签的src属性将外部js文件引入当前文档
	  -->
</body>
<!-- 3. -->
<script>
	//单行注释，快捷键 ctrl+/ 
	/*
	 多行注释
	 */
	//一般学习一门新语言，都是从hello ，world开始
	//
	//js 中的输出语句
	//1.文档输出，会将指定的内容直接输出到HTML文档上。
	//window,document 都是浏览器引擎提供的内置对象（包含了浏览器窗口和文档相关信息以及操作方法）
	//document 对象调用自己的write（）方法
	//
	//
	document.write("hello,world!");
	document.write("<h1>'hellow,world'</h1>");
	//注意
	//
	//
	//2.控制台输出，用于代码调试
	console.log('hello world');

	//3.提示窗输出，可以用于代码调试，更多用于对用户的信息提醒。
	alert('hello world');
	//js 中提示窗优先级非常高，当提示窗出现在窗口时，会先将脚本暂时挂起，停止运行。
	//
	//
	//
	//
	//JS只做两件事
	//处理交互逻辑
	//2.渲染数据
	//
	//1.什么是变量？
	//变量就是数据的容器，用于存储数据的。
	//js中创建（声明）变量使用关键字var
	//
	var number = 20 ;
	var message = 'hello world';
	//控制台输出变量的值
	//
	console.log(number,message);

	/*
		变量的命名规则：
		1，变量名只能包含数字，字母，_ 还有 $.
		2.不能以数字开头。
		3.不能以系统关键字或保留字命名。例如class 、name 。new、var 等。
		4，js 的变量名明确区分大小写。

		命名规范：
		1.驼峰命名
		2.见名知意
	 */
	
	//数据类型：
	//1，string ：字符串类型，将文本（中文和英文）包裹在引号内。单引号或双引号都可以，但是要成对出现。
	//
	var a = '他说:"今天天气不错！"'
	console.log(a);
	//字符串嵌套的时候。单引号可以嵌套双引号，双引号也可以包裹单引号，但是同类型引号不能嵌套。
	

	//2.number:数字类型 ，用来表示数字。不区分整数还是小数，统统都属于number。
	//
	var g = 9.8;
	var pi = 3.14;
	// 十进制于二进制之间的相互转化
	// 1.十进制  --> 二进制 ：不断除二找余数，将余数倒序连接
	//77  -> 01001101
	//2.二进制 --> 十进制 ：从低位成2 的0 递增累加
	//
	//01001101  -> 1*1 + 0*2 + 1*4 +1*8 +0 + 0+ 1*64  ---> 1+4+8+64 -> 77
	

	// 3.boolean:布尔类型，通常用于条件的判断，它的值只有两个 true 和false
	// 
	var b = true;

	//4.undefined:未定义类型，只有一个值就是
	//
	//undefined，当变量只做了声明，并没有赋值的时候，js引擎会自动为此变量赋值为undefined
	//
	var c;
	console.log(c);


	//上面四种数据类型称为基础数据类型
	//5.object:对象类型（引用数据类型）
	
	var d = {
		name:'汉宁辉',
		sex:'男'
	}
	//object类型下还包含一下子类型：
	//1.array数组
	//2，null空
	
	//如何查看一个变量的数据类型？
	//typeof:得到全小写的类型字符串
	console.log(typeof d);
</script>

	

</html>
```

### 运算符
```js
//js 不强制要求每行语句后面必须要加';',
	//但是最好加上
	//
	//js 中的运算符
	//1.赋值运算符： = ，将符号右边的值赋予符号左边的变量。
	//
	var a = 10;//值是10，数据类型是number

	console.log(a);
	console.log(typeof a);
	a = 'you';//值是'you' ,数据类型string
	console.log(a);
	console.log(typeof a);

	//js是弱类型语言，声明变量时不需要为变量声明数据类型，
	//变量的数据类型，会在为变量赋值的那一刻浏览器引擎自动推断。
	

	//注意;绝对不允许对一个确定的值进行赋值操作！！！！
	// 2 = 3 ；//错误的
	var b = a;
	console.log(b);

	//2.算数运算符
	// + 加 -减 *乘 /除 %取余
	
	var x='10',y=20,c;
	//+ :如果符号两边都是number，就是一个正常的加法运算，但是如果符号任意一边出现string，那么+的作用就变成了字符串的拼接。
	//并且，任何类型的值和string做加法运算，结果一定是string
	c = x + y;
	console.log(c);//'1020'
	console.log(typeof c);

	//-:只有单纯的减法算数功能
	//NaN:类型是number ，Not a Number,NaN不管和什么值进行算数运算，结果一定还是NaN;将一个非数字字符串或其他值转化成number类型时，就会得到NaN
	c = x - y;
	console.log(c);//-10

	//* :只有单纯的乘法算数功能，会先检测符号左右的数据类型，如果非number，会自动转化成number后再进行运算。
	//
	//  /:同上，但是需要，除数不能为零，否则会出现NaN
	//  
	//  %：取余运算 
	c = x % y;
	console.log(c);//余数是10；


	// 复合运算符 ： +=  -=  *=   /=  %=
	x += y; //等价于 x = x + y;
	console.log(x);//'1020'

	//自增自减运算符：   ++   --
	// var m =20;
	m ++ ;
	console.log(m);
	//自增自减运算符，可以出现在变量前，也可以出现在变量后
	//
	//符号在后，先赋值后运算；符号在前，先运算后赋值；
	var m = 20,n;
	// m ++ ;
	n = m ++ ;
	n ++;
	n = ++ m ;
	console.log(n);
```



## 字符串

### 字符串的操作方法

```js
var str1 = 'hello,word',
		str2 = ' 你好 世界';
	//字符串操作方法
	//1. length属性:用来获取字符串长度(字符串中字符的数量)
	// 在js 中 中文字符和英文字符占的长度是一样的.
	//字符串和数组比较类似,所以也可以使用循环来遍历字符串,挨个获得字符串的每个字符.
// 	for (var i = 0; i<str.length; i++) {
			
// }
// 
// //2. 字符串拼接:concat()
 var newStr = str1.concat(str2);
 console.log(newStr);

 //3 . indexOf():判断字符是否在字符串中,如果在返回下标,如果不在返回 -1.
 //
 //
 //4 . lastIndexOf(): 是从字符串末尾向前查找,是否存在.
 
 // 5 . charAt():根据给出的下标返回指定字符串对应位置的字符.
  console.log(str1.charAt(2));

  // 6 . replace(): 将字符串中的指定字符替换成其他字符,
  // 只能替换第一次存的字符
 var newStr =  str.replace('o','O');
 console.log(newStr);
 //字符串是基础数据类型,值是定值,所以没有删除字符串的方法,如果需要删除字符,只能通过替换为空字符串的方式来实现
 //
 //7.substring(index,index):截取字符串.不包含结束位置上的字符
 //8.substr(index,length): 截取字符串
 ////共同点:第二个参数都是可选参数,如果不写,那么默认截取到字符串结束.
 
 //9 .split():字符串转数组
 var arr = str1.split('-');

 //10 . toUpperCase():将指定字符串中所有的字符转化成大写
 //11 . toLowerCase():将指定字符串中所有的字符转化成小写
 console.log(str1.toUpperCase()); 

```


## 变量

![变量](/images/变量.png)
```js
//变量的作用域:变量在脚本中起作用的区域.
	//js中作用域主要分两部分,1.函数内作用域;2 .函数外作用域:
	//1.函数外作用域又称为全局作用域,在全局作用域下声明的变量称为全局变量,
	//可以在脚本的任何地方访问.
	//2. 函数内作用域又称为局部作用域,在局部作用域下声明的变量称为局部变量,
	//只能在当前作用域或当前作用域下的局部作用域访问.
	//3. 函数内声明的变量,正常情况下会在函数体执行完成自动销毁
	//4. js中的变量及函数声明存在提升现象,会先将脚本中的变量及函数的声明提升到当前所在作用域的最顶端.
	//其中函数的提升要比变量的提升更靠上.
	//5. 当全局变量和局部变量重名时,局部作用域的代码执行会优先使用当前作用域中声明的变量,这种现象称为变量的降低,也叫'就近原则'
	//6.this关键字 :this值存在于函数内,函数外是无意义的.:this在函数内指向函数的拥有者.
	//
	//7. 在全局作用域下声明的全局变量以及全局函数,会自动被作为window对象的属性和方法.也可以说Window就是我们js 中的根对象.
	//
	//8.函数的作用域在声明的时候就已经确定了与调用位置无关
	var a = 10;
	function fn(){
		console.log(a);
		var a= 20;
		console.log(a);
	}
	fn();
	console.log(a);
```
### 变量提升

```js

//错误代码
var fontArr = ['黑', '蓝', '黄', '红', '绿'],
    arrColors = ['blue', 'red', 'yellow', 'green', 'black'];
  
//输出大字
bagColor.innerText = fontArr[random(0,4)];

//输出小字
for (var i = 0; i < colors.length; i++) {
    var t = dele[i];  ///报错点  
    colors[i].innerText = fontArr[t];
}

// 随机数
function random(min,max) {
    return Math.round(Math.random() * (max-min) + min);
}
//不重复数字
function rnArr() {
    var arr = [];
    // 去重
    // 数组长度小于5时
    while (arr.length < 5) {
        // 生成0-4的随机数作为数组下标
        var n = random(0, 4);
        // 生成对应下标的数字在之前数组中不存在，push
        if (arr.indexOf(n) == -1) {
            arr.push(n);
        }

    }
     return arr;
}
  var dele =  rnArr();  ///问题点  变量未声明至调用之前
console.log(dele[2]);
```
## Math

**JS提供的数学对象 Math**  
1. Math.max(): 返回参数中的最大数    
2. Math.min(): 返回参数中的最小数    
3. Math.abs(): 返回一个数的绝对值  
4. Math.pow(x,y):计算x 的 y次方  
5. Math.floor():对小数进行向下取整操作.  
6. Math.ceil():对小数进行向上取整操作  
7. Math.round():对小数进行四舍五入取整  

```javascript
//生成指定区间的公式  
    Math.floor(Math.random() * ( max - min + 1)+min);  
    Math.round(Math.random() * ( max - min) + min);
```
-----