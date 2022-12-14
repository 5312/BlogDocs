import{_ as e,p as t,q as d,a1 as i}from"./framework-2c66b6ab.js";const a={},n=i(`<h2 id="来历" tabindex="-1"><a class="header-anchor" href="#来历" aria-hidden="true">#</a> 来历</h2><p>很久以前，有一个IT公司，这公司有个传统，允许员工拥有20%自由时间来开发实验性项目。在2007的某一天，公司的几个大牛，正在用c++开发一些比较繁琐但是核心的工作，主要包括庞大的分布式集群，大牛觉得很闹心，后来c++委员会来他们公司演讲，说c++将要添加大概35种新特性。这几个大牛的其中一个人，名为：Rob Pike，听后心中一万个xxx飘过，“c++特性还不够多吗？简化c++应该更有成就感吧”。于是乎，Rob Pike和其他几个大牛讨论了一下，怎么解决这个问题，过了一会，Rob Pike说要不我们自己搞个语言吧，名字叫“go”，非常简短，容易拼写。其他几位大牛就说好啊，然后他们找了块白板，在上面写下希望能有哪些功能（详见文尾）。接下来的时间里，大牛们开心的讨论设计这门语言的特性，经过漫长的岁月，他们决定，以c语言为原型，以及借鉴其他语言的一些特性，来解放程序员，解放自己，然后在2009年，go语言诞生。</p><h2 id="思想" tabindex="-1"><a class="header-anchor" href="#思想" aria-hidden="true">#</a> 思想</h2><p>Less can be more 大道至简,小而蕴真 让事情变得复杂很容易，让事情变得简单才难 深刻的工程文化</p><h2 id="优点" tabindex="-1"><a class="header-anchor" href="#优点" aria-hidden="true">#</a> 优点</h2><p>自带gc。</p><p>静态编译，编译好后，扔服务器直接运行。</p><p>简单的思想，没有继承，多态，类等。</p><p>丰富的库和详细的开发文档。</p><p>语法层支持并发，和拥有同步并发的channel类型，使并发开发变得非常方便。</p><p>简洁的语法，提高开发效率，同时提高代码的阅读性和可维护性。</p><p>超级简单的交叉编译，仅需更改环境变量。</p><p>Go 语言是谷歌 2009 年首次推出并在 2012 年正式发布的一种全新的编程语言，可以在不损失应用程序性能的情况下降低代码的复杂性。谷歌首席软件工程师罗布派克(Rob Pike)说：我们之所以开发 Go，是因为过去10多年间软件开发的难度令人沮丧。Google 对 Go 寄予厚望，其设计是让软件充分发挥多核心处理器同步多工的优点，并可解决面向对象程序设计的麻烦。它具有现代的程序语言特色，如垃圾回收，帮助开发者处理琐碎但重要的内存管理问题。Go 的速度也非常快，几乎和 C 或 C++ 程序一样快，且能够快速开发应用程序。</p><h2 id="go语言的主要特征" tabindex="-1"><a class="header-anchor" href="#go语言的主要特征" aria-hidden="true">#</a> Go语言的主要特征</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    1.自动立即回收。
    2.更丰富的内置类型。
    3.函数多返回值。
    4.错误处理。
    5.匿名函数和闭包。
    6.类型和接口。
    7.并发编程。
    8.反射。
    9.语言交互性。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="golang-文件名" tabindex="-1"><a class="header-anchor" href="#golang-文件名" aria-hidden="true">#</a> Golang 文件名</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> 所有的go源码都是以 &quot;.go&quot; 结尾 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="go语言命名" tabindex="-1"><a class="header-anchor" href="#go语言命名" aria-hidden="true">#</a> Go语言命名</h2><ol><li>Go的函数,变量,常量,自定义类型,包(package) 的命名方式遵循依以下规则</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1) 首字符可以是任意的Unicode 字符或者下划线
2) 剩余字符可以是Unicode 字符,下划线,数字
3) 字符长度不限
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>Go 只有25个关键字</li></ol><table><thead><tr><th>-</th><th>-</th><th>-</th><th>-</th><th>-</th></tr></thead><tbody><tr><td>break</td><td>default</td><td>func</td><td>interface</td><td>select</td></tr><tr><td>case</td><td>defar</td><td>go</td><td>map</td><td>struct</td></tr><tr><td>chab</td><td>else</td><td>goto</td><td>package</td><td>switch</td></tr><tr><td>const</td><td>fallthrough</td><td>if</td><td>range</td><td>type</td></tr><tr><td>continue</td><td>for</td><td>import</td><td>return</td><td>var</td></tr></tbody></table><ol start="4"><li>Go还有37个保留字</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>  Constants:    true  false  iota  nil

  Types:        int  int8  int16  int32  int64  
                uint  uint8  uint16  uint32  uint64  uintptr
                float32  float64  complex128  complex64
                bool  byte  rune  string  error

  Functions:    make  len  cap  new  append  copy  close  delete
                complex  real  imag
                panic  recover
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="6"><li>可见性</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>  1) 声明在函数内部,是函数的本地值,类似private
  2) 声明在函数外部,是对当前包可见(包内所有 .go 文件都可见 ) 的全局值,类似protect
  3) 声明在函数外部且首字母大写是所有包可见的全局值,类似public
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="7"><li>Go语言声明 有四种主要声明方式</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> var(声明变量)   ,const (声明常量) ,  type (声明类型) ,  func (声明函数).
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,28),l=[n];function s(r,c){return t(),d("div",null,l)}const u=e(a,[["render",s],["__file","GO语言的主要特征.html.vue"]]);export{u as default};
