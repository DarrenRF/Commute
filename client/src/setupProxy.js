const { createProxyMiddleware } = require('http-proxy-middleware');

<<<<<<< HEAD
module.exports = function (app) {
  app.use(
    createProxyMiddleware('/api/**', { target: 'http://localhost:5000' })
  );
};
=======
module.exports = function(app) {
  app.use(
    createProxyMiddleware('/api/**', { target: 'http://localhost:5000' }),
  );
}
>>>>>>> d0e47e5fa7c2eb0f21d2a91a010d138d7d0f5388
