import{_ as e,p as i,q as n,a1 as l}from"./framework-2c66b6ab.js";const d={},s=l(`<h2 id="新建go-module项目" tabindex="-1"><a class="header-anchor" href="#新建go-module项目" aria-hidden="true">#</a> 新建go module项目</h2><ol><li>使用 <code>go env</code> 查看环境变量</li><li>使用 <code>go env -w GO111MODULE=on </code>开启go module</li><li>使用 <code>go mod init package</code> 初始化 go mod</li><li>使用 <code>go mod tidy</code> 添加需要用到但go.mod中查不到的模块,删除未使用的模块</li><li>使用 <code>go get -u github.com/kataras/iris@master</code> 安装模块</li><li>打包linux前</li><li>运行 <code>go env -w GOARCH=amd64</code></li><li>运行 <code>set GOOS=linux</code></li><li><code>go build</code></li></ol><p>ngix 常用配置</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>server {
    listen    91;
    server_name  www.envi.com;
 
    root  	/www/vue-website/environment/dist;
    index   index.html index.htm;
    
    # vue proxy 开发代理部署后 设置
    
    location /api {
        rewrite ^/api?(.*)$ $1 break;
        proxy_pass http://118.178.180.247:8089;
    }
    
    location / {
      allow  all;
      index  index.html index.htm;
      try_files $uri $uri/ /index.html; #解决页面刷新404问题
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),o=[s];function a(c,r){return i(),n("div",null,o)}const v=e(d,[["render",a],["__file","hellow.html.vue"]]);export{v as default};
