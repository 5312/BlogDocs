import{_ as n,o as s,c as a,a as t}from"./app.dd7ce90b.js";var e="/BlogDocs/images/\u5FAA\u73AF.png";const p={},o=t('<h1 id="\u5FAA\u73AF" tabindex="-1"><a class="header-anchor" href="#\u5FAA\u73AF" aria-hidden="true">#</a> \u5FAA\u73AF</h1><p><img src="'+e+`" alt="\u5FAA\u73AF"></p><h3 id="do-while\u5FAA\u73AF" tabindex="-1"><a class="header-anchor" href="#do-while\u5FAA\u73AF" aria-hidden="true">#</a> DO while\u5FAA\u73AF</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">/*
		do\u2026\u2026while \u2026\u2026 \u5FAA\u73AF
		\u8BED\u6CD5\uFF1A
			do{
				code
			}while(\u6761\u4EF6)
			\u7279\u70B9\uFF1A\u65E0\u8BBA\u5FAA\u73AF\u6761\u4EF6\u662F\u5426\u6210\u7ACB\uFF0C\u5FC5\u7136\u4F1A\u6267\u884C\u4E00\u6B21\u5FAA\u73AF\u4F53\u3002
	
	//\u8BA1\u7B971-100\u7684\u548C
	var sum = 0;
	var i = 1;
	do {
		sum +=i;
		i++;
	}while(i&lt;101);
	console.log(sum); */</span>


	<span class="token comment">//\u5FAA\u73AF\u63A7\u5236\u8BED\u53E5 :break,continue </span>
	<span class="token comment">//break:\u5FAA\u73AF\u4F53\u5185,\u9047\u89C1break\u5C31\u7ACB\u5373\u7ED3\u675F\u5FAA\u73AF.\u4E0D\u5728\u6267\u884C\u5269\u4F59\u7684\u5FAA\u73AF\u4F53\u4EE3\u7801.</span>
	<span class="token comment">//continue:\u5FAA\u73AF\u4F53\u5185,\u9047\u89C1continue\u5C31\u7ACB\u5373\u8DF3\u8FC7\u672C\u6B21\u5FAA\u73AF,\u4E0D\u5728\u6267\u884C\u672C\u6B21\u5FAA\u73AF\u4E2D\u5269\u4F59\u7684\u5FAA\u73AF\u4F53\u4EE3\u7801,\u7EE7\u7EED\u6267\u884C\u4E0B\u4E00\u6B21\u5FAA\u73AF.</span>
	<span class="token comment">//</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="for\u5FAA\u73AF" tabindex="-1"><a class="header-anchor" href="#for\u5FAA\u73AF" aria-hidden="true">#</a> for\u5FAA\u73AF</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">//\u6BD4\u5982\uFF0C\u9700\u8981\u4F60\u5728\u6587\u6863\u4E2D\u8FDE\u7EED\u8F93\u51FA10\u6B21\u2018hello world\u2019\uFF0C\u5E76\u4E14\u8981\u6C42\u8FD910 \u4E2A\u2018hello world\u2019 \u5404\u81EA\u72EC\u5360\u4E00\u884C\uFF0C</span>
	
	<span class="token comment">//\u591A\u7528\u4E8E\u5DF2\u77E5\u5FAA\u73AF\u6B21\u6570\u7684\u60C5\u51B5\u4E0B</span>

	<span class="token comment">//\u5FAA\u73AF\u8BED\u53E5\u5E2E\u52A9\u6211\u4EEC\u89E3\u51B3\u4E00\u4E9B\u91CD\u590D\u6216\u8005\u662F\u6709\u89C4\u5F8B\u7684\u4E8B\u7269</span>
	<span class="token comment">/*
	for \u5FAA\u73AF\u8BED\u6CD5\uFF1A
	for(;;){
	
	}
		for (\u8868\u8FBE\u5F0F1: \u8868\u8FBE\u5F0F2: \u8868\u8FBE\u5F0F3:){
				code	
		}
		\u8868\u8FBE\u5F0F1: \u5FAA\u73AF\u53D8\u91CF\u7684\u58F0\u660E
		\u8868\u8FBE\u5F0F2\uFF1A\u5BF9\u5FAA\u73AF\u53D8\u91CF\u7684\u9650\u5236\u6761\u4EF6\uFF0C\u5982\u679C\u4E0D\u7B26\u5408\u6761\u4EF6\uFF0C\u90A3\u4E48\u5C31\u7ACB\u5373\u7ED3\u675F\u5FAA\u73AF\u7ED3\u6784\u3002
		\u8868\u8FBE\u5F0F3\uFF1A\u5FAA\u73AF\u53D8\u91CF\u503C\u6539\u53D8
		code :\u8868\u8FBE\u5F0F2 \u6210\u7ACB\u65F6 \u6267\u884C\u7684\u4EE3\u7801\u5757
	 */</span>
	
	<span class="token comment">//\u91CD\u590D\u6267\u884C10\u6B21</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span> <span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span> <span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span> <span class="token punctuation">;</span> i <span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token comment">//\u8981\u91CD\u590D\u6267\u884C\u7684\u4EE3\u7801</span>
		document<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">&#39;&lt;p&gt;hello world&lt;/p&gt;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//\u7528\u6765\u8BB0\u5F55\u5403\u74DC\u6570\u91CF</span>
	<span class="token keyword">var</span> sum <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span><span class="token number">100</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token comment">//i \u662F\u5929\u6570</span>

		sum <span class="token operator">+=</span> i<span class="token punctuation">;</span>
		
	<span class="token punctuation">}</span>
	<span class="token comment">// document.write( sum) ;</span>



	<span class="token comment">//2. \u56F4\u89C2\u7FA4\u4F17\u5403\u74DC\uFF0C\u4E00\u5171\u53EA\u67093000\u4E2A\u74DC\uFF0C\u6309\u7167\u524D\u9762\u7684\u5403\u6CD5\u80FD\u5403\u591A\u5C11\u5929\u3002</span>
	<span class="token comment">///\u5929\u6570 </span>
		<span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>

	<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">var</span> sum <span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>sum<span class="token operator">&lt;</span><span class="token number">3000</span> <span class="token punctuation">;</span>sum<span class="token operator">+=</span>i <span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token comment">//\u6BCF\u5929\u7684\u74DC\u6570</span>
		console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
		console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>sum<span class="token punctuation">)</span>


		i <span class="token operator">++</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="for-in\u5FAA\u73AF" tabindex="-1"><a class="header-anchor" href="#for-in\u5FAA\u73AF" aria-hidden="true">#</a> for in\u5FAA\u73AF</h3><p><em><strong>\u4E13\u95E8\u7528\u4E8E\u904D\u5386\u5BF9\u8C61\u7684\u5FAA\u73AF</strong></em></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// for in \u5FAA\u73AF\uFF1A</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> x <span class="token keyword">in</span> user<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// \u5FAA\u73AF\u8FC7\u7A0B\u4E2D\uFF0C\u5FAA\u73AF\u53D8\u91CFx\u59CB\u7EC8\u8868\u793A\u6BCF\u4E00\u6B21\u904D\u5386\u952E\u503C\u5BF9\u4E2D\u7684key</span>
		console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>user<span class="token punctuation">[</span>x<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token comment">// \u5FAA\u73AF\u8FC7\u7A0B\u4E2Dvalue\u9700\u8981\u901A\u8FC7obj[x]\u6765\u8BFB\u53D6\uFF0C\u4E0D\u80FD\u4F7F\u7528.\u8BED\u6CD5</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u7EC3\u4E60-url\u5E8F\u53F7" tabindex="-1"><a class="header-anchor" href="#\u7EC3\u4E60-url\u5E8F\u53F7" aria-hidden="true">#</a> \u7EC3\u4E60_url\u5E8F\u53F7</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token operator">&lt;</span><span class="token operator">!</span><span class="token constant">DOCTYPE</span> html<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>html lang<span class="token operator">=</span><span class="token string">&quot;zh-CN&quot;</span><span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>head<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>meta charset<span class="token operator">=</span><span class="token string">&quot;UTF-8&quot;</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>title<span class="token operator">&gt;</span>ul\u5E8F\u53F7<span class="token operator">&lt;</span><span class="token operator">/</span>title<span class="token operator">&gt;</span>
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

<span class="token comment">// 	//\u4F5C\u4E3Aul\u7684\u5B50\u96C6</span>
<span class="token comment">//     a.appendChild(oLi);</span>
<span class="token comment">//  }</span>

<span class="token comment">// </span>
<span class="token comment">//\u65B9\u6CD5\u4E8C;</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="while-\u5FAA\u73AF" tabindex="-1"><a class="header-anchor" href="#while-\u5FAA\u73AF" aria-hidden="true">#</a> while \u5FAA\u73AF</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>	<span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span>\u6211\u662F\u5206\u5272\u7EBF<span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">-</span>
<span class="token doc-comment comment">/*****   while\u5FAA\u73AF\uFF1A \u5728\u4EFB\u4F55\u60C5\u51B5\u4E0B\u90FD\u53EF\u4EE5\u4E0Efor\u5FAA\u73AF\u8FDB\u884C\u7B49\u4EF7\u8F6C\u6362
		\u8BED\u6CD5\uFF1A
			\u5FAA\u73AF\u53D8\u91CF
			while(\u6761\u4EF6)<span class="token punctuation">{</span>
					code
					\u5FAA\u73AF\u53D8\u91CF\u7684\u6539\u53D8
			<span class="token punctuation">}</span>
			\u6CE8\u610F\uFF1A\u5728\u4F7F\u7528while\u65F6\uFF0C\u66F4\u5BB9\u6613\u5FD8\u8BB0\u5FAA\u73AF\u4F53\u5185\u4E9B\u5FAA\u73AF\u53D8\u91CF\u7684\u6539\u53D8\uFF0C\u8FDB\u800C\u5BFC\u81F4\u51FA\u73B0\u6B7B\u5FAA\u73AF\u3002
//  \u591A\u7528\u4E8E\u672A\u77E5\u5FAA\u73AF\u6B21\u6570\u7684\u60C5\u51B5
*/</span>
<span class="token comment">//////////////\u907F\u514D\u51FA\u73B0\u6B7B\u5FAA\u73AF</span>
<span class="token comment">///\u8F93\u51FA10 \u4E2A1</span>
<span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token keyword">while</span><span class="token punctuation">(</span>i<span class="token operator">&lt;</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	i<span class="token operator">++</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u4E09\u5143\u8FD0\u7B97\u7B26" tabindex="-1"><a class="header-anchor" href="#\u4E09\u5143\u8FD0\u7B97\u7B26" aria-hidden="true">#</a> \u4E09\u5143\u8FD0\u7B97\u7B26</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">//\u4E09\u76EE\u8FD0\u7B97\u7B26 \uFF08\u4E09\u5143\u8FD0\u7B97\u7B26\uFF09\uFF0C\u672C\u8D28\u4E0A\u5C31\u662F\u5BF9 if \u2026\u2026 else\u2026\u2026\u8BED\u53E5\u7684\u6539\u5199\u5F62\u5F0F</span>
	<span class="token comment">//</span>
	<span class="token doc-comment comment">/**
	 * \u8BED\u6CD5\uFF1A
	 *    \u8868\u8FBE\u5F0F1 \uFF1F \u8868\u8FBE\u5F0F2\uFF1A\u8868\u8FBE\u5F0F3\uFF1B
	 *
	 *
	 *
	 * 		\u5F53\u8868\u8FBE\u5F0F1 \u4E3Atrue \uFF0C\u6267\u884C\u8868\u8FBE\u5F0F2 \uFF0C\u5426\u5219\u6267\u884C\u8868\u8FBE\u5F0F3\uFF1B
	 * 		
	 */</span>
	<span class="token comment">//\u83B7\u53D6\u5143\u7D20</span>
	<span class="token keyword">var</span> t <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;third&#39;</span><span class="token punctuation">)</span>
		n <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;btn&#39;</span><span class="token punctuation">)</span>

	<span class="token comment">//\u7ED1\u5B9A\u4E8B\u4EF6</span>
	btn<span class="token punctuation">.</span><span class="token function-variable function">onclick</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>

		<span class="token keyword">var</span> num <span class="token operator">=</span> t<span class="token punctuation">.</span>value<span class="token operator">*</span><span class="token number">1</span><span class="token punctuation">;</span>

			<span class="token comment">//\u5947\u5076\u5224\u65AD</span>
		 num <span class="token operator">!=</span><span class="token number">0</span><span class="token operator">?</span><span class="token punctuation">(</span><span class="token punctuation">(</span>num <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&#39;\u8FD9\u662F\u5076\u6570&#39;</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&#39;\u8FD9\u662F\u5947\u6570&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&#39;\u65E2\u4E0D\u662F\u5947\u6570\u4E5F\u4E0D\u662F\u5076\u6570&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		 
	<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u7EC3\u4E60-\u53F0\u9636" tabindex="-1"><a class="header-anchor" href="#\u7EC3\u4E60-\u53F0\u9636" aria-hidden="true">#</a> \u7EC3\u4E60_\u53F0\u9636</h3><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>
<span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>zh-CN<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>\u53F0\u9636<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5FAA\u73AF\u5D4C\u5957" tabindex="-1"><a class="header-anchor" href="#\u5FAA\u73AF\u5D4C\u5957" aria-hidden="true">#</a> \u5FAA\u73AF\u5D4C\u5957</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>
<span class="token comment">//\u5FAA\u73AF\u5D4C\u5957</span>
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

<span class="token comment">//\u5FAA\u73AF\u5D4C\u5957\u6267\u884C\u8FC7\u7A0B:\u5916\u5C42\u5FAA\u73AF\u6267\u884C1\u6B21,\u5185\u5C42\u5FAA\u73AF\u6267\u884C\u6700\u5927\u6B21\u6570(\u6267\u884C\u5230\u4E0D\u7B26\u5408\u6761\u4EF6\u8DF3\u51FA\u5185\u5C42\u5FAA\u73AF).</span>
<span class="token comment">//\u7136\u540E\u5916\u5C42\u5FAA\u73AF\u7EE7\u7EED\u6267\u884C.</span>
<span class="token comment">//</span>
<span class="token comment">//\u5916\u5C42\u5FAA\u73AF\u7528\u6765\u63A7\u5236\u884C,\u5185\u5C42\u5FAA\u73AF\u7528\u6765\u63A7\u5236\u5217.</span>
<span class="token comment">//</span>
<span class="token comment">//\u6253\u5370 99\u4E58\u6CD5\u8868</span>


<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> j <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> j <span class="token operator">&lt;=</span> i<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        document<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>j <span class="token operator">+</span> <span class="token string">&#39;*&#39;</span> <span class="token operator">+</span> i <span class="token operator">+</span> <span class="token string">&#39;=&#39;</span> <span class="token operator">+</span> j <span class="token operator">*</span> i <span class="token operator">+</span> <span class="token string">&#39;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp; &#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>
    document<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">&#39;&lt;br&gt;&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u7EC3\u4E60-\u6C34\u4ED9\u82B1\u6570" tabindex="-1"><a class="header-anchor" href="#\u7EC3\u4E60-\u6C34\u4ED9\u82B1\u6570" aria-hidden="true">#</a> \u7EC3\u4E60_\u6C34\u4ED9\u82B1\u6570</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>	
	<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span> i<span class="token operator">&lt;</span><span class="token number">1000</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token comment">//\u63D0\u53D6\u4F4D\u6570</span>
		<span class="token keyword">var</span> g <span class="token operator">=</span> i<span class="token operator">%</span><span class="token number">10</span><span class="token punctuation">,</span>
			s <span class="token operator">=</span> <span class="token punctuation">(</span>i <span class="token operator">-</span>g <span class="token punctuation">)</span><span class="token operator">/</span><span class="token number">10</span> <span class="token operator">%</span><span class="token number">10</span> <span class="token punctuation">,</span>
			b <span class="token operator">=</span> <span class="token punctuation">(</span>i <span class="token operator">-</span> g<span class="token operator">*</span><span class="token number">1</span> <span class="token operator">-</span> s<span class="token operator">*</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token operator">/</span><span class="token number">100</span><span class="token punctuation">;</span>
			<span class="token comment">//\u7ACB\u65B9\u4E4B\u548C</span>
		<span class="token keyword">var</span> sum <span class="token operator">=</span> g<span class="token operator">*</span>g<span class="token operator">*</span>g <span class="token operator">+</span> s<span class="token operator">*</span>s<span class="token operator">*</span>s <span class="token operator">+</span> b<span class="token operator">*</span>b<span class="token operator">*</span>b<span class="token punctuation">;</span>
		<span class="token comment">//\u5224\u65AD\u7ACB\u65B9\u548C\u662F\u5426\u7B49\u4E8E\u5B83\u81EA\u8EAB</span>
			<span class="token keyword">if</span><span class="token punctuation">(</span>sum <span class="token operator">==</span> i <span class="token punctuation">)</span><span class="token punctuation">{</span>
				console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>	
				document<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>i<span class="token operator">+</span><span class="token string">&#39;&lt;br&gt;&#39;</span><span class="token punctuation">)</span>	
			<span class="token punctuation">}</span>

	<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,21),l=[o];function c(i,r){return s(),a("div",null,l)}var d=n(p,[["render",c],["__file","\u5FAA\u73AF.html.vue"]]);export{d as default};
