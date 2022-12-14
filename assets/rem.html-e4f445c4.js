import{_ as n,p as s,q as a,a1 as t}from"./framework-2c66b6ab.js";const p={},e=t(`<h1 id="大屏自适应" tabindex="-1"><a class="header-anchor" href="#大屏自适应" aria-hidden="true">#</a> 大屏自适应</h1><ul><li>最近在项目中遇到需要 pc 端自适应。这里采用 rem 方式</li></ul><blockquote><p>我为了方便起见将 html 的尺寸设置为 100px，这里将 body 设置为正常高度 贴上如下代码就可以使用 rem 代替 px 了</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">win</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> tid<span class="token punctuation">;</span>
  <span class="token keyword">function</span> <span class="token function">refreshRem</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> designSize <span class="token operator">=</span> <span class="token number">1920</span><span class="token punctuation">;</span> <span class="token comment">// 设计图尺寸</span>
    <span class="token keyword">let</span> html <span class="token operator">=</span> document<span class="token punctuation">.</span>documentElement<span class="token punctuation">;</span>
    <span class="token keyword">let</span> wW <span class="token operator">=</span> html<span class="token punctuation">.</span>clientWidth<span class="token punctuation">;</span> <span class="token comment">// 窗口宽度</span>
    <span class="token keyword">let</span> rem <span class="token operator">=</span> <span class="token punctuation">(</span>wW <span class="token operator">*</span> <span class="token number">100</span><span class="token punctuation">)</span> <span class="token operator">/</span> designSize<span class="token punctuation">;</span>
    document<span class="token punctuation">.</span>documentElement<span class="token punctuation">.</span>style<span class="token punctuation">.</span>fontSize <span class="token operator">=</span> rem <span class="token operator">+</span> <span class="token string">&quot;px&quot;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  win<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span>
    <span class="token string">&quot;resize&quot;</span><span class="token punctuation">,</span>
    <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">clearTimeout</span><span class="token punctuation">(</span>tid<span class="token punctuation">)</span><span class="token punctuation">;</span>
      tid <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span>refreshRem<span class="token punctuation">,</span> <span class="token number">300</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token boolean">false</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
  win<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span>
    <span class="token string">&quot;pageshow&quot;</span><span class="token punctuation">,</span>
    <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>e<span class="token punctuation">.</span>persisted<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">clearTimeout</span><span class="token punctuation">(</span>tid<span class="token punctuation">)</span><span class="token punctuation">;</span>
        tid <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span>refreshRem<span class="token punctuation">,</span> <span class="token number">300</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token boolean">false</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token function">refreshRem</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span>window<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),o=[e];function c(i,u){return s(),a("div",null,o)}const k=n(p,[["render",c],["__file","rem.html.vue"]]);export{k as default};
