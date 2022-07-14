import{_ as n,o as s,c as a,a as t}from"./app.dd7ce90b.js";const e={},p=t(`<h1 id="\u4F7F\u7528gorm-\u64CD\u4F5C\u6570\u5E93" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528gorm-\u64CD\u4F5C\u6570\u5E93" aria-hidden="true">#</a> \u4F7F\u7528gorm \u64CD\u4F5C\u6570\u5E93</h1><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>go get -u gorm.io/gorm
go get -u gorm.io/driver/sqlite
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u8FDE\u63A5mysql" tabindex="-1"><a class="header-anchor" href="#\u8FDE\u63A5mysql" aria-hidden="true">#</a> \u8FDE\u63A5MySQL</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">import</span> <span class="token punctuation">(</span>
  <span class="token string">&quot;gorm.io/driver/mysql&quot;</span>
  <span class="token string">&quot;gorm.io/gorm&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// user --\u7528\u6237\u540D</span>
  <span class="token comment">// pass -- \u5BC6\u7801</span>
  <span class="token comment">// @tcp() -- \u62EC\u53F7\u91CC\u586B\u5199 \u8FDE\u63A5\u5730\u5740</span>
  <span class="token comment">// dbname \u6570\u636E\u5E93\u540D</span>
  dsn <span class="token operator">:=</span> <span class="token string">&quot;user:pass@tcp(127.0.0.1:3306)/dbname?charset=utf8mb4&amp;parseTime=True&amp;loc=Local&quot;</span>

  db<span class="token punctuation">,</span> err <span class="token operator">:=</span> gorm<span class="token punctuation">.</span><span class="token function">Open</span><span class="token punctuation">(</span>mysql<span class="token punctuation">.</span><span class="token function">Open</span><span class="token punctuation">(</span>dsn<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>gorm<span class="token punctuation">.</span>Config<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Print</span><span class="token punctuation">(</span><span class="token string">&quot;\\n&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;db&quot;</span><span class="token punctuation">,</span> db<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Print</span><span class="token punctuation">(</span><span class="token string">&quot;\\n&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;-----------------&quot;</span><span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Print</span><span class="token punctuation">(</span><span class="token string">&quot;\\n&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;err&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Print</span><span class="token punctuation">(</span><span class="token string">&quot;\\n&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;\u94FE\u63A5\u6570\u636E\u5E93\u6210\u529F&quot;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// \u8FDE\u63A5\u6C60</span>
  sqlDB<span class="token punctuation">,</span> err <span class="token operator">:=</span> db<span class="token punctuation">.</span><span class="token function">DB</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token comment">// \u5173\u95ED\u8FDE\u63A5</span>
  <span class="token keyword">defer</span> sqlDB<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),o=[p];function c(i,l){return s(),a("div",null,o)}var r=n(e,[["render",c],["__file","datasource.html.vue"]]);export{r as default};
