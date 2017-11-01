import Route1 from  "./components/Route1.vue";
import Route2 from  "./components/Route2.vue";
export default {
    mode:"history", //改变成history模式,在地址里则不会有#
    routes:[
        {path:"/home",component:Route1},
        {path:"/list",component:Route2},
        {path:"*",redirect:"/home"}
    ]
}