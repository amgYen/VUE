<template>
  <div>
      <button @click="fn"><slot></slot></button>
  </div>
</template>
<style>
    button{
        width: 50px;
        height: 50px;
        line-height: 50px;
        background: blue;
        border-radius: 5px;
        border:0;
        text-align: center;
    }
</style>
<script>
    export default {
        methods:{
            fn(){
                alert(1);
            }
        }
    }
</script>