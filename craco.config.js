module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'http://47.104.77.198:1368',
                changeOrigin: true,
                pathRewrite: {
                    "^/api": ''
                }
            }
        },
    },
}