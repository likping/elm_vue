import Vue from 'vue'
import App from './App.vue'
import routes from './route/route'
import store from './store/store'
import "./config/rem.js";
import VueRouter from "vue-router";
Vue.use(VueRouter);
let router = new VueRouter({
  routes,
  mode: "hash",
});
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
