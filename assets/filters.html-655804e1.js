import{_ as s,p as n,q as a,a1 as e}from"./framework-2c66b6ab.js";const t={},p=e(`<h2 id="过滤器" tabindex="-1"><a class="header-anchor" href="#过滤器" aria-hidden="true">#</a> 过滤器</h2><p>在 vue2.0 之前，是有内置过滤器的，在2.0中已经没有内置的过滤器了，但我们可以自定义过滤器。</p><p>关于 vue 过滤器，在官方文档中是这样说明的：</p><blockquote><p>Vue.js 允许你自定义过滤器，可被用于一些常见的文本格式化。过滤器可以用在两个地方：双花括号插值和 v-bind 表达式 (后者从 2.1.0+ 开始支持)。过滤器应该被添加在 JavaScript 表达式的尾部，由“管道”符号指示：</p></blockquote><p>即过滤器是用来格式化数据的一个函数。过滤器不会修改原始数据，它的作用是过滤数据，就是对数据进行加工处理并返回处理后的数据，比如做一些数据格式上的修改，状态转换等。</p><p>过滤器分为两种</p><ul><li>组件内的过滤器(组件内有效)</li><li>全局过滤器(所有组件共享)</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 使用过滤器时需要添加管道符号（ | ）作为分隔，管道符 | 右边是过滤器名称，即文本的功能函数</span>

<span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 在双花括号中 <span class="token operator">--</span><span class="token operator">&gt;</span>
<span class="token punctuation">{</span><span class="token punctuation">{</span> message <span class="token operator">|</span> 过滤器名称 <span class="token punctuation">}</span><span class="token punctuation">}</span>
​
<span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 在 <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">v-bind</span><span class="token template-punctuation string">\`</span></span> 中 <span class="token operator">--</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>div v<span class="token operator">-</span>bind<span class="token operator">:</span>id<span class="token operator">=</span><span class="token string">&quot;message | 过滤器名称&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>过滤器函数将会收到 message 的值作为第一个参数</p><h3 id="在组件内定义过滤器" tabindex="-1"><a class="header-anchor" href="#在组件内定义过滤器" aria-hidden="true">#</a> 在组件内定义过滤器</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// template 中</span>
<span class="token operator">&lt;</span>p<span class="token operator">&gt;</span><span class="token punctuation">{</span><span class="token punctuation">{</span> msg <span class="token operator">|</span> <span class="token function">dataFormat</span><span class="token punctuation">(</span><span class="token string">&#39;!&#39;</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span> <span class="token comment">// 结果: hello world!</span>
<span class="token comment">// </span>
<span class="token comment">// script中</span>
<span class="token function">data</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">msg</span><span class="token operator">:</span> <span class="token string">&#39;hello world&#39;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token comment">//定义私用局部过滤器。只能在当前 vue 对象中使用</span>
<span class="token literal-property property">filters</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function-variable function">dataFormat</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">msg<span class="token punctuation">,</span> a</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span> <span class="token comment">// msg表示要过滤的数据，a表示传入的参数</span>
        <span class="token keyword">return</span> msg <span class="token operator">+</span> a<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
​

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="全局过滤器" tabindex="-1"><a class="header-anchor" href="#全局过滤器" aria-hidden="true">#</a> 全局过滤器</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>Vue<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token string">&#39;过滤器名称&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// val表示要被处理的数据</span>
    <span class="token comment">// 过滤器业务逻辑，要有返回值</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
​
<span class="token operator">&lt;</span>div<span class="token operator">&gt;</span><span class="token punctuation">{</span><span class="token punctuation">{</span> msg <span class="token operator">|</span> 过滤器名称 <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>div v<span class="token operator">-</span>bind<span class="token operator">=</span><span class="token string">&quot;msg | 过滤器名称&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>过滤器可以串联：</p><div class="language-HTML line-numbers-mode" data-ext="HTML"><pre class="language-HTML"><code>{{ message | filterA | filterB }}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>过滤器是 JavaScript 函数，因此可以接收参数：</p><div class="language-HTML line-numbers-mode" data-ext="HTML"><pre class="language-HTML"><code>{{ message | filterA(&#39;arg1&#39;, arg2) }}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,17),o=[p];function l(c,i){return n(),a("div",null,o)}const u=s(t,[["render",l],["__file","filters.html.vue"]]);export{u as default};