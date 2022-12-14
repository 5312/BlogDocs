import{_ as n,p as s,q as a,a1 as t}from"./framework-2c66b6ab.js";const e="/BlogDocs/images/循环.png",p={},o=t('<h1 id="循环" tabindex="-1"><a class="header-anchor" href="#循环" aria-hidden="true">#</a> 循环</h1><p><img src="'+e+`" alt="循环"></p><h3 id="do-while循环" tabindex="-1"><a class="header-anchor" href="#do-while循环" aria-hidden="true">#</a> DO while循环</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">/*
		do……while …… 循环
		语法：
			do{
				code
			}while(条件)
			特点：无论循环条件是否成立，必然会执行一次循环体。
	
	//计算1-100的和
	var sum = 0;
	var i = 1;
	do {
		sum +=i;
		i++;
	}while(i&lt;101);
	console.log(sum); */</span>


	<span class="token comment">//循环控制语句 :break,continue </span>
	<span class="token comment">//break:循环体内,遇见break就立即结束循环.不在执行剩余的循环体代码.</span>
	<span class="token comment">//continue:循环体内,遇见continue就立即跳过本次循环,不在执行本次循环中剩余的循环体代码,继续执行下一次循环.</span>
	<span class="token comment">//</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="for循环" tabindex="-1"><a class="header-anchor" href="#for循环" aria-hidden="true">#</a> for循环</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//比如，需要你在文档中连续输出10次‘hello world’，并且要求这10 个‘hello world’ 各自独占一行，</span>
	
	<span class="token comment">//多用于已知循环次数的情况下</span>

	<span class="token comment">//循环语句帮助我们解决一些重复或者是有规律的事物</span>
	<span class="token comment">/*
	for 循环语法：
	for(;;){
	
	}
		for (表达式1: 表达式2: 表达式3:){
				code	
		}
		表达式1: 循环变量的声明
		表达式2：对循环变量的限制条件，如果不符合条件，那么就立即结束循环结构。
		表达式3：循环变量值改变
		code :表达式2 成立时 执行的代码块
	 */</span>
	
	<span class="token comment">//重复执行10次</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span> <span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span> <span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span> <span class="token punctuation">;</span> i <span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token comment">//要重复执行的代码</span>
		document<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">&#39;&lt;p&gt;hello world&lt;/p&gt;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//用来记录吃瓜数量</span>
	<span class="token keyword">var</span> sum <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span><span class="token number">100</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token comment">//i 是天数</span>

		sum <span class="token operator">+=</span> i<span class="token punctuation">;</span>
		
	<span class="token punctuation">}</span>
	<span class="token comment">// document.write( sum) ;</span>



	<span class="token comment">//2. 围观群众吃瓜，一共只有3000个瓜，按照前面的吃法能吃多少天。</span>
	<span class="token comment">///天数 </span>
		<span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>

	<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">var</span> sum <span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>sum<span class="token operator">&lt;</span><span class="token number">3000</span> <span class="token punctuation">;</span>sum<span class="token operator">+=</span>i <span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token comment">//每天的瓜数</span>
		console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
		console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>sum<span class="token punctuation">)</span>


		i <span class="token operator">++</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="for-in循环" tabindex="-1"><a class="header-anchor" href="#for-in循环" aria-hidden="true">#</a> for in循环</h3><p><em><strong>专门用于遍历对象的循环</strong></em></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// for in 循环：</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> x <span class="token keyword">in</span> user<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// 循环过程中，循环变量x始终表示每一次遍历键值对中的key</span>
		console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>user<span class="token punctuation">[</span>x<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token comment">// 循环过程中value需要通过obj[x]来读取，不能使用.语法</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="练习-url序号" tabindex="-1"><a class="header-anchor" href="#练习-url序号" aria-hidden="true">#</a> 练习_url序号</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span><span class="token operator">!</span><span class="token constant">DOCTYPE</span> html<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>html lang<span class="token operator">=</span><span class="token string">&quot;zh-CN&quot;</span><span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>head<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>meta charset<span class="token operator">=</span><span class="token string">&quot;UTF-8&quot;</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>title<span class="token operator">&gt;</span>ul序号<span class="token operator">&lt;</span><span class="token operator">/</span>title<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>style<span class="token operator">&gt;</span>
 
    #oUl <span class="token punctuation">{</span>
        list<span class="token operator">-</span>style<span class="token operator">-</span>type<span class="token operator">:</span> demical<span class="token punctuation">;</span>
        <span class="token literal-property property">width</span><span class="token operator">:</span> 200px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    ul li <span class="token punctuation">{</span>
        list<span class="token operator">-</span>style<span class="token operator">-</span>position<span class="token operator">:</span> outside<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>head<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>body<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>ul id<span class="token operator">=</span><span class="token string">&quot;oUl&quot;</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>ul<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>ol<span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>ol<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>body<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
 <span class="token keyword">var</span> a <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;oUl&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    
<span class="token comment">// for (var i = 0; i &lt; 10; i++) {</span>

<span class="token comment">//     var oLi = document.createElement(&#39;li&#39;);</span>

<span class="token comment">// 	//作为ul的子集</span>
<span class="token comment">//     a.appendChild(oLi);</span>
<span class="token comment">//  }</span>

<span class="token comment">// </span>
<span class="token comment">//方法二;</span>
	<span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">while</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	    <span class="token keyword">var</span> oLi <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;li&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>	    
	    a<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>oLi<span class="token punctuation">)</span><span class="token punctuation">;</span>
	    i<span class="token operator">++</span><span class="token punctuation">;</span>
        
        <span class="token comment">// oLi[i].innerHTML=i+1;</span>
	<span class="token punctuation">}</span>
	 <span class="token comment">// a.style.listStyle=&#39;decimal&#39;;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>


<span class="token operator">&lt;</span><span class="token operator">/</span>html<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="while-循环" tabindex="-1"><a class="header-anchor" href="#while-循环" aria-hidden="true">#</a> while 循环</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>	<span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span>我是分割线<span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">-</span>
<span class="token doc-comment comment">/*****   while循环： 在任何情况下都可以与for循环进行等价转换
		语法：
			循环变量
			while(条件)<span class="token punctuation">{</span>
					code
					循环变量的改变
			<span class="token punctuation">}</span>
			注意：在使用while时，更容易忘记循环体内些循环变量的改变，进而导致出现死循环。
//  多用于未知循环次数的情况
*/</span>
<span class="token comment">//////////////避免出现死循环</span>
<span class="token comment">///输出10 个1</span>
<span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token keyword">while</span><span class="token punctuation">(</span>i<span class="token operator">&lt;</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	i<span class="token operator">++</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="三元运算符" tabindex="-1"><a class="header-anchor" href="#三元运算符" aria-hidden="true">#</a> 三元运算符</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//三目运算符 （三元运算符），本质上就是对 if …… else……语句的改写形式</span>
	<span class="token comment">//</span>
	<span class="token doc-comment comment">/**
	 * 语法：
	 *    表达式1 ？ 表达式2：表达式3；
	 *
	 *
	 *
	 * 		当表达式1 为true ，执行表达式2 ，否则执行表达式3；
	 * 		
	 */</span>
	<span class="token comment">//获取元素</span>
	<span class="token keyword">var</span> t <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;third&#39;</span><span class="token punctuation">)</span>
		n <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;btn&#39;</span><span class="token punctuation">)</span>

	<span class="token comment">//绑定事件</span>
	btn<span class="token punctuation">.</span><span class="token function-variable function">onclick</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>

		<span class="token keyword">var</span> num <span class="token operator">=</span> t<span class="token punctuation">.</span>value<span class="token operator">*</span><span class="token number">1</span><span class="token punctuation">;</span>

			<span class="token comment">//奇偶判断</span>
		 num <span class="token operator">!=</span><span class="token number">0</span><span class="token operator">?</span><span class="token punctuation">(</span><span class="token punctuation">(</span>num <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&#39;这是偶数&#39;</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&#39;这是奇数&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&#39;既不是奇数也不是偶数&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		 
	<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="练习-台阶" tabindex="-1"><a class="header-anchor" href="#练习-台阶" aria-hidden="true">#</a> 练习_台阶</h3><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>
<span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>zh-CN<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>台阶<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
    <span class="token selector">div</span> <span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
        <span class="token property">background</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
        <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">8</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> i<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        document<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">&#39;&lt;div&gt;&lt;/div&gt;&#39;</span><span class="token operator">+</span><span class="token string">&#39; &#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    document<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">&#39;&lt;br&gt;&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="循环嵌套" tabindex="-1"><a class="header-anchor" href="#循环嵌套" aria-hidden="true">#</a> 循环嵌套</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>
<span class="token comment">//循环嵌套</span>
<span class="token comment">/*
1
1 2
1 2 3
 */</span>
<span class="token comment">// for (var j = 1; j &lt;= 3; j++) {</span>
<span class="token comment">//     for (var i = 1; i &lt;= j; i++) {</span>
<span class="token comment">//         document.write(i = &#39; &#39;)</span>
<span class="token comment">//     }</span>
<span class="token comment">//     document.write(&#39;&lt;br&gt;&#39;)</span>
<span class="token comment">// }</span>

<span class="token comment">//循环嵌套执行过程:外层循环执行1次,内层循环执行最大次数(执行到不符合条件跳出内层循环).</span>
<span class="token comment">//然后外层循环继续执行.</span>
<span class="token comment">//</span>
<span class="token comment">//外层循环用来控制行,内层循环用来控制列.</span>
<span class="token comment">//</span>
<span class="token comment">//打印 99乘法表</span>


<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> j <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> j <span class="token operator">&lt;=</span> i<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        document<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>j <span class="token operator">+</span> <span class="token string">&#39;*&#39;</span> <span class="token operator">+</span> i <span class="token operator">+</span> <span class="token string">&#39;=&#39;</span> <span class="token operator">+</span> j <span class="token operator">*</span> i <span class="token operator">+</span> <span class="token string">&#39;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp; &#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>
    document<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">&#39;&lt;br&gt;&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="练习-水仙花数" tabindex="-1"><a class="header-anchor" href="#练习-水仙花数" aria-hidden="true">#</a> 练习_水仙花数</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>	
	<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span> i<span class="token operator">&lt;</span><span class="token number">1000</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token comment">//提取位数</span>
		<span class="token keyword">var</span> g <span class="token operator">=</span> i<span class="token operator">%</span><span class="token number">10</span><span class="token punctuation">,</span>
			s <span class="token operator">=</span> <span class="token punctuation">(</span>i <span class="token operator">-</span>g <span class="token punctuation">)</span><span class="token operator">/</span><span class="token number">10</span> <span class="token operator">%</span><span class="token number">10</span> <span class="token punctuation">,</span>
			b <span class="token operator">=</span> <span class="token punctuation">(</span>i <span class="token operator">-</span> g<span class="token operator">*</span><span class="token number">1</span> <span class="token operator">-</span> s<span class="token operator">*</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token operator">/</span><span class="token number">100</span><span class="token punctuation">;</span>
			<span class="token comment">//立方之和</span>
		<span class="token keyword">var</span> sum <span class="token operator">=</span> g<span class="token operator">*</span>g<span class="token operator">*</span>g <span class="token operator">+</span> s<span class="token operator">*</span>s<span class="token operator">*</span>s <span class="token operator">+</span> b<span class="token operator">*</span>b<span class="token operator">*</span>b<span class="token punctuation">;</span>
		<span class="token comment">//判断立方和是否等于它自身</span>
			<span class="token keyword">if</span><span class="token punctuation">(</span>sum <span class="token operator">==</span> i <span class="token punctuation">)</span><span class="token punctuation">{</span>
				console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>	
				document<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>i<span class="token operator">+</span><span class="token string">&#39;&lt;br&gt;&#39;</span><span class="token punctuation">)</span>	
			<span class="token punctuation">}</span>

	<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,21),l=[o];function c(i,r){return s(),a("div",null,l)}const d=n(p,[["render",c],["__file","循环.html.vue"]]);export{d as default};
