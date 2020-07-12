## cf-doh

Proxy [Google DoH](https://developers.google.com/speed/public-dns/docs/doh) by cloudflare workers.

可结合 https://github.com/GangZhuo/dohclient 使用。 

### Step

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

