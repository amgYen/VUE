<template>
  <div class="page">
    <keep-alive> <!--若有缓存则请求缓存里的数据-->
      <router-view></router-view>
    </keep-alive>
    <Tab></Tab>
  </div>
</template>
<script>
  /*1.通过import引入 2.components注入(设置) 3.在模板里使用组件*/
  import Tab from "./base/Tab";
  export default {
    components:{
      Tab
    }
  }

</script>
