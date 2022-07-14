## 新建go module项目

 1. 使用 `go env` 查看环境变量 
 2. 使用 `go env -w GO111MODULE=on `开启go module
 3. 使用 `go mod init package` 初始化 go mod
 4. 使用 `go mod tidy` 添加需要用到但go.mod中查不到的模块,删除未使用的模块
 5. 使用 `go get -u github.com/kataras/iris@master` 安装模块
 6. 打包linux前
 7. 运行 `go env -w GOARCH=amd64`
 8. 运行 `set GOOS=linux`
 9. `go build`


ngix 常用配置

```
server {
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
```