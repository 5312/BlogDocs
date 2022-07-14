import{_ as n,o as s,c as a,a as t}from"./app.dd7ce90b.js";var e="/BlogDocs/images/js\u57FA\u7840\u4E00.png";const p={},c=t('<h1 id="\u5206\u652F\u8BED\u53E5" tabindex="-1"><a class="header-anchor" href="#\u5206\u652F\u8BED\u53E5" aria-hidden="true">#</a> \u5206\u652F\u8BED\u53E5</h1><p><img src="'+e+`" alt="js\u57FA\u7840\u4E00"></p><h3 id="\u903B\u8F91\u8FD0\u7B97\u7B26" tabindex="-1"><a class="header-anchor" href="#\u903B\u8F91\u8FD0\u7B97\u7B26" aria-hidden="true">#</a> \u903B\u8F91\u8FD0\u7B97\u7B26</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">//\u903B\u8F91\u8FD0\u7B97</span>
		<span class="token keyword">var</span> n <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span>
		<span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">30</span> <span class="token operator">&lt;</span> n <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span>
		console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>


		<span class="token comment">//\u903B\u8F91\u8FD0\u7B97\u7B26</span>
		<span class="token comment">/////////////////////////////</span>
		<span class="token comment">//&amp;&amp; \u903B\u8F91     || \u6216\u903B\u8F91    \uFF01 \u903B\u8F91 //</span>
		<span class="token comment">/////////////////////////////</span>
		<span class="token comment">//////////////////////////////////////////////////////</span>
		<span class="token comment">//&amp;&amp;\u903B\u8F91\uFF08\u5E76\u4E14\uFF09\uFF1A\u5F53\u8FD0\u7B97\u7B26\u5DE6\u53F3\u6761\u4EF6\u90FD\u6210\u7ACB\uFF0C\u6574\u4E2A\u903B\u8F91\u8FD0\u7B97\u7684\u7ED3\u679C\u5C31\u662F true \uFF0C\u5426\u5219\u4E3A false\u3002 //</span>
		<span class="token comment">//////////////////////////////////////////////////////</span>
		<span class="token comment">///</span>
		<span class="token comment">//10 &lt; 20 &amp;&amp; 20 &lt; 30;</span>
		<span class="token comment">//&amp;&amp; \u4E0E\u903B\u8F91\u8FD0\u7B97\u7ED3\u679C\u5E76\u4E0D\u4E00\u5B9A\u662F\u5E03\u5C14\u503C\uFF0C\u56E0\u4E3A\u903B\u8F91\u8FD0\u7B97\u7B26\u4E0D\u4EC5\u53EF\u4EE5\u8FDE\u63A5\u5173\u7CFB\u8868\u8FBE\u5F0F\uFF0C\u4E5F\u53EF\u4EE5\u8FDE\u63A5\u5177\u4F53\u7684\u503C\u3002</span>
		<span class="token comment">//\u5F53\u6574\u4E2A\u8868\u8FBE\u5F0F\u7ED3\u679C\u4E3Atrue\uFF0C\u903B\u8F91\u8FD0\u7B97\u7684\u7ED3\u679C\u662F\u6700\u540E\u4E00\u4E2A\u6210\u7ACB\u7684\u8868\u8FBE\u5F0F\u7684\u503C\uFF1B\u5982\u679C\u8868\u8FBE\u5F0F\u7ED3\u679C\u4E3Afalse\uFF0C\u90A3\u4E48\u903B\u8F91\u5143\u7D20\u7684\u7ED3\u679C\u662F\u7B2C\u4E00\u4E2A\u4E0D\u6210\u7ACB\u7684\u8868\u8FBE\u5F0F\u7684\u503C\u3002</span>
		<span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">10</span> <span class="token operator">&amp;&amp;</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> <span class="token number">30</span><span class="token punctuation">;</span>
		console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>

		<span class="token comment">//\u4EE5\u4E0B\u503C\u5728\u81EA\u52A8\u5224\u65AD\u65F6\u4F1A\u88AB\u81EA\u52A8\u5224\u65AD\u4E3Afalse\uFF1B</span>
		<span class="token comment">//1.\uFF1A\u201C\u201D\uFF1B\u7A7A\u5B57\u7B26</span>
		<span class="token comment">//2.0 \uFF1A\u6570\u5B570</span>
		<span class="token comment">//3. NaN</span>
		<span class="token comment">//4.undefined</span>
		<span class="token comment">//5.null \u7A7A\u503C</span>
		

		<span class="token comment">// ||\u6216\u903B\u8F91\uFF08\u6216\u8005)  \uFF1A \u8FD0\u7B97\u7B26\u4E24\u4FA7\u81F3\u5C11\u8981\u6709\u4E00\u4E2A\u6761\u4EF6\u6210\u7ACB\u6574\u4E2A\uFF0C\u5426\u5219\u5C31\u662F\u4E0D\u6210\u7ACB</span>
		<span class="token comment">// </span>
		<span class="token comment">// \u6216\u903B\u8F91\u7684\u8FD0\u7B97\u7ED3\u679C\u4E5F\u4E0D\u4E00\u5B9A\u662F\u5E03\u5C14\u503C</span>
		<span class="token comment">// </span>
		<span class="token comment">// </span>
		<span class="token comment">// \u975E\u903B\u8F91\u4E00\u5B9A\u662F\u5E03\u5C14\u503C\uFF0C</span>
		<span class="token comment">// </span>
		<span class="token comment">// \u4F18\u5148\u7EA7\uFF1B</span>
		<span class="token comment">//</span>
		<span class="token comment">//  ! &gt; &amp;&amp; &gt;||</span>
		<span class="token comment">//  </span>
		<span class="token comment">//  \u7B97\u6570  &gt;  \u5173\u7CFB &gt; \u903B\u8F91  &gt; \u8D4B\u503C</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5173\u7CFB\u8FD0\u7B97\u7B26" tabindex="-1"><a class="header-anchor" href="#\u5173\u7CFB\u8FD0\u7B97\u7B26" aria-hidden="true">#</a> \u5173\u7CFB\u8FD0\u7B97\u7B26</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">//\u7528\u6237\u7684\u64CD\u4F5C\u662F\u4E0D\u53EF\u9650\u5236\u7684\uFF0C</span>
		<span class="token comment">////////////////////////////////////</span>
		<span class="token comment">//\u6211\u4EEC\u53EA\u80FD\u5C3D\u53EF\u80FD\u7684\u53BB\u9884\u6D4B\u7528\u6237\u53EF\u80FD\u6267\u884C\u7684\u64CD\u4F5C\uFF0C\u5E76\u5BF9\u5176\u8FDB\u884C\u6761\u4EF6\u5224\u65AD\u3002 //</span>
		<span class="token comment">////////////////////////////////////</span>


		<span class="token comment">//1\u3002\u5173\u7CFB\u8FD0\u7B97\u7B26</span>
		<span class="token comment">//1.&gt;, &lt;,  &gt;=, &lt;=, \u7531\u5173\u7CFB\u8FD0\u7B97\u7B26\u7EC4\u6210\u7684\u5F0F\u5B50\u4E3A\u5173\u7CFB\u8868\u8FBE\u5F0F\uFF0C\u5173\u7CFB\u8868\u8FBE\u5F0F\u7684\u8FD0\u7B97\u7ED3\u679C\u4E00\u5B9A\u662F\u4E00\u4E2Aboolean</span>
		<span class="token comment">//\u7C7B\u578B\u7684\u503C\uFF1A true/false.</span>
		<span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">3</span> <span class="token operator">&gt;</span> <span class="token number">5</span><span class="token punctuation">;</span><span class="token comment">//false</span>
		console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> a<span class="token punctuation">,</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">var</span> b <span class="token operator">=</span> <span class="token number">3</span> <span class="token operator">&lt;=</span><span class="token number">5</span><span class="token punctuation">;</span> <span class="token comment">//true</span>
		console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span>


		<span class="token keyword">var</span> c <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span>
		<span class="token comment">//var d = 10 &lt; c &lt;30;//\u6700\u597D\u4E0D\u8981\u8FD9\u4E48\u5199</span>
		<span class="token comment">//console.log(d)</span>
		<span class="token keyword">var</span> d <span class="token operator">=</span> <span class="token string">&#39;3a&#39;</span><span class="token punctuation">;</span><span class="token comment">//NaN</span>
		<span class="token comment">//NaN\u548C\u4EFB\u4F55\u6570\u503C\u6BD4\u8F83\u5927\u5C0F\u7ED3\u679C\u90FD\u662Ffalse\uFF0C\u548C\u4EFB\u4F55\u6570\u503C\u8FDB\u884C\u7B97\u6570\u8FD0\u7B97\u7ED3\u679C\u8FD8\u662FNaN</span>
		<span class="token comment">//</span>
		<span class="token comment">//</span>
		
		<span class="token comment">// == , !=  , ===, !==</span>
		<span class="token comment">//   == \u53EA\u5173\u5FC3\u503C\u662F\u5426\u76F8\u7B49</span>
		
		<span class="token comment">// === \u4E0D\u6B62\u5224\u65AD\u503C\u662F\u5426\u76F8\u7B49\uFF0C\u4E5F\u5224\u65AD\u6570\u636E\u7C7B\u578B\u662F\u5426\u76F8\u7B49</span>
		console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span> <span class="token number">3</span> <span class="token operator">===</span> <span class="token string">&#39;3&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token comment">//\u6570\u5B57\u975E\u96F6\u5373\u4E3A\u771F</span>
		console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span> <span class="token number">0</span> <span class="token operator">==</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//true</span>
		


		<span class="token comment">//\u5173\u7CFB\u8FD0\u7B97\u7B26\u7684\u8FD0\u7B97\u89C4\u5219</span>
		<span class="token comment">//1. \u6570\u5B57\u4E0E\u6570\u5B57\u5173\u7CFB\u8FD0\u7B97\uFF0C\u6B63\u5E38\u8FD0\u7B97</span>
		<span class="token comment">//2\u3001 \u6570\u5B57\u4E0E\u5B57\u7B26\u4E32\u5173\u7CFB\u8FD0\u7B97\uFF0C\u4F1A\u5148\u5C06\u5B57\u7B26\u4E32\u8F6C\u5316\u6210\u6570\u5B57\uFF0C\u518D\u53BB\u8FDB\u884C\u5173\u7CFB\u8FD0\u7B97</span>
		<span class="token comment">//3.\u5B57\u7B26\u4E32\u4E0E\u5B57\u7B26\u4E32\u5173\u7CFB\u8FD0\u7B97\uFF0C\u5B57\u7B26\u4E32\u4E2D\u7684\u5B57\u7B26\u6309\u4F4D\u8FDB\u884C\u963F\u65AF\u514B\u7801\u7684\u6BD4\u8F83\u3002</span>
		<span class="token comment">//\u4E00\u65E6\u6709\u4E86\u7ED3\u679C\u5C31\u505C\u6B62\u8FD0\u7B97\u76F4\u63A5\u4F5C\u4E3A\u6574\u4E2A\u5173\u7CFB\u8868\u8FBE\u5F0F\u7684\u7ED3\u679C\u3002</span>
		
		console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;11&#39;</span> <span class="token operator">&gt;</span> <span class="token string">&#39;7&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

		<span class="token comment">//\u4F18\u5148\u7EA7\u95EE\u9898\uFF1A</span>
		<span class="token comment">//\u6BD4\u8F83\u5927\u5C0F\u7684\u8981\u9AD8\u4E8E\u6BD4\u8F83\u7B49\u4E8E\u7684\u3002</span>
		

		<span class="token comment">//\u7B97\u6570  &gt;  \u5173\u7CFB   &gt;  \u8D4B\u503C</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u8BED\u53E5" tabindex="-1"><a class="header-anchor" href="#\u8BED\u53E5" aria-hidden="true">#</a> \u8BED\u53E5</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">//\u6761\u4EF6\u7684\u5224\u65AD\u9700\u8981\u4F7F\u7528\u5206\u652F\u8BED\u53E5\uFF08\u6761\u4EF6\u8BED\u53E5\uFF09</span>
		<span class="token doc-comment comment">/**
		 * \u8BED\u6CD5\uFF1A
		 * if(\u6761\u4EF6)<span class="token punctuation">{</span>
		 * 	\u5F53\u5224\u65AD\u6761\u4EF6\u6210\u7ACB\u65F6\u8981\u6267\u884C\u7684\u4EE3\u7801
		 * <span class="token punctuation">}</span>
		 *\u6761\u4EF6\uFF1A
		 *		\u53EF\u4EE5\u662F\u5173\u7CFB\u8868\u8FBE\u5F0F\u3002\u903B\u8F91\u8868\u8FBE\u5F0F\uFF0C\u5177\u4F53\u503C\uFF0C\u7B97\u6570\u8868\u8FBE\u5F0F
		 *
		 *
		 *
		 * \u8BED\u6CD5\uFF1A
		 * 		if (\u6761\u4EF6)<span class="token punctuation">{</span>
		 * 			\u6761\u4EF6\u6210\u7ACB\u6267\u884C\u4EE3\u7801
		 * 		<span class="token punctuation">}</span>
		 * 		else<span class="token punctuation">{</span>
		 * 			\u6761\u4EF6\u4E0D\u6210\u7ACB\u6267\u884C\u4EE3\u7801
		 * 		<span class="token punctuation">}</span>
		 *
		 *
		 *
		 * 
		 */</span>
		<span class="token comment">// var msg = &#39;\u5E26\u724C&#39;\uFF1B</span>
		<span class="token comment">// if(msg === &#39;\u6CA1\u5E26\u724C&#39;){</span>
		<span class="token comment">// 	alert(&#39;\u628A\u724C\u5E26\u4E0A&#39;)\uFF1B</span>
		<span class="token comment">// }</span>
		<span class="token comment">// alert(&#39;\u8FDB\u6765&#39;);</span>



		\u8BED\u53E5\uFF1A
		<span class="token keyword">switch</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
			<span class="token keyword">case</span><span class="token operator">:</span>
				<span class="token keyword">break</span><span class="token punctuation">;</span>
			<span class="token keyword">case</span><span class="token operator">:</span>
				<span class="token keyword">break</span><span class="token punctuation">;</span>
			<span class="token keyword">default</span><span class="token operator">:</span>
				<span class="token keyword">break</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">switch</span>\u53EA\u9002\u7528\u4E8E\u5C11\u91CF\u5B9A\u503C\u6761\u4EF6\u7684\u5224\u65AD\uFF0C\u6267\u884C\u6548\u7387\u8981\u9AD8\u4E8Eelseif\u8BED\u53E5\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5206\u652F\u8BED\u53E5-1" tabindex="-1"><a class="header-anchor" href="#\u5206\u652F\u8BED\u53E5-1" aria-hidden="true">#</a> \u5206\u652F\u8BED\u53E5</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">//\u989C\u8272\u652F\u6301red,green,blue;\u5176\u4ED6\u5185\u5BB9\u90FD\u662F\u9ED1\u8272\u3002</span>
		<span class="token doc-comment comment">/**
		 * [btn description]
		 * \u83B7\u53D6\u53EF\u64CD\u4F5C\u5143\u7D20
		 */</span>
		 <span class="token keyword">var</span> color <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;color&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
	 		change <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;change&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
		 	box <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;box&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		 <span class="token comment">//\u7ED1\u5B9A\u4E8B\u4EF6</span>
		 change<span class="token punctuation">.</span><span class="token function-variable function">onclick</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		 	<span class="token comment">//\u83B7\u53D6\u8F93\u5165\u6846\u5185\u5BB9</span>
			<span class="token keyword">var</span> col <span class="token operator">=</span> color<span class="token punctuation">.</span>value<span class="token punctuation">;</span><span class="token comment">//string</span>
		<span class="token comment">// 	//4.\u5BF9\u8F93\u5165\u5185\u5BB9\u8FDB\u884C\u5224\u65AD\uFF0C\u786E\u5B9Adiv\u7684\u80CC\u666F\u989C\u8272</span>
		<span class="token comment">//    if(col == &#39;red&#39; || col ==&#39;green&#39; || col == &#39;blue&#39;){</span>
		   	
		<span class="token comment">//    			box.style.backgroundColor = col;</span>
		<span class="token comment">//    }</span>

		<span class="token comment">//    else{</span>
		<span class="token comment">//    	box.style.backgroundColor = &#39;black&#39;;</span>
		<span class="token comment">//    }</span>
	
		 <span class="token comment">// 	\u8BED\u53E5</span>
		 <span class="token comment">// 	if(\u6761\u4EF61){</span>
		 <span class="token comment">// 		\u6761\u4EF61\u6210\u7ACB\u6267\u884C\u7684\u4EE3\u7801\uFF0C\u5E76\u4E14\u7ED3\u675F\u5206\u652F\u8BED\u53E5</span>
		 <span class="token comment">// 	}else if \uFF08\u6761\u4EF62\uFF09{</span>
		 <span class="token comment">// 	\u6761\u4EF62\u6210\u7ACB\u6267\u884C\u7684\u4EE3\u7801\uFF0C\u5E76\u4E14\u7ED3\u675F\u5206\u652F\u8BED\u53E5</span>
		 <span class="token comment">// 	}else if \uFF08\u6761\u4EF63\uFF09{</span>
		 <span class="token comment">// 		\u6761\u4EF63\u6210\u7ACB\u6267\u884C\u7684\u4EE3\u7801\uFF0C\u5E76\u4E14\u7ED3\u675F\u5206\u652F\u8BED\u53E5</span>
		 <span class="token comment">// 	}else {</span>
		 <span class="token comment">// 	\u4E0A\u8FF0\u6761\u4EF6\u90FD\u4E0D\u6210\u7ACB\u65F6\u6267\u884C\u7684\u4EE3\u7801</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u7EC3\u4E60-\u6C42\u6700\u5927\u503C" tabindex="-1"><a class="header-anchor" href="#\u7EC3\u4E60-\u6C42\u6700\u5927\u503C" aria-hidden="true">#</a> \u7EC3\u4E60_\u6C42\u6700\u5927\u503C</h3><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>zh-CN<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>nub1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>nub2<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>nub3<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>button<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u6BD4\u8F83\u5927\u5C0F<span class="token punctuation">&quot;</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>btn<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
	<span class="token comment">//\u83B7\u53D6\u6570\u5B57</span>
	<span class="token keyword">var</span> num1 <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;nub1&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">var</span> num2 <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;nub2&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">var</span> num3 <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;nub3&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">var</span> btn <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;btn&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token comment">//\u7ED1\u5B9A\u4E8B\u4EF6</span>
	btn<span class="token punctuation">.</span><span class="token function-variable function">onclick</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

		<span class="token comment">//\u83B7\u53D6\u8F93\u5165\u503C</span>
		<span class="token comment">//\u5047\u8BBEnub1 \u6700\u5927</span>
		<span class="token keyword">var</span> max <span class="token operator">=</span> nub1<span class="token punctuation">;</span>
		<span class="token keyword">var</span> a <span class="token operator">=</span> nub1<span class="token punctuation">.</span>value <span class="token operator">*</span> <span class="token number">1</span><span class="token punctuation">,</span>
			b <span class="token operator">=</span> nub2<span class="token punctuation">.</span>value <span class="token operator">*</span> <span class="token number">1</span><span class="token punctuation">,</span>
			c <span class="token operator">=</span> nub3<span class="token punctuation">.</span>value <span class="token operator">*</span> <span class="token number">1</span><span class="token punctuation">;</span>
		<span class="token comment">//\u601D\u8DEF\u4E00</span>
		<span class="token comment">//\u6BD4\u8F83\u5927\u5C0F</span>
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


		<span class="token comment">//\u601D\u8DEF\u4E8C</span>
		<span class="token comment">// if(a&gt;b){</span>
		<span class="token comment">// 	if(a&gt;c){</span>
		<span class="token comment">// 		//\u53EA\u80FD\u8BF4\u660Eb\u4E00\u5B9A\u4E0D\u662F\u6700\u5927</span>
		<span class="token comment">// 		alert(a);</span>
		<span class="token comment">// 	}else{</span>
		<span class="token comment">// 		alert(c)</span>
		<span class="token comment">// 	}</span>

		<span class="token comment">// }else{</span>
		<span class="token comment">// 	//\u53EA\u80FD\u8BF4\u660Ea\u4E00\u5B9A\u4E0D\u662F\u6700\u5927</span>
		<span class="token comment">// 	if(b&gt;c){</span>
		<span class="token comment">// 		alert(b);</span>
		<span class="token comment">// 	}else{</span>
		<span class="token comment">// 		alert(c)</span>
		<span class="token comment">// 	}</span>
		<span class="token comment">// }</span>
	<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12),l=[c];function o(i,u){return s(),a("div",null,l)}var r=n(p,[["render",o],["__file","\u5206\u652F\u8BED\u53E5.html.vue"]]);export{r as default};
