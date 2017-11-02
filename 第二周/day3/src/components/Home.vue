<template>
  <div>
    <MHeader>首页</MHeader>
    <div class="scroll-content">
      <ul class="list">
        <li v-for="book in books">
          <img :src="book.bookCover" >
          <span>{{book.bookName}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  import MHeader from '../base/MHeader';
  import axios from "axios";
  export default {
    data(){
      return {
        books:[]
      }
    },
    components: {
      MHeader
    },
    methods: {
      getData() {
        axios.get("/api/hot").then(res => {
          this.books = res.data;
        }).catch(err => console.log(err));
      }
    },
    created() {
      this.getData();
    },
    activated(){ //钩子函数 设置在缓存里做些事情
      this.getData();
    }
  }
</script>
<style scoped lang="less">
  .list{
     display: flex;
     flex-wrap: wrap;
    li{
      text-align:center;
      img{
        width: 140px;
        display: block;
      }
    }
  }
</style>
