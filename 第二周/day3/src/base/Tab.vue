<template>

  <div class="tab">
    <router-link to="/home">
      <i class="iconfont icon-shouye"></i>
      <span>首页</span>
    </router-link>
    <router-link to="/list">
      <i class="iconfont icon-liebiaoyetuanqi"></i>
      <span>列表</span>
    </router-link>
    <router-link to="/add">
      <i class="iconfont icon-icon02"></i>
      <span>添加</span>
    </router-link>

  </div>

</template>
<style  lang="less" scoped>
    .tab{
      position: fixed;
      height: 50px;
      background: #fff;
      bottom:0;
      left:0;
      width: 100%;
      border-top:1px solid #ccc;
      display: flex;
      text-align:center;
     a{
       display: flex;
       flex-direction: column;
       justify-content: center;
       flex:1;
       font-size: 16px;
     }
      .router-link-active{
        color: red;
      }
    }

</style>
