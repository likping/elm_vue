/**
 * 开发环境和部署环境之间的切换
 * baseUrl:域名地址
 * routerMode:路由模式
 * imgBaseUrl:图片地址
 * 
 */
let baseUrl = "https://elm.cangdu.org";
let routerMode = "hash";
let imgBaseUrl = "";
//因为使用vue-cli 作为脚手架所以，不存在process.env.NODE_ENV=development变量所以，下面的代码不会执行
if (process.env.NODE_ENV == 'development') {
    imgBaseUrl = "https://elm.cangdu.org/img/";
   
} else if (process.env.NODE_ENV == "production") {
    baseUrl = "//elm.cangdu.org";
    imgBaseUrl = "//elm.cangdu.org/img/";
   
}
export {
    baseUrl,
    routerMode,
    imgBaseUrl
}
