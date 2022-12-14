import{_ as n,p as a,q as e,a1 as s}from"./framework-2c66b6ab.js";const i="/BlogDocs/images/2019-02-20-3D-array.jpg",t={},c=s(`<h2 id="内置类型和函数" tabindex="-1"><a class="header-anchor" href="#内置类型和函数" aria-hidden="true">#</a> 内置类型和函数</h2><h3 id="值类型" tabindex="-1"><a class="header-anchor" href="#值类型" aria-hidden="true">#</a> 值类型</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    bool
    int(32 or 64), int8, int16, int32, int64
    uint(32 or 64), uint8(byte), uint16, uint32, uint64
    float32, float64
    string
    complex64, complex128
    array    -- 固定长度的数组
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="引用类型" tabindex="-1"><a class="header-anchor" href="#引用类型" aria-hidden="true">#</a> 引用类型</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    slice   -- 序列数组(最常用)
    map     -- 映射
    chan    -- 管道
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="内置函数" tabindex="-1"><a class="header-anchor" href="#内置函数" aria-hidden="true">#</a> 内置函数</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    append          -- 用来追加元素到数组、slice中,返回修改后的数组、slice
    close           -- 主要用来关闭channel
    delete            -- 从map中删除key对应的value
    panic            -- 停止常规的goroutine  （panic和recover：用来做错误处理）
    recover         -- 允许程序定义goroutine的panic动作
    real            -- 返回complex的实部   （complex、real imag：用于创建和操作复数）
    imag            -- 返回complex的虚部
    make            -- 用来分配内存，返回Type本身(只能应用于slice, map, channel)
    new                -- 用来分配内存，主要用来分配值类型，比如int、struct。返回指向Type的指针
    cap                -- capacity是容量的意思，用于返回某个类型的最大容量（只能用于切片和 map）
    copy            -- 用于复制和连接slice，返回复制的数目
    len                -- 来求长度，比如string、array、slice、map、channel ，返回长度
    print、println     -- 底层打印函数，在部署环境中建议使用 fmt 包
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="内置接口" tabindex="-1"><a class="header-anchor" href="#内置接口" aria-hidden="true">#</a> 内置接口</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> type error interface { //只要实现了Error()函数，返回值为String的都实现了err接口

            Error()    String

    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="数组" tabindex="-1"><a class="header-anchor" href="#数组" aria-hidden="true">#</a> 数组</h2><div class="custom-container warning"><p class="custom-container-title">注意</p><p>数组和切片是 Go 语言中常见的数据结构，很多刚刚使用 Go 的开发者往往会混淆这两个概念。数组作为最常见的集合在编程语言中是非常重要的，除了数组之外，Go 语言引入了另一个概念 — 切片，切片与数组有一些类似，但是它们的不同导致了使用上的巨大差别。我们在这一节中会从 Go 语言的编译期间运行时来介绍数组的底层实现原理，其中会包括数组的初始化、访问和赋值几种常见操作。</p></div><p>数组是由相同类型元素的集合组成的数据结构，计算机会为数组分配一块连续的内存来保存其中的元素,我们可以利用数组中元素的索引快速访问特定元素,常见数组大多数都是一维的线性数组,而多维数组在数值和图形计算领域却有比较常见的应用</p><p><img src="`+i+`" alt="数组"></p><h3 id="图3-1多维数组" tabindex="-1"><a class="header-anchor" href="#图3-1多维数组" aria-hidden="true">#</a> 图3-1多维数组🥶</h3><p>数组作为一种基本的数据类型,我们通常会从两个维度描述数组,也就是数组中储存的元素类型和数组最大能存储的元素个数,在GO语言中我们往往会使用如下所示方式来表示数组类型</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">]</span><span class="token builtin">int</span>
<span class="token punctuation">[</span><span class="token number">100</span><span class="token punctuation">]</span><span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>GO语言数组在初始化之后大小就无法改变,存储元素类型相同,但是大小不同的数组类型在Go语言看来也是完全不同的只有两个条件都相同才是同一类型.</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">NewArray</span><span class="token punctuation">(</span>elem <span class="token operator">*</span>Type<span class="token punctuation">,</span>bound <span class="token builtin">int64</span><span class="token punctuation">)</span> <span class="token operator">*</span>Type<span class="token punctuation">{</span>
  <span class="token keyword">if</span> bound <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token punctuation">{</span>
    <span class="token function">Fatalf</span><span class="token punctuation">(</span><span class="token string">&quot;NewArray : invalid bound %v&quot;</span><span class="token punctuation">,</span>bound<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  t <span class="token operator">:=</span> <span class="token function">New</span><span class="token punctuation">(</span>TARRAY<span class="token punctuation">)</span>
  t<span class="token punctuation">.</span>Extra <span class="token operator">=</span> <span class="token operator">&amp;</span>Array<span class="token punctuation">{</span>Elem<span class="token punctuation">:</span>elem<span class="token punctuation">,</span>Bound<span class="token punctuation">:</span>bound <span class="token punctuation">}</span>
  t<span class="token punctuation">.</span><span class="token function">SetNotInHeap</span><span class="token punctuation">(</span>elem<span class="token punctuation">.</span><span class="token function">NotInHeap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> t
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编译期间的数组类型是由上述的 <code>cmd/compile/internal/types.NewArray </code> 数生成的，该类型包含两个字段，分别是元素类型 Elem 和数组的大小 Bound，这两个字段共同构成了数组类型，而当前数组是否应该在堆栈中初始化也在编译期就确定了。</p><h2 id="切片" tabindex="-1"><a class="header-anchor" href="#切片" aria-hidden="true">#</a> 切片</h2><h2 id="哈希表" tabindex="-1"><a class="header-anchor" href="#哈希表" aria-hidden="true">#</a> 哈希表</h2><h2 id="字符串" tabindex="-1"><a class="header-anchor" href="#字符串" aria-hidden="true">#</a> 字符串</h2>`,22),l=[c];function d(r,p){return a(),e("div",null,l)}const u=n(t,[["render",d],["__file","数据结构.html.vue"]]);export{u as default};
