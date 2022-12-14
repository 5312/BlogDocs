import{_ as e,M as p,p as c,q as o,R as n,t as a,N as t,a1 as l}from"./framework-2c66b6ab.js";const i="/BlogDocs/images/js基础语法.png",u="/BlogDocs/images/变量.png",r={},d={href:"http://118.178.180.247:90/%E4%BA%94%E5%AD%90%E6%A3%8B.html",target:"_blank",rel:"noopener noreferrer"},k={href:"http://118.178.180.247:90/snake.html",target:"_blank",rel:"noopener noreferrer"},m={href:"http://118.178.180.247:90/%E5%83%8F%E7%B4%A0%E9%B8%9F/%E5%83%8F%E7%B4%A0%E9%B8%9F_02.html",target:"_blank",rel:"noopener noreferrer"},v={href:"http://118.178.180.247:90/%E6%A4%8D%E7%89%A9%E5%A4%A7%E6%88%98%E5%83%B5%E5%B0%B8/%E6%A4%8D%E7%89%A9%E5%A4%A7%E6%88%98%E5%83%B5%E5%B0%B8.html",target:"_blank",rel:"noopener noreferrer"},b={href:"http://118.178.180.247:90/%E8%80%83%E6%8B%89%E6%B5%B7%E8%B4%AD/index.html",target:"_blank",rel:"noopener noreferrer"},g={href:"http://118.178.180.247:90/LOL%E5%AE%8C%E5%85%A8%E4%BD%93/pages/index/index.html",target:"_blank",rel:"noopener noreferrer"},h={href:"http://118.178.180.247:90/%E8%B1%A1%E6%A3%8B/index.html",target:"_blank",rel:"noopener noreferrer"},f={href:"http://118.178.180.247:89",target:"_blank",rel:"noopener noreferrer"},w={href:"http://118.178.180.247:88",target:"_blank",rel:"noopener noreferrer"},y=l('<h1 id="js基础语法" tabindex="-1"><a class="header-anchor" href="#js基础语法" aria-hidden="true">#</a> JS基础语法</h1><p><img src="'+i+`" alt="js基础语法"></p><h3 id="js基础" tabindex="-1"><a class="header-anchor" href="#js基础" aria-hidden="true">#</a> JS基础</h3><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>zh-CN<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>viewport<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>width=device-width, initial-scale=1.0<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>X-UA-Compatible<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ie=edge<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>js<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
	<span class="token comment">&lt;!-- 1.一般写一些功能性js代码，不直接对文档中的标签进行操作的js代码 --&gt;</span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
	<span class="token comment">&lt;!-- 2，一般情况都会将script标签写在其他标签之后，确保标签先加载后操作 --&gt;</span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
	<span class="token comment">&lt;!-- 
		javascript是浏览器内置的脚本语言，后面简称js，执行依赖浏览器引擎。现在主流浏览器都到了v8引擎。

		JavaScript与java完全没有关系。
		
		HTML + CSS + JS
		JS: ES +DOM + BOM

		ECMAScript:是js语言的规范，当前学习版本ES5，后面会学习es6

		DOM: document object model 文档对象模型

		BOM：Browser Object Model 浏览器对象模型
	 --&gt;</span>


<span class="token comment">&lt;!--引入方式：
	 1.行间 ,必须依赖标签的行间属性，大多是事件属性
	 2.内部引入：
		script标签内编写js代码：
	 	（1）head标签内
	 	（2）body标签内
	 	（3）body标签后。html标签内

	3.外部引入：
		通过创建.js文件编写js 代码，使用script标签的src属性将外部js文件引入当前文档
	  --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!-- 3. --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
	<span class="token comment">//单行注释，快捷键 ctrl+/ </span>
	<span class="token comment">/*
	 多行注释
	 */</span>
	<span class="token comment">//一般学习一门新语言，都是从hello ，world开始</span>
	<span class="token comment">//</span>
	<span class="token comment">//js 中的输出语句</span>
	<span class="token comment">//1.文档输出，会将指定的内容直接输出到HTML文档上。</span>
	<span class="token comment">//window,document 都是浏览器引擎提供的内置对象（包含了浏览器窗口和文档相关信息以及操作方法）</span>
	<span class="token comment">//document 对象调用自己的write（）方法</span>
	<span class="token comment">//</span>
	<span class="token comment">//</span>
	document<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">&quot;hello,world!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	document<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">&quot;&lt;h1&gt;&#39;hellow,world&#39;&lt;/h1&gt;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token comment">//注意</span>
	<span class="token comment">//</span>
	<span class="token comment">//</span>
	<span class="token comment">//2.控制台输出，用于代码调试</span>
	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;hello world&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token comment">//3.提示窗输出，可以用于代码调试，更多用于对用户的信息提醒。</span>
	<span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&#39;hello world&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token comment">//js 中提示窗优先级非常高，当提示窗出现在窗口时，会先将脚本暂时挂起，停止运行。</span>
	<span class="token comment">//</span>
	<span class="token comment">//</span>
	<span class="token comment">//</span>
	<span class="token comment">//</span>
	<span class="token comment">//JS只做两件事</span>
	<span class="token comment">//处理交互逻辑</span>
	<span class="token comment">//2.渲染数据</span>
	<span class="token comment">//</span>
	<span class="token comment">//1.什么是变量？</span>
	<span class="token comment">//变量就是数据的容器，用于存储数据的。</span>
	<span class="token comment">//js中创建（声明）变量使用关键字var</span>
	<span class="token comment">//</span>
	<span class="token keyword">var</span> number <span class="token operator">=</span> <span class="token number">20</span> <span class="token punctuation">;</span>
	<span class="token keyword">var</span> message <span class="token operator">=</span> <span class="token string">&#39;hello world&#39;</span><span class="token punctuation">;</span>
	<span class="token comment">//控制台输出变量的值</span>
	<span class="token comment">//</span>
	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>number<span class="token punctuation">,</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token comment">/*
		变量的命名规则：
		1，变量名只能包含数字，字母，_ 还有 $.
		2.不能以数字开头。
		3.不能以系统关键字或保留字命名。例如class 、name 。new、var 等。
		4，js 的变量名明确区分大小写。

		命名规范：
		1.驼峰命名
		2.见名知意
	 */</span>
	
	<span class="token comment">//数据类型：</span>
	<span class="token comment">//1，string ：字符串类型，将文本（中文和英文）包裹在引号内。单引号或双引号都可以，但是要成对出现。</span>
	<span class="token comment">//</span>
	<span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token string">&#39;他说:&quot;今天天气不错！&quot;&#39;</span>
	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token comment">//字符串嵌套的时候。单引号可以嵌套双引号，双引号也可以包裹单引号，但是同类型引号不能嵌套。</span>
	

	<span class="token comment">//2.number:数字类型 ，用来表示数字。不区分整数还是小数，统统都属于number。</span>
	<span class="token comment">//</span>
	<span class="token keyword">var</span> g <span class="token operator">=</span> <span class="token number">9.8</span><span class="token punctuation">;</span>
	<span class="token keyword">var</span> pi <span class="token operator">=</span> <span class="token number">3.14</span><span class="token punctuation">;</span>
	<span class="token comment">// 十进制于二进制之间的相互转化</span>
	<span class="token comment">// 1.十进制  --&gt; 二进制 ：不断除二找余数，将余数倒序连接</span>
	<span class="token comment">//77  -&gt; 01001101</span>
	<span class="token comment">//2.二进制 --&gt; 十进制 ：从低位成2 的0 递增累加</span>
	<span class="token comment">//</span>
	<span class="token comment">//01001101  -&gt; 1*1 + 0*2 + 1*4 +1*8 +0 + 0+ 1*64  ---&gt; 1+4+8+64 -&gt; 77</span>
	

	<span class="token comment">// 3.boolean:布尔类型，通常用于条件的判断，它的值只有两个 true 和false</span>
	<span class="token comment">// </span>
	<span class="token keyword">var</span> b <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>

	<span class="token comment">//4.undefined:未定义类型，只有一个值就是</span>
	<span class="token comment">//</span>
	<span class="token comment">//undefined，当变量只做了声明，并没有赋值的时候，js引擎会自动为此变量赋值为undefined</span>
	<span class="token comment">//</span>
	<span class="token keyword">var</span> c<span class="token punctuation">;</span>
	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">;</span>


	<span class="token comment">//上面四种数据类型称为基础数据类型</span>
	<span class="token comment">//5.object:对象类型（引用数据类型）</span>
	
	<span class="token keyword">var</span> d <span class="token operator">=</span> <span class="token punctuation">{</span>
		<span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&#39;汉宁辉&#39;</span><span class="token punctuation">,</span>
		<span class="token literal-property property">sex</span><span class="token operator">:</span><span class="token string">&#39;男&#39;</span>
	<span class="token punctuation">}</span>
	<span class="token comment">//object类型下还包含一下子类型：</span>
	<span class="token comment">//1.array数组</span>
	<span class="token comment">//2，null空</span>
	
	<span class="token comment">//如何查看一个变量的数据类型？</span>
	<span class="token comment">//typeof:得到全小写的类型字符串</span>
	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> d<span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

	

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="运算符" tabindex="-1"><a class="header-anchor" href="#运算符" aria-hidden="true">#</a> 运算符</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//js 不强制要求每行语句后面必须要加&#39;;&#39;,</span>
	<span class="token comment">//但是最好加上</span>
	<span class="token comment">//</span>
	<span class="token comment">//js 中的运算符</span>
	<span class="token comment">//1.赋值运算符： = ，将符号右边的值赋予符号左边的变量。</span>
	<span class="token comment">//</span>
	<span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span><span class="token comment">//值是10，数据类型是number</span>

	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> a<span class="token punctuation">)</span><span class="token punctuation">;</span>
	a <span class="token operator">=</span> <span class="token string">&#39;you&#39;</span><span class="token punctuation">;</span><span class="token comment">//值是&#39;you&#39; ,数据类型string</span>
	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> a<span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token comment">//js是弱类型语言，声明变量时不需要为变量声明数据类型，</span>
	<span class="token comment">//变量的数据类型，会在为变量赋值的那一刻浏览器引擎自动推断。</span>
	

	<span class="token comment">//注意;绝对不允许对一个确定的值进行赋值操作！！！！</span>
	<span class="token comment">// 2 = 3 ；//错误的</span>
	<span class="token keyword">var</span> b <span class="token operator">=</span> a<span class="token punctuation">;</span>
	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token comment">//2.算数运算符</span>
	<span class="token comment">// + 加 -减 *乘 /除 %取余</span>
	
	<span class="token keyword">var</span> x<span class="token operator">=</span><span class="token string">&#39;10&#39;</span><span class="token punctuation">,</span>y<span class="token operator">=</span><span class="token number">20</span><span class="token punctuation">,</span>c<span class="token punctuation">;</span>
	<span class="token comment">//+ :如果符号两边都是number，就是一个正常的加法运算，但是如果符号任意一边出现string，那么+的作用就变成了字符串的拼接。</span>
	<span class="token comment">//并且，任何类型的值和string做加法运算，结果一定是string</span>
	c <span class="token operator">=</span> x <span class="token operator">+</span> y<span class="token punctuation">;</span>
	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//&#39;1020&#39;</span>
	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> c<span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token comment">//-:只有单纯的减法算数功能</span>
	<span class="token comment">//NaN:类型是number ，Not a Number,NaN不管和什么值进行算数运算，结果一定还是NaN;将一个非数字字符串或其他值转化成number类型时，就会得到NaN</span>
	c <span class="token operator">=</span> x <span class="token operator">-</span> y<span class="token punctuation">;</span>
	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//-10</span>

	<span class="token comment">//* :只有单纯的乘法算数功能，会先检测符号左右的数据类型，如果非number，会自动转化成number后再进行运算。</span>
	<span class="token comment">//</span>
	<span class="token comment">//  /:同上，但是需要，除数不能为零，否则会出现NaN</span>
	<span class="token comment">//  </span>
	<span class="token comment">//  %：取余运算 </span>
	c <span class="token operator">=</span> x <span class="token operator">%</span> y<span class="token punctuation">;</span>
	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//余数是10；</span>


	<span class="token comment">// 复合运算符 ： +=  -=  *=   /=  %=</span>
	x <span class="token operator">+=</span> y<span class="token punctuation">;</span> <span class="token comment">//等价于 x = x + y;</span>
	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//&#39;1020&#39;</span>

	<span class="token comment">//自增自减运算符：   ++   --</span>
	<span class="token comment">// var m =20;</span>
	m <span class="token operator">++</span> <span class="token punctuation">;</span>
	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>m<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token comment">//自增自减运算符，可以出现在变量前，也可以出现在变量后</span>
	<span class="token comment">//</span>
	<span class="token comment">//符号在后，先赋值后运算；符号在前，先运算后赋值；</span>
	<span class="token keyword">var</span> m <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">,</span>n<span class="token punctuation">;</span>
	<span class="token comment">// m ++ ;</span>
	n <span class="token operator">=</span> m <span class="token operator">++</span> <span class="token punctuation">;</span>
	n <span class="token operator">++</span><span class="token punctuation">;</span>
	n <span class="token operator">=</span> <span class="token operator">++</span> m <span class="token punctuation">;</span>
	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="字符串" tabindex="-1"><a class="header-anchor" href="#字符串" aria-hidden="true">#</a> 字符串</h2><h3 id="字符串的操作方法" tabindex="-1"><a class="header-anchor" href="#字符串的操作方法" aria-hidden="true">#</a> 字符串的操作方法</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> str1 <span class="token operator">=</span> <span class="token string">&#39;hello,word&#39;</span><span class="token punctuation">,</span>
		str2 <span class="token operator">=</span> <span class="token string">&#39; 你好 世界&#39;</span><span class="token punctuation">;</span>
	<span class="token comment">//字符串操作方法</span>
	<span class="token comment">//1. length属性:用来获取字符串长度(字符串中字符的数量)</span>
	<span class="token comment">// 在js 中 中文字符和英文字符占的长度是一样的.</span>
	<span class="token comment">//字符串和数组比较类似,所以也可以使用循环来遍历字符串,挨个获得字符串的每个字符.</span>
<span class="token comment">// 	for (var i = 0; i&lt;str.length; i++) {</span>
			
<span class="token comment">// }</span>
<span class="token comment">// </span>
<span class="token comment">// //2. 字符串拼接:concat()</span>
 <span class="token keyword">var</span> newStr <span class="token operator">=</span> str1<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>str2<span class="token punctuation">)</span><span class="token punctuation">;</span>
 console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>newStr<span class="token punctuation">)</span><span class="token punctuation">;</span>

 <span class="token comment">//3 . indexOf():判断字符是否在字符串中,如果在返回下标,如果不在返回 -1.</span>
 <span class="token comment">//</span>
 <span class="token comment">//</span>
 <span class="token comment">//4 . lastIndexOf(): 是从字符串末尾向前查找,是否存在.</span>
 
 <span class="token comment">// 5 . charAt():根据给出的下标返回指定字符串对应位置的字符.</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str1<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// 6 . replace(): 将字符串中的指定字符替换成其他字符,</span>
  <span class="token comment">// 只能替换第一次存的字符</span>
 <span class="token keyword">var</span> newStr <span class="token operator">=</span>  str<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token string">&#39;o&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;O&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>newStr<span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token comment">//字符串是基础数据类型,值是定值,所以没有删除字符串的方法,如果需要删除字符,只能通过替换为空字符串的方式来实现</span>
 <span class="token comment">//</span>
 <span class="token comment">//7.substring(index,index):截取字符串.不包含结束位置上的字符</span>
 <span class="token comment">//8.substr(index,length): 截取字符串</span>
 <span class="token comment">////共同点:第二个参数都是可选参数,如果不写,那么默认截取到字符串结束.</span>
 
 <span class="token comment">//9 .split():字符串转数组</span>
 <span class="token keyword">var</span> arr <span class="token operator">=</span> str1<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;-&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

 <span class="token comment">//10 . toUpperCase():将指定字符串中所有的字符转化成大写</span>
 <span class="token comment">//11 . toLowerCase():将指定字符串中所有的字符转化成小写</span>
 console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str1<span class="token punctuation">.</span><span class="token function">toUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="变量" tabindex="-1"><a class="header-anchor" href="#变量" aria-hidden="true">#</a> 变量</h2><p><img src="`+u+`" alt="变量"></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//变量的作用域:变量在脚本中起作用的区域.</span>
	<span class="token comment">//js中作用域主要分两部分,1.函数内作用域;2 .函数外作用域:</span>
	<span class="token comment">//1.函数外作用域又称为全局作用域,在全局作用域下声明的变量称为全局变量,</span>
	<span class="token comment">//可以在脚本的任何地方访问.</span>
	<span class="token comment">//2. 函数内作用域又称为局部作用域,在局部作用域下声明的变量称为局部变量,</span>
	<span class="token comment">//只能在当前作用域或当前作用域下的局部作用域访问.</span>
	<span class="token comment">//3. 函数内声明的变量,正常情况下会在函数体执行完成自动销毁</span>
	<span class="token comment">//4. js中的变量及函数声明存在提升现象,会先将脚本中的变量及函数的声明提升到当前所在作用域的最顶端.</span>
	<span class="token comment">//其中函数的提升要比变量的提升更靠上.</span>
	<span class="token comment">//5. 当全局变量和局部变量重名时,局部作用域的代码执行会优先使用当前作用域中声明的变量,这种现象称为变量的降低,也叫&#39;就近原则&#39;</span>
	<span class="token comment">//6.this关键字 :this值存在于函数内,函数外是无意义的.:this在函数内指向函数的拥有者.</span>
	<span class="token comment">//</span>
	<span class="token comment">//7. 在全局作用域下声明的全局变量以及全局函数,会自动被作为window对象的属性和方法.也可以说Window就是我们js 中的根对象.</span>
	<span class="token comment">//</span>
	<span class="token comment">//8.函数的作用域在声明的时候就已经确定了与调用位置无关</span>
	<span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
	<span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">var</span> a<span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span>
		console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="变量提升" tabindex="-1"><a class="header-anchor" href="#变量提升" aria-hidden="true">#</a> 变量提升</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>
<span class="token comment">//错误代码</span>
<span class="token keyword">var</span> fontArr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;黑&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;蓝&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;黄&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;红&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;绿&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    arrColors <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;blue&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;red&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;yellow&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;green&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;black&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  
<span class="token comment">//输出大字</span>
bagColor<span class="token punctuation">.</span>innerText <span class="token operator">=</span> fontArr<span class="token punctuation">[</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">//输出小字</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> colors<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> t <span class="token operator">=</span> dele<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>  <span class="token comment">///报错点  </span>
    colors<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>innerText <span class="token operator">=</span> fontArr<span class="token punctuation">[</span>t<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 随机数</span>
<span class="token keyword">function</span> <span class="token function">random</span><span class="token punctuation">(</span><span class="token parameter">min<span class="token punctuation">,</span>max</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> Math<span class="token punctuation">.</span><span class="token function">round</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token punctuation">(</span>max<span class="token operator">-</span>min<span class="token punctuation">)</span> <span class="token operator">+</span> min<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">//不重复数字</span>
<span class="token keyword">function</span> <span class="token function">rnArr</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token comment">// 去重</span>
    <span class="token comment">// 数组长度小于5时</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>arr<span class="token punctuation">.</span>length <span class="token operator">&lt;</span> <span class="token number">5</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 生成0-4的随机数作为数组下标</span>
        <span class="token keyword">var</span> n <span class="token operator">=</span> <span class="token function">random</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 生成对应下标的数字在之前数组中不存在，push</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            arr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

    <span class="token punctuation">}</span>
     <span class="token keyword">return</span> arr<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
  <span class="token keyword">var</span> dele <span class="token operator">=</span>  <span class="token function">rnArr</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">///问题点  变量未声明至调用之前</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>dele<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="math" tabindex="-1"><a class="header-anchor" href="#math" aria-hidden="true">#</a> Math</h2><p><strong>JS提供的数学对象 Math</strong></p><ol><li>Math.max(): 返回参数中的最大数</li><li>Math.min(): 返回参数中的最小数</li><li>Math.abs(): 返回一个数的绝对值</li><li>Math.pow(x,y):计算x 的 y次方</li><li>Math.floor():对小数进行向下取整操作.</li><li>Math.ceil():对小数进行向上取整操作</li><li>Math.round():对小数进行四舍五入取整</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//生成指定区间的公式  </span>
    Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token punctuation">(</span> max <span class="token operator">-</span> min <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token operator">+</span>min<span class="token punctuation">)</span><span class="token punctuation">;</span>  
    Math<span class="token punctuation">.</span><span class="token function">round</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token punctuation">(</span> max <span class="token operator">-</span> min<span class="token punctuation">)</span> <span class="token operator">+</span> min<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>`,19);function _(j,x){const s=p("ExternalLinkIcon");return c(),o("div",null,[n("p",null,[n("a",d,[a("五子棋"),t(s)])]),n("p",null,[n("a",k,[a("贪吃蛇"),t(s)])]),n("p",null,[n("a",m,[a("像素鸟"),t(s)])]),n("p",null,[n("a",v,[a("植物大战僵尸"),t(s)])]),n("p",null,[n("a",b,[a("考拉海购"),t(s)])]),n("p",null,[n("a",g,[a("LOL完全体"),t(s)])]),n("p",null,[n("a",h,[a("象棋"),t(s)])]),n("p",null,[n("a",f,[a("打飞机"),t(s)])]),n("p",null,[n("a",w,[a("纯CSS--网易游戏"),t(s)])]),y])}const A=e(r,[["render",_],["__file","JS基础语法.html.vue"]]);export{A as default};
