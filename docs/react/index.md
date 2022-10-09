## react

## 使用 porxy 代理后无法设置 cookie 问题

```ts

  proxy: {
    // 页面
    '/xd': {
      target: 'http://snce.xidian.edu.cn/',
      changeOrigin: true,
      pathRewrite: { '^/xd': '' },
      onProxyRes: function (proxyRes, req, res) {
        // 取到cookie
        const cookies = proxyRes.headers['set-cookie'];
        const cookiePathRegex = /Path=\/learning\/;/;
        let newCookie;
        // 修改cookie Path
        if (cookies) {
          newCookie = cookies.map((cookie) => {
            console.log(cookiePathRegex.test(cookie));
            if (cookiePathRegex.test(cookie)) {
              // 替换
              return cookie.replace(cookiePathRegex, 'path=/;');
            }
            return cookie;
          });
          // 替换set-cookie
          delete proxyRes.headers['set-cookie'];
          proxyRes.headers['set-cookie'] = newCookie;
          console.log(proxyRes.headers['set-cookie']);
        }
      },
    },
  },

```
