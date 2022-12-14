import{_ as e,p as i,q as n,a1 as a}from"./framework-2c66b6ab.js";const t={},s=a(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>warning: ----------------- SECURITY WARNING ----------------
warning: | TLS certificate verification has been disabled! |
warning: ---------------------------------------------------
warning: HTTPS connections may not be secure. See https://aka.ms/gcmcore-tlsverify for more information.


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="查看https-aka-ms-gcmcore-tlsverify后-发现应该是缺少了安全认证-所以解决方法是重启安全认证。" tabindex="-1"><a class="header-anchor" href="#查看https-aka-ms-gcmcore-tlsverify后-发现应该是缺少了安全认证-所以解决方法是重启安全认证。" aria-hidden="true">#</a> 查看https://aka.ms/gcmcore-tlsverify后，发现应该是缺少了安全认证，所以解决方法是重启安全认证。</h2><p><code>git config --global http.sslVerify true</code></p>`,3),r=[s];function c(d,l){return i(),n("div",null,r)}const m=e(t,[["render",c],["__file","git.html.vue"]]);export{m as default};
