import Vue from 'vue';
import App from './App.vue';
import VueRouter from  "vue-router";
Vue.use(VueRouter); //路由暴露在全局下,在其他组件里才能用
import Button from './components/Button';
Vue.use(Button); //自定义封装了一个全局组件,在任何组件里都可以用

import axios from 'axios';
Vue.prototype.$http = axios;

import routes from './routes.js';
let router = new VueRouter(routes);

let vm = new Vue({
    router,
    el:"#app",
     ...App
    // render:(h)=>h(App) 把根组件App放入根DOM元素app里
})
