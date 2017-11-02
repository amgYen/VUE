import Vue from "vue";
import App from "./App";
import './common/common.less';
import router from "./router";
new Vue({
  router,
  el:"#app",
  ...App
})

