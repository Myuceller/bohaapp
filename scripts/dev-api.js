const http = require('http');
const path = require('path');
const { URL } = require('url');

require('dotenv').config({ path: path.join(__dirname, '..', '.env.local') });
require('dotenv').config({ path: path.join(__dirname, '..', '.env') });

const routes = [
  { path: '/api/games/page', handler: require('../api/games/page') },
  { path: '/api/games/one', handler: require('../api/games/one') },
  { path: '/api/games/some', handler: require('../api/games/some') },
  { path: '/api/games/all', handler: require('../api/games/all') },
  { path: '/api/games', handler: require('../api/games') },
  { path: '/api/curation/name', handler: require('../api/curation/name') },
  { path: '/api/curation', handler: require('../api/curation') }
];

function findRoute(pathname) {
  return routes.find((r) => r.path === pathname);
}

function buildReq(req, urlObj, body) {
  const query = {};
  urlObj.searchParams.forEach((value, key) => {
    if (query[key]) {
      if (Array.isArray(query[key])) query[key].push(value);
      else query[key] = [query[key], value];
    } else {
      query[key] = value;
    }
  });

  let parsedBody = body;
  const contentType = req.headers['content-type'] || '';
  if (contentType.includes('application/json')) {
    try {
      parsedBody = body ? JSON.parse(body) : {};
    } catch (err) {
      parsedBody = {};
    }
  }

  return Object.assign(req, {
    query,
    body: parsedBody
  });
}

const server = http.createServer((req, res) => {
  const urlObj = new URL(req.url, 'http://localhost');
  const route = findRoute(urlObj.pathname);

  if (!route) {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ message: 'Not Found' }));
    return;
  }

  let body = '';
  req.on('data', (chunk) => {
    body += chunk;
  });
  req.on('end', async () => {
    try {
      const apiReq = buildReq(req, urlObj, body);
      const apiRes = Object.assign(res, {
        status(code) {
          this.statusCode = code;
          return this;
        },
        json(payload) {
          if (!this.getHeader('Content-Type')) {
            this.setHeader('Content-Type', 'application/json');
          }
          this.end(JSON.stringify(payload));
        }
      });
      await route.handler(apiReq, apiRes);
    } catch (err) {
      res.statusCode = 500;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ message: 'Internal Server Error', error: String(err) }));
    }
  });
});

const port = process.env.API_PORT ? Number(process.env.API_PORT) : 3000;
server.listen(port, () => {
  console.log(`API dev server running on http://localhost:${port}`);
});
