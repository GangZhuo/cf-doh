## cf-doh

Proxy [Google DoH](https://developers.google.com/speed/public-dns/docs/doh) by cloudflare workers.

### Step

1. Install Wrangler

Following [Cloudflare Workers Quick Start](https://developers.cloudflare.com/workers/quickstart/) .

2. Generate project by below command:

```
wrangler generate cf-doh https://github.com/GangZhuo/cf-doh
```

3. Change wrangler.toml file with your "name" and "account_id".

4. Publish project by below command:

```
wrangler publish
```

### Usaging

After publshed, there are two APIs:

* https://**.**.workers.dev/dns-query
* https://**.**.workers.dev/resolve?

See document at [Google DoH](https://developers.google.com/speed/public-dns/docs/doh) .

