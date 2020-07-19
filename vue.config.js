module.exports = {
    devServer: {
        proxy: {
            "/api": {
                target: "http://112.124.19.202:8081/api",
                ws: true,
                changeOrigin: true
            },
            "imgs": {
                target: "http://192.168.1.104:8080/imgs",
                ws: true,
                changeOrigin: true
            }
        }
    }
}