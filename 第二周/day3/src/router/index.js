import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
import Home from "../components/Home";
import List from "../components/List";
import Add from "../components/Add";
import Update from "../components/Update";
export default  new VueRouter({
  routes:[
    {path:"/home",component:Home},
    {path:"/list",component:List},
    {path:"/add",component:Add},
    {path:"/update/:nid",component:Update,name:"update"},
    {path:"*",redirect:"/home"}
  ]
})
