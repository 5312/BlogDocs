import{_ as e,p as a,q as r,a1 as d}from"./framework-2c66b6ab.js";const h={},n=d(`<h1 id="emacs-基本操作" tabindex="-1"><a class="header-anchor" href="#emacs-基本操作" aria-hidden="true">#</a> emacs 基本操作</h1><p>Emacs的三种基本对象是:帧(frame)、窗口(window)、缓冲区(buffer)。</p><h2 id="基本命令网址-https-w-lianfu-github-io-num26" tabindex="-1"><a class="header-anchor" href="#基本命令网址-https-w-lianfu-github-io-num26" aria-hidden="true">#</a> 基本命令网址 ()[https://w-lianfu.github.io/#num26]</h2><h3 id="spc-空格-emacs-风格-m-m" tabindex="-1"><a class="header-anchor" href="#spc-空格-emacs-风格-m-m" aria-hidden="true">#</a> ｓｐｃ　＝＝　空格 emacs 风格 &#39;~~&#39; M+ m</h3><h3 id="c-ctrl" tabindex="-1"><a class="header-anchor" href="#c-ctrl" aria-hidden="true">#</a> C == CTRL</h3><h3 id="m-esc" tabindex="-1"><a class="header-anchor" href="#m-esc" aria-hidden="true">#</a> M　＝＝　ＥＳＣ</h3><h1 id="退出emacs" tabindex="-1"><a class="header-anchor" href="#退出emacs" aria-hidden="true">#</a> 退出emacs</h1><pre><code>C+x C+c
</code></pre><h1 id="文件操作" tabindex="-1"><a class="header-anchor" href="#文件操作" aria-hidden="true">#</a> 文件操作</h1><pre><code>打开文件 C+x C+f

保存文件 C+x C+s

撤销 C-x u / q 退出
</code></pre><h1 id="跳转" tabindex="-1"><a class="header-anchor" href="#跳转" aria-hidden="true">#</a> 跳转</h1><pre><code>M + m j l &#39;行号&#39;
M + m j j &#39;str 单词&#39;
</code></pre><h1 id="treemacs" tabindex="-1"><a class="header-anchor" href="#treemacs" aria-hidden="true">#</a> Treemacs</h1><blockquote><p>Treemacs是在屏幕左侧出现，便于用户进行文件管理的侧边栏。</p></blockquote><h2 id="节点选择" tabindex="-1"><a class="header-anchor" href="#节点选择" aria-hidden="true">#</a> 节点选择</h2><pre><code>j/k：光标下移/上移
u：如果当前树上有选中文件的父节点，则跳转过去
h：将当前树的根节点向上移动一级
l：将当前树的根节点切换到选中文件
</code></pre><h2 id="节点打开" tabindex="-1"><a class="header-anchor" href="#节点打开" aria-hidden="true">#</a> 节点打开</h2><pre><code>tab：展开/闭合目录或者文件
return：展开/闭合目录或者打开文件
o h：水平新建屏幕打开文件，用dired打开目录
o v：垂直新建屏幕打开文件，用dired打开目录
o x：根据文件的扩展名使用系统应用打开文件
</code></pre><h2 id="节点操作" tabindex="-1"><a class="header-anchor" href="#节点操作" aria-hidden="true">#</a> 节点操作</h2><pre><code>SPC p t 打开
M+m 0 打开/切入

c f 新建文件
c d 新建文件夹
R 重命名操作
</code></pre><h2 id="显示选择" tabindex="-1"><a class="header-anchor" href="#显示选择" aria-hidden="true">#</a> 显示选择</h2><pre><code>g r：刷新目录
w：重设宽度
y y：拷贝当前文件路径
y r：拷贝当前根目录路径
s：按照特殊标准重新排列文件
</code></pre><h2 id="窗口操作" tabindex="-1"><a class="header-anchor" href="#窗口操作" aria-hidden="true">#</a> 窗口操作</h2><pre><code>删除 SPC w d 

切换 SPC 1/2/3/4
</code></pre><h2 id="buffer操作" tabindex="-1"><a class="header-anchor" href="#buffer操作" aria-hidden="true">#</a> buffer操作</h2><pre><code>C+x K 关闭当前 buffer

左侧树 M+x treemacs-select-window /or/ M + m 0 

打开终端 M+ ! // 暂时无法运行命令 

M + b d	删除当前buffer
</code></pre><h2 id="编辑模式" tabindex="-1"><a class="header-anchor" href="#编辑模式" aria-hidden="true">#</a> 编辑模式</h2><pre><code>切换 C-z  // buffer颜色 黄色=vim=SPC 蓝色=emacs=M-m
</code></pre><h2 id="配置文件" tabindex="-1"><a class="header-anchor" href="#配置文件" aria-hidden="true">#</a> 配置文件</h2><pre><code>SPC f e d 打开配置文件
SPC f e R 保存并重载配置文件
</code></pre>`,30),c=[n];function i(s,t){return a(),r("div",null,c)}const f=e(h,[["render",i],["__file","emacs基本操作.html.vue"]]);export{f as default};
