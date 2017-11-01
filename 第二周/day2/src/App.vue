<template>
    <div>
        <div>hello2</div>
        <Home></Home>
        <Navs></Navs>
        <zf-button>点我</zf-button>
    </div>
</template>
<style>
    div{
        background: red;
    }
</style>
<script>
    import Home from "./Home.vue";
    import Navs from "./components/Navs.vue";
    export  default {
        components:{
            Home,
            Navs
        },
        mounted(){ //页面一加载时
            this.$http.get("/hello").then((res)=>console.log(res),err=>console.log(err));
        }
    }

</script>
