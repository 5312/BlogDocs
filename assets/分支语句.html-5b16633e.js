import{_ as n,p as s,q as a,a1 as t}from"./framework-2c66b6ab.js";const e="/BlogDocs/images/js基础一.png",p={},c=t('<h1 id="分支语句" tabindex="-1"><a class="header-anchor" href="#分支语句" aria-hidden="true">#</a> 分支语句</h1><p><img src="'+e+`" alt="js基础一"></p><h3 id="逻辑运算符" tabindex="-1"><a class="header-anchor" href="#逻辑运算符" aria-hidden="true">#</a> 逻辑运算符</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//逻辑运算</span>
		<span class="token keyword">var</span> n <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span>
		<span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">30</span> <span class="token operator">&lt;</span> n <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span>
		console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>


		<span class="token comment">//逻辑运算符</span>
		<span class="token comment">/////////////////////////////</span>
		<span class="token comment">//&amp;&amp; 逻辑     || 或逻辑    ！ 逻辑 //</span>
		<span class="token comment">/////////////////////////////</span>
		<span class="token comment">//////////////////////////////////////////////////////</span>
		<span class="token comment">//&amp;&amp;逻辑（并且）：当运算符左右条件都成立，整个逻辑运算的结果就是 true ，否则为 false。 //</span>
		<span class="token comment">//////////////////////////////////////////////////////</span>
		<span class="token comment">///</span>
		<span class="token comment">//10 &lt; 20 &amp;&amp; 20 &lt; 30;</span>
		<span class="token comment">//&amp;&amp; 与逻辑运算结果并不一定是布尔值，因为逻辑运算符不仅可以连接关系表达式，也可以连接具体的值。</span>
		<span class="token comment">//当整个表达式结果为true，逻辑运算的结果是最后一个成立的表达式的值；如果表达式结果为false，那么逻辑元素的结果是第一个不成立的表达式的值。</span>
		<span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">10</span> <span class="token operator">&amp;&amp;</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> <span class="token number">30</span><span class="token punctuation">;</span>
		console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>

		<span class="token comment">//以下值在自动判断时会被自动判断为false；</span>
		<span class="token comment">//1.：“”；空字符</span>
		<span class="token comment">//2.0 ：数字0</span>
		<span class="token comment">//3. NaN</span>
		<span class="token comment">//4.undefined</span>
		<span class="token comment">//5.null 空值</span>
		

		<span class="token comment">// ||或逻辑（或者)  ： 运算符两侧至少要有一个条件成立整个，否则就是不成立</span>
		<span class="token comment">// </span>
		<span class="token comment">// 或逻辑的运算结果也不一定是布尔值</span>
		<span class="token comment">// </span>
		<span class="token comment">// </span>
		<span class="token comment">// 非逻辑一定是布尔值，</span>
		<span class="token comment">// </span>
		<span class="token comment">// 优先级；</span>
		<span class="token comment">//</span>
		<span class="token comment">//  ! &gt; &amp;&amp; &gt;||</span>
		<span class="token comment">//  </span>
		<span class="token comment">//  算数  &gt;  关系 &gt; 逻辑  &gt; 赋值</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="关系运算符" tabindex="-1"><a class="header-anchor" href="#关系运算符" aria-hidden="true">#</a> 关系运算符</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//用户的操作是不可限制的，</span>
		<span class="token comment">////////////////////////////////////</span>
		<span class="token comment">//我们只能尽可能的去预测用户可能执行的操作，并对其进行条件判断。 //</span>
		<span class="token comment">////////////////////////////////////</span>


		<span class="token comment">//1。关系运算符</span>
		<span class="token comment">//1.&gt;, &lt;,  &gt;=, &lt;=, 由关系运算符组成的式子为关系表达式，关系表达式的运算结果一定是一个boolean</span>
		<span class="token comment">//类型的值： true/false.</span>
		<span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">3</span> <span class="token operator">&gt;</span> <span class="token number">5</span><span class="token punctuation">;</span><span class="token comment">//false</span>
		console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> a<span class="token punctuation">,</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">var</span> b <span class="token operator">=</span> <span class="token number">3</span> <span class="token operator">&lt;=</span><span class="token number">5</span><span class="token punctuation">;</span> <span class="token comment">//true</span>
		console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span>


		<span class="token keyword">var</span> c <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span>
		<span class="token comment">//var d = 10 &lt; c &lt;30;//最好不要这么写</span>
		<span class="token comment">//console.log(d)</span>
		<span class="token keyword">var</span> d <span class="token operator">=</span> <span class="token string">&#39;3a&#39;</span><span class="token punctuation">;</span><span class="token comment">//NaN</span>
		<span class="token comment">//NaN和任何数值比较大小结果都是false，和任何数值进行算数运算结果还是NaN</span>
		<span class="token comment">//</span>
		<span class="token comment">//</span>
		
		<span class="token comment">// == , !=  , ===, !==</span>
		<span class="token comment">//   == 只关心值是否相等</span>
		
		<span class="token comment">// === 不止判断值是否相等，也判断数据类型是否相等</span>
		console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span> <span class="token number">3</span> <span class="token operator">===</span> <span class="token string">&#39;3&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token comment">//数字非零即为真</span>
		console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span> <span class="token number">0</span> <span class="token operator">==</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//true</span>
		


		<span class="token comment">//关系运算符的运算规则</span>
		<span class="token comment">//1. 数字与数字关系运算，正常运算</span>
		<span class="token comment">//2、 数字与字符串关系运算，会先将字符串转化成数字，再去进行关系运算</span>
		<span class="token comment">//3.字符串与字符串关系运算，字符串中的字符按位进行阿斯克码的比较。</span>
		<span class="token comment">//一旦有了结果就停止运算直接作为整个关系表达式的结果。</span>
		
		console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;11&#39;</span> <span class="token operator">&gt;</span> <span class="token string">&#39;7&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

		<span class="token comment">//优先级问题：</span>
		<span class="token comment">//比较大小的要高于比较等于的。</span>
		

		<span class="token comment">//算数  &gt;  关系   &gt;  赋值</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="语句" tabindex="-1"><a class="header-anchor" href="#语句" aria-hidden="true">#</a> 语句</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//条件的判断需要使用分支语句（条件语句）</span>
		<span class="token doc-comment comment">/**
		 * 语法：
		 * if(条件)<span class="token punctuation">{</span>
		 * 	当判断条件成立时要执行的代码
		 * <span class="token punctuation">}</span>
		 *条件：
		 *		可以是关系表达式。逻辑表达式，具体值，算数表达式
		 *
		 *
		 *
		 * 语法：
		 * 		if (条件)<span class="token punctuation">{</span>
		 * 			条件成立执行代码
		 * 		<span class="token punctuation">}</span>
		 * 		else<span class="token punctuation">{</span>
		 * 			条件不成立执行代码
		 * 		<span class="token punctuation">}</span>
		 *
		 *
		 *
		 * 
		 */</span>
		<span class="token comment">// var msg = &#39;带牌&#39;；</span>
		<span class="token comment">// if(msg === &#39;没带牌&#39;){</span>
		<span class="token comment">// 	alert(&#39;把牌带上&#39;)；</span>
		<span class="token comment">// }</span>
		<span class="token comment">// alert(&#39;进来&#39;);</span>



		语句：
		<span class="token keyword">switch</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
			<span class="token keyword">case</span><span class="token operator">:</span>
				<span class="token keyword">break</span><span class="token punctuation">;</span>
			<span class="token keyword">case</span><span class="token operator">:</span>
				<span class="token keyword">break</span><span class="token punctuation">;</span>
			<span class="token keyword">default</span><span class="token operator">:</span>
				<span class="token keyword">break</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">switch</span>只适用于少量定值条件的判断，执行效率要高于elseif语句。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="分支语句-1" tabindex="-1"><a class="header-anchor" href="#分支语句-1" aria-hidden="true">#</a> 分支语句</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//颜色支持red,green,blue;其他内容都是黑色。</span>
		<span class="token doc-comment comment">/**
		 * [btn description]
		 * 获取可操作元素
		 */</span>
		 <span class="token keyword">var</span> color <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;color&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
	 		change <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;change&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
		 	box <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;box&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		 <span class="token comment">//绑定事件</span>
		 change<span class="token punctuation">.</span><span class="token function-variable function">onclick</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		 	<span class="token comment">//获取输入框内容</span>
			<span class="token keyword">var</span> col <span class="token operator">=</span> color<span class="token punctuation">.</span>value<span class="token punctuation">;</span><span class="token comment">//string</span>
		<span class="token comment">// 	//4.对输入内容进行判断，确定div的背景颜色</span>
		<span class="token comment">//    if(col == &#39;red&#39; || col ==&#39;green&#39; || col == &#39;blue&#39;){</span>
		   	
		<span class="token comment">//    			box.style.backgroundColor = col;</span>
		<span class="token comment">//    }</span>

		<span class="token comment">//    else{</span>
		<span class="token comment">//    	box.style.backgroundColor = &#39;black&#39;;</span>
		<span class="token comment">//    }</span>
	
		 <span class="token comment">// 	语句</span>
		 <span class="token comment">// 	if(条件1){</span>
		 <span class="token comment">// 		条件1成立执行的代码，并且结束分支语句</span>
		 <span class="token comment">// 	}else if （条件2）{</span>
		 <span class="token comment">// 	条件2成立执行的代码，并且结束分支语句</span>
		 <span class="token comment">// 	}else if （条件3）{</span>
		 <span class="token comment">// 		条件3成立执行的代码，并且结束分支语句</span>
		 <span class="token comment">// 	}else {</span>
		 <span class="token comment">// 	上述条件都不成立时执行的代码</span>
		 <span class="token comment">// 	}</span>
		 
		 <span class="token keyword">switch</span><span class="token punctuation">(</span>col<span class="token punctuation">)</span><span class="token punctuation">{</span>		 	<span class="token keyword">case</span> <span class="token string">&#39;red&#39;</span><span class="token operator">:</span>
		 		box<span class="token punctuation">.</span>style<span class="token punctuation">.</span>backgroundColor <span class="token operator">=</span> <span class="token string">&#39;red&#39;</span><span class="token punctuation">;</span>
		 		<span class="token keyword">break</span><span class="token punctuation">;</span>
		 	<span class="token keyword">case</span> <span class="token string">&#39;green&#39;</span><span class="token operator">:</span>
		 		box<span class="token punctuation">.</span>style<span class="token punctuation">.</span>backgroundCOlo <span class="token operator">=</span> <span class="token string">&#39;green&#39;</span>
		 		<span class="token keyword">break</span><span class="token punctuation">;</span>
		 	<span class="token keyword">case</span> <span class="token string">&#39;blue&#39;</span><span class="token operator">:</span>
		 		box<span class="token punctuation">.</span>style<span class="token punctuation">.</span>backgroundColor <span class="token operator">=</span> <span class="token string">&#39;blue&#39;</span>
		 		<span class="token keyword">break</span><span class="token punctuation">;</span>
		 	<span class="token keyword">default</span><span class="token operator">:</span>
		 		box<span class="token punctuation">.</span>style<span class="token punctuation">.</span>backgroundColor <span class="token operator">=</span> <span class="token string">&#39;#000000&#39;</span><span class="token punctuation">;</span>
		 		<span class="token keyword">break</span>
		 <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="练习-求最大值" tabindex="-1"><a class="header-anchor" href="#练习-求最大值" aria-hidden="true">#</a> 练习_求最大值</h3><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>zh-CN<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>nub1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>nub2<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>nub3<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>button<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>比较大小<span class="token punctuation">&quot;</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>btn<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
	<span class="token comment">//获取数字</span>
	<span class="token keyword">var</span> num1 <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;nub1&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">var</span> num2 <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;nub2&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">var</span> num3 <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;nub3&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">var</span> btn <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;btn&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token comment">//绑定事件</span>
	btn<span class="token punctuation">.</span><span class="token function-variable function">onclick</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

		<span class="token comment">//获取输入值</span>
		<span class="token comment">//假设nub1 最大</span>
		<span class="token keyword">var</span> max <span class="token operator">=</span> nub1<span class="token punctuation">;</span>
		<span class="token keyword">var</span> a <span class="token operator">=</span> nub1<span class="token punctuation">.</span>value <span class="token operator">*</span> <span class="token number">1</span><span class="token punctuation">,</span>
			b <span class="token operator">=</span> nub2<span class="token punctuation">.</span>value <span class="token operator">*</span> <span class="token number">1</span><span class="token punctuation">,</span>
			c <span class="token operator">=</span> nub3<span class="token punctuation">.</span>value <span class="token operator">*</span> <span class="token number">1</span><span class="token punctuation">;</span>
		<span class="token comment">//思路一</span>
		<span class="token comment">//比较大小</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>a <span class="token operator">&gt;</span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			max <span class="token operator">=</span> a
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			max <span class="token operator">=</span> b
		<span class="token punctuation">}</span>

		<span class="token keyword">if</span> <span class="token punctuation">(</span>max <span class="token operator">&gt;</span> c<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token function">alert</span><span class="token punctuation">(</span>max<span class="token punctuation">)</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			<span class="token function">alert</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span>
		<span class="token punctuation">}</span>


		<span class="token comment">//思路二</span>
		<span class="token comment">// if(a&gt;b){</span>
		<span class="token comment">// 	if(a&gt;c){</span>
		<span class="token comment">// 		//只能说明b一定不是最大</span>
		<span class="token comment">// 		alert(a);</span>
		<span class="token comment">// 	}else{</span>
		<span class="token comment">// 		alert(c)</span>
		<span class="token comment">// 	}</span>

		<span class="token comment">// }else{</span>
		<span class="token comment">// 	//只能说明a一定不是最大</span>
		<span class="token comment">// 	if(b&gt;c){</span>
		<span class="token comment">// 		alert(b);</span>
		<span class="token comment">// 	}else{</span>
		<span class="token comment">// 		alert(c)</span>
		<span class="token comment">// 	}</span>
		<span class="token comment">// }</span>
	<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12),l=[c];function o(i,u){return s(),a("div",null,l)}const r=n(p,[["render",o],["__file","分支语句.html.vue"]]);export{r as default};
