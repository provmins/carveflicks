const { createProxyMiddleware } = require('http-proxy-middleware');

const API_URL = process.env.REACT_APP_TMDB_API_URL;
const SERVER_URL = process.env.REACT_APP_SERVER_URL;

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: API_URL,
      changeOrigin: true
    })
  );
  app.use(
    '/login',
    createProxyMiddleware({
      target: SERVER_URL,
      changeOrigin: true
    })
  );
  app.use(
    '/register',
    createProxyMiddleware({
      target: SERVER_URL,
      changeOrigin: true
    })
  );
  app.use(
    '/cinema',
    createProxyMiddleware({
      target: SERVER_URL,
      changeOrigin: true
    })
  );
};
