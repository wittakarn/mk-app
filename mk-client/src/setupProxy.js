const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    process.env.PUBLIC_URL + '/api',
    createProxyMiddleware({
       target: 'http://localhost:18080',
       changeOrigin: true
    })
  );
};
