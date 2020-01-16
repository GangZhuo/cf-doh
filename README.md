## cf-doh

Proxy [Google DoH](https://developers.google.com/speed/public-dns/docs/doh) by cloudflare workers.

#### Step

1. Install Wrangler

Fllow [Cloudflare Workers Quick Start](https://developers.cloudflare.com/workers/quickstart/) .

2. Deployment

Generating a project by running the following command:

```
wrangler generate cf-doh https://github.com/GangZhuo/cf-doh
```

Change wrangler.toml file with your "name" and "account_id":

Publish your project by running following command:

```
wrangler publish
```

3. Usaging

After publshed, there are two APIs:

* https://*.*.workers.dev/dns-query
* https://*.*.workers.dev/resolve?

See document at [Google DoH](https://developers.google.com/speed/public-dns/docs/doh) .

