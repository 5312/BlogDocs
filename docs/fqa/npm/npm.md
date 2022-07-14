# npm 常见报错

### npm install 报错 10054
首先，造成这个错误很有可能是网络不稳定，连接超时导致的，

如果再次尝试后依然报错，可以执行下面的命令。

打开Git命令页面，执行git命令脚本：修改设置，解除ssl验证

```
git config --global http.sslVerify "false"
```

试了好几种方法安装依赖都报错, 然后百度的方案都说是代理的问题, 我试了几次发现都没用, 因为跟我遇到的这个问题都不是一回事. 
最后终于找到了最快捷准确的方案, 一行命令解决! 特此记录一下.

原因分析:

下载安装的依赖包太大，导致git请求超时，可以通过修改git http.postBuffer的大小来控制超时时间.

在黑窗口执行命令:

git config http.postBuffer 524288000

然后再 npm install 就好啦!!

### npm install 报错 Maximum call stack size exceeded


* 给npm升级
* 删除nodel module，重新执行npm install
* 清空缓存

```
npm install npm -g
npm cache clean --force

npm install
```


## cnpm


2022年6月起 cnpm 新镜像域名启用 [https://registry.npmmirror.com](https://registry.npmmirror.com)

老 [http://npm.taobao.org]() 和 [http://registry.npm.taobao.org]() 域名将于 2022 年 05 月 31 日零时起停止服务。

```
npm install -g cnpm --registry=https://registry.npmmirror.com
```


### cnpm i 报错 

#### TypeError: randomUUID is not a function:
 项目切换cnpm时 cnpm i 一直报错 在github官方仓库找到了答案：
 node 要更新到14.x最新版本。。。。[ github官方回答](https://github.com/cnpm/cnpm/issues/384)

使用nvm 管理node版本

 ```nvm install 14.19.3```
 
 ```nvm use 14.19.3```

