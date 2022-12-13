```
warning: ----------------- SECURITY WARNING ----------------
warning: | TLS certificate verification has been disabled! |
warning: ---------------------------------------------------
warning: HTTPS connections may not be secure. See https://aka.ms/gcmcore-tlsverify for more information.


```

## 查看https://aka.ms/gcmcore-tlsverify后，发现应该是缺少了安全认证，所以解决方法是重启安全认证。

`git config --global http.sslVerify true`
