const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/mk/api',
    createProxyMiddleware({
       target: 'http://localhost:18080',
       changeOrigin: true
    })
  );
};
