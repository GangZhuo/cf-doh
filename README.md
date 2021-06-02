## cf-doh

Proxy [Google DoH](https://developers.google.com/speed/public-dns/docs/doh) by cloudflare workers.

可结合 https://github.com/GangZhuo/dohclient 使用。 

### 手动部署

1. 注册 cloudflare 账号
2. 打开 https://workers.cloudflare.com/ ，并登录
3. 点击 Create a Worker 按钮
4. 把 https://github.com/GangZhuo/cf-doh/blob/master/dist/cf-doh-min.js 中的内容复制到左侧脚本编辑框中
5. 点击 Save and Deploy 按钮
6. 使用浏览器浏览新部署的站点，应能显示 Hello worker! 字符

### Deploy by Wrangler

1. Install Wrangler

Following [Cloudflare Workers Quick Start](https://developers.cloudflare.com/workers/quickstart/) .

2. Generate project by below command:

```
wrangler generate cf-doh https://github.com/GangZhuo/cf-doh
```

3. Change wrangler.toml file with your "name" and "account_id".

The name field in this config file, which will map to your script’s deploy name 
(e.g. cf-doh.mysubdomain.workers.dev).

The account_id field can be find in your dashboard page.

4. Publish project by below command:

```
wrangler publish
```

### Usaging

After publshed, there are two APIs:

* https://$yourName.$yourSubDommain.workers.dev/dns-query
* https://$yourName.$yourSubDommain.workers.dev/resolve?

See document at [Google DoH](https://developers.google.com/speed/public-dns/docs/doh) .

