const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        createProxyMiddleware('/admin', {
            target: 'http://localhost:1337/admin',
        })
    );
};
