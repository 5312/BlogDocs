import{_ as e,o as i,c as n,a as l}from"./app.dd7ce90b.js";const d={},s=l(`<h2 id="\u65B0\u5EFAgo-module\u9879\u76EE" tabindex="-1"><a class="header-anchor" href="#\u65B0\u5EFAgo-module\u9879\u76EE" aria-hidden="true">#</a> \u65B0\u5EFAgo module\u9879\u76EE</h2><ol><li>\u4F7F\u7528 <code>go env</code> \u67E5\u770B\u73AF\u5883\u53D8\u91CF</li><li>\u4F7F\u7528 <code>go env -w GO111MODULE=on </code>\u5F00\u542Fgo module</li><li>\u4F7F\u7528 <code>go mod init package</code> \u521D\u59CB\u5316 go mod</li><li>\u4F7F\u7528 <code>go mod tidy</code> \u6DFB\u52A0\u9700\u8981\u7528\u5230\u4F46go.mod\u4E2D\u67E5\u4E0D\u5230\u7684\u6A21\u5757,\u5220\u9664\u672A\u4F7F\u7528\u7684\u6A21\u5757</li><li>\u4F7F\u7528 <code>go get -u github.com/kataras/iris@master</code> \u5B89\u88C5\u6A21\u5757</li><li>\u6253\u5305linux\u524D</li><li>\u8FD0\u884C <code>go env -w GOARCH=amd64</code></li><li>\u8FD0\u884C <code>set GOOS=linux</code></li><li><code>go build</code></li></ol><p>ngix \u5E38\u7528\u914D\u7F6E</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>server {
    listen    91;
    server_name  www.envi.com;
 
    root  	/www/vue-website/environment/dist;
    index   index.html index.htm;
    
    # vue proxy \u5F00\u53D1\u4EE3\u7406\u90E8\u7F72\u540E \u8BBE\u7F6E
    
    location /api {
        rewrite ^/api?(.*)$ $1 break;
        proxy_pass http://118.178.180.247:8089;
    }
    
    location / {
      allow  all;
      index  index.html index.htm;
      try_files $uri $uri/ /index.html; #\u89E3\u51B3\u9875\u9762\u5237\u65B0404\u95EE\u9898
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),o=[s];function a(c,r){return i(),n("div",null,o)}var t=e(d,[["render",a],["__file","hellow.html.vue"]]);export{t as default};
