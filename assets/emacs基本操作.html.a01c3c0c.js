import{_ as e,o as a,c as r,a as d}from"./app.dd7ce90b.js";const h={},n=d(`<h1 id="emacs-\u57FA\u672C\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#emacs-\u57FA\u672C\u64CD\u4F5C" aria-hidden="true">#</a> emacs \u57FA\u672C\u64CD\u4F5C</h1><p>Emacs\u7684\u4E09\u79CD\u57FA\u672C\u5BF9\u8C61\u662F:\u5E27(frame)\u3001\u7A97\u53E3(window)\u3001\u7F13\u51B2\u533A(buffer)\u3002</p><h2 id="\u57FA\u672C\u547D\u4EE4\u7F51\u5740-https-w-lianfu-github-io-num26" tabindex="-1"><a class="header-anchor" href="#\u57FA\u672C\u547D\u4EE4\u7F51\u5740-https-w-lianfu-github-io-num26" aria-hidden="true">#</a> \u57FA\u672C\u547D\u4EE4\u7F51\u5740 ()[https://w-lianfu.github.io/#num26]</h2><h3 id="spc-\u7A7A\u683C-emacs-\u98CE\u683C-m-m" tabindex="-1"><a class="header-anchor" href="#spc-\u7A7A\u683C-emacs-\u98CE\u683C-m-m" aria-hidden="true">#</a> \uFF53\uFF50\uFF43\u3000\uFF1D\uFF1D\u3000\u7A7A\u683C emacs \u98CE\u683C &#39;~~&#39; M+ m</h3><h3 id="c-ctrl" tabindex="-1"><a class="header-anchor" href="#c-ctrl" aria-hidden="true">#</a> C == CTRL</h3><h3 id="m-esc" tabindex="-1"><a class="header-anchor" href="#m-esc" aria-hidden="true">#</a> M\u3000\uFF1D\uFF1D\u3000\uFF25\uFF33\uFF23</h3><h1 id="\u9000\u51FAemacs" tabindex="-1"><a class="header-anchor" href="#\u9000\u51FAemacs" aria-hidden="true">#</a> \u9000\u51FAemacs</h1><pre><code>C+x C+c
</code></pre><h1 id="\u6587\u4EF6\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#\u6587\u4EF6\u64CD\u4F5C" aria-hidden="true">#</a> \u6587\u4EF6\u64CD\u4F5C</h1><pre><code>\u6253\u5F00\u6587\u4EF6 C+x C+f

\u4FDD\u5B58\u6587\u4EF6 C+x C+s

\u64A4\u9500 C-x u / q \u9000\u51FA
</code></pre><h1 id="\u8DF3\u8F6C" tabindex="-1"><a class="header-anchor" href="#\u8DF3\u8F6C" aria-hidden="true">#</a> \u8DF3\u8F6C</h1><pre><code>M + m j l &#39;\u884C\u53F7&#39;
M + m j j &#39;str \u5355\u8BCD&#39;
</code></pre><h1 id="treemacs" tabindex="-1"><a class="header-anchor" href="#treemacs" aria-hidden="true">#</a> Treemacs</h1><blockquote><p>Treemacs\u662F\u5728\u5C4F\u5E55\u5DE6\u4FA7\u51FA\u73B0\uFF0C\u4FBF\u4E8E\u7528\u6237\u8FDB\u884C\u6587\u4EF6\u7BA1\u7406\u7684\u4FA7\u8FB9\u680F\u3002</p></blockquote><h2 id="\u8282\u70B9\u9009\u62E9" tabindex="-1"><a class="header-anchor" href="#\u8282\u70B9\u9009\u62E9" aria-hidden="true">#</a> \u8282\u70B9\u9009\u62E9</h2><pre><code>j/k\uFF1A\u5149\u6807\u4E0B\u79FB/\u4E0A\u79FB
u\uFF1A\u5982\u679C\u5F53\u524D\u6811\u4E0A\u6709\u9009\u4E2D\u6587\u4EF6\u7684\u7236\u8282\u70B9\uFF0C\u5219\u8DF3\u8F6C\u8FC7\u53BB
h\uFF1A\u5C06\u5F53\u524D\u6811\u7684\u6839\u8282\u70B9\u5411\u4E0A\u79FB\u52A8\u4E00\u7EA7
l\uFF1A\u5C06\u5F53\u524D\u6811\u7684\u6839\u8282\u70B9\u5207\u6362\u5230\u9009\u4E2D\u6587\u4EF6
</code></pre><h2 id="\u8282\u70B9\u6253\u5F00" tabindex="-1"><a class="header-anchor" href="#\u8282\u70B9\u6253\u5F00" aria-hidden="true">#</a> \u8282\u70B9\u6253\u5F00</h2><pre><code>tab\uFF1A\u5C55\u5F00/\u95ED\u5408\u76EE\u5F55\u6216\u8005\u6587\u4EF6
return\uFF1A\u5C55\u5F00/\u95ED\u5408\u76EE\u5F55\u6216\u8005\u6253\u5F00\u6587\u4EF6
o h\uFF1A\u6C34\u5E73\u65B0\u5EFA\u5C4F\u5E55\u6253\u5F00\u6587\u4EF6\uFF0C\u7528dired\u6253\u5F00\u76EE\u5F55
o v\uFF1A\u5782\u76F4\u65B0\u5EFA\u5C4F\u5E55\u6253\u5F00\u6587\u4EF6\uFF0C\u7528dired\u6253\u5F00\u76EE\u5F55
o x\uFF1A\u6839\u636E\u6587\u4EF6\u7684\u6269\u5C55\u540D\u4F7F\u7528\u7CFB\u7EDF\u5E94\u7528\u6253\u5F00\u6587\u4EF6
</code></pre><h2 id="\u8282\u70B9\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#\u8282\u70B9\u64CD\u4F5C" aria-hidden="true">#</a> \u8282\u70B9\u64CD\u4F5C</h2><pre><code>SPC p t \u6253\u5F00
M+m 0 \u6253\u5F00/\u5207\u5165

c f \u65B0\u5EFA\u6587\u4EF6
c d \u65B0\u5EFA\u6587\u4EF6\u5939
R \u91CD\u547D\u540D\u64CD\u4F5C
</code></pre><h2 id="\u663E\u793A\u9009\u62E9" tabindex="-1"><a class="header-anchor" href="#\u663E\u793A\u9009\u62E9" aria-hidden="true">#</a> \u663E\u793A\u9009\u62E9</h2><pre><code>g r\uFF1A\u5237\u65B0\u76EE\u5F55
w\uFF1A\u91CD\u8BBE\u5BBD\u5EA6
y y\uFF1A\u62F7\u8D1D\u5F53\u524D\u6587\u4EF6\u8DEF\u5F84
y r\uFF1A\u62F7\u8D1D\u5F53\u524D\u6839\u76EE\u5F55\u8DEF\u5F84
s\uFF1A\u6309\u7167\u7279\u6B8A\u6807\u51C6\u91CD\u65B0\u6392\u5217\u6587\u4EF6
</code></pre><h2 id="\u7A97\u53E3\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#\u7A97\u53E3\u64CD\u4F5C" aria-hidden="true">#</a> \u7A97\u53E3\u64CD\u4F5C</h2><pre><code>\u5220\u9664 SPC w d 

\u5207\u6362 SPC 1/2/3/4
</code></pre><h2 id="buffer\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#buffer\u64CD\u4F5C" aria-hidden="true">#</a> buffer\u64CD\u4F5C</h2><pre><code>C+x K \u5173\u95ED\u5F53\u524D buffer

\u5DE6\u4FA7\u6811 M+x treemacs-select-window /or/ M + m 0 

\u6253\u5F00\u7EC8\u7AEF M+ ! // \u6682\u65F6\u65E0\u6CD5\u8FD0\u884C\u547D\u4EE4 

M + b d	\u5220\u9664\u5F53\u524Dbuffer
</code></pre><h2 id="\u7F16\u8F91\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u7F16\u8F91\u6A21\u5F0F" aria-hidden="true">#</a> \u7F16\u8F91\u6A21\u5F0F</h2><pre><code>\u5207\u6362 C-z  // buffer\u989C\u8272 \u9EC4\u8272=vim=SPC \u84DD\u8272=emacs=M-m
</code></pre><h2 id="\u914D\u7F6E\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u6587\u4EF6" aria-hidden="true">#</a> \u914D\u7F6E\u6587\u4EF6</h2><pre><code>SPC f e d \u6253\u5F00\u914D\u7F6E\u6587\u4EF6
SPC f e R \u4FDD\u5B58\u5E76\u91CD\u8F7D\u914D\u7F6E\u6587\u4EF6
</code></pre>`,30),c=[n];function i(s,t){return a(),r("div",null,c)}var f=e(h,[["render",i],["__file","emacs\u57FA\u672C\u64CD\u4F5C.html.vue"]]);export{f as default};
