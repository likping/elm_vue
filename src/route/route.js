import App from "../App.vue";
const home = r => require.ensure([], () => r(require("../page/home.vue")));
const login = r => require.ensure([], () => r(require("../page/login.vue")));
const city = r => require.ensure([], () => r(require("../page/city.vue")));
const msite = r => require.ensure([], () => r(require("../page/msite.vue")));
const search=r=>require.ensure([],()=>r(require("../page/search.vue")))
export default [{
    path: "/",
    component: App,
    children: [{
        path: '',
        redirect: "/home"
    }, {
        path: "/home",
        component: home,
        name: "home"
    }, {
        path: "/login",
        component: login,
        name: "login"
    }, {
        path: "/city/:name/:id",
        component: city,
        name: "city"
    }, {
        path: "/msite",
        component: msite,
        name: "msite"
        }, {
            path: "/search/:geohash",
            component: search,
            name:"search"
    }
    ]
}]