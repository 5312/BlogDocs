import{_ as n,p as s,q as a,a1 as t}from"./framework-2c66b6ab.js";const p={},o=t(`<h2 id="在项目中使用-mockjs" tabindex="-1"><a class="header-anchor" href="#在项目中使用-mockjs" aria-hidden="true">#</a> 在项目中使用 mockjs</h2><h3 id="一-快速开始" tabindex="-1"><a class="header-anchor" href="#一-快速开始" aria-hidden="true">#</a> 一 快速开始</h3><ul><li>安装mockjs</li></ul><p><code>npm install mockjs --save-dev</code></p><ul><li>新建 /mock/index.js</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> Mock <span class="token keyword">from</span> <span class="token string">&quot;mockjs&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> configArray <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// 使用webpack的require.context() 遍历所有mock文件</span>
<span class="token keyword">const</span> files <span class="token operator">=</span> require<span class="token punctuation">.</span><span class="token function">context</span><span class="token punctuation">(</span><span class="token string">&quot;.&quot;</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.js$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
files<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">key</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>key <span class="token operator">===</span> <span class="token string">&quot;./index.js&quot;</span><span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> keys <span class="token keyword">in</span> <span class="token function">files</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>Object<span class="token punctuation">.</span><span class="token function">hasOwnProperty</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token function">files</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">,</span> keys<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">const</span> element <span class="token operator">=</span> <span class="token function">files</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">[</span>keys<span class="token punctuation">]</span><span class="token punctuation">;</span>
            configArray <span class="token operator">=</span> configArray<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 注册所有的mock服务</span>
configArray<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">item</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> <span class="token punctuation">[</span>path<span class="token punctuation">,</span> target<span class="token punctuation">]</span> <span class="token keyword">of</span> Object<span class="token punctuation">.</span><span class="token function">entries</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> protocol <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&quot;|&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//    &quot;http://ceshi.ydeshui.com/mock&quot; + protocol[1],</span>
        
        Mock<span class="token punctuation">.</span><span class="token function">mock</span><span class="token punctuation">(</span>
            <span class="token keyword">new</span> <span class="token class-name">RegExp</span><span class="token punctuation">(</span><span class="token string">&quot;(\\\\D*|\\\\S*)/mock&quot;</span> <span class="token operator">+</span> protocol<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            protocol<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            target
        <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container warning"><p class="custom-container-title">注意</p><p>Mock.mock() 第一个参数 要 匹配到 请求的 全部url</p></div><ul><li>在同目录下新建js文件</li></ul><p>m_evrvilayout.js</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> tablist <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;get|/mock/tablist&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">code</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;data|8&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
            <span class="token string-property property">&quot;title|+1&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token string">&quot;环保一张图&quot;</span><span class="token punctuation">,</span>
                <span class="token string">&quot;大气监测&quot;</span><span class="token punctuation">,</span>
                <span class="token string">&quot;水污染监测&quot;</span><span class="token punctuation">,</span>
                <span class="token string">&quot;固体废物监测&quot;</span><span class="token punctuation">,</span>
                <span class="token string">&quot;噪声监测&quot;</span><span class="token punctuation">,</span>
                <span class="token string">&quot;环保基础管理&quot;</span><span class="token punctuation">,</span>
                <span class="token string">&quot;水资源管理&quot;</span><span class="token punctuation">,</span>
                <span class="token string">&quot;绿色矿山&quot;</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">&quot;请求成功&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">success</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>在main.js 中引入</li></ul><p><code>require(&quot;@/api/mock/mockAxios&quot;);</code></p><p>引入后 就会自动拦截 /tablist 接口</p>`,13),e=[o];function c(i,l){return s(),a("div",null,e)}const r=n(p,[["render",c],["__file","mock.html.vue"]]);export{r as default};
