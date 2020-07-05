const Router = require('./router')

const URL_GOOGLE_RESOLVE = 'https://dns.google/resolve';
const URL_GOOGLE_DNS_QUERY = 'https://dns.google/dns-query';

/**
 * Example of how router can be used in an application
 *  */
addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request))
})

function resolve(request) {
	const params = (new URL(request.url)).searchParams;
	let url = URL_GOOGLE_RESOLVE;
	let arr = [];
	for (let [k,v] of params) {
		arr.push(`${k}=${encodeURIComponent(v)}`);
	}
	url += '?';
	url += arr.join('&');
    return fetch(new Request(url, {
		method: 'GET',
		redirect: 'manual',
	}));
}

function dns_query_get(request) {
    const params = (new URL(request.url)).searchParams;
	let url = URL_GOOGLE_DNS_QUERY;
	let arr = [];
	for (let [k,v] of params) {
		arr.push(`${k}=${encodeURIComponent(v)}`);
	}
	url += '?';
	url += arr.join('&');
    return fetch(new Request(url, {
		method: 'GET',
		redirect: 'manual',
	}));
}

function dns_query_post(request) {
	const body = request.body;
	let url = URL_GOOGLE_DNS_QUERY;
    return fetch(new Request(url, {
		method: 'POST',
		redirect: 'manual',
		headers: request.headers,
		body: request.body
	}));
}

async function handleRequest(request) {
    const r = new Router()
    r.get('/resolve', req => resolve(req))
    r.get('/dns-query', req => dns_query_get(req))
    r.post('/dns-query', req => dns_query_post(req))
    r.head('/dns-query', req => new Response('Bad Request', {
		status: 400,
		statusText: 'Bad Request',
		headers: {
			'content-type': 'text/plain',
		},
	}));
    r.get('/', () => new Response('Hello worker!'))

    const resp = await r.route(request)
    return resp
}
