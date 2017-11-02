<template>
  <div>
    <MHeader>列表</MHeader>
    <div class="scroll-content">
      <dl v-for="book in books" class="bookList">
        <dt><img :src="book.bookCover" alt=""></dt>
        <dd>{{book.bookName}}</dd>
        <dd>{{book.bookInfo}}</dd>
        <dd>
          <button @click ="remove(book.id)">删除</button>
          <router-link :to="{name:'update',params:{id:book.id}}">修改</router-link>
        </dd>
      </dl>
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
    components:{
      MHeader
    },
    methods:{
      getData(){
          axios.get("/api/book").then(res=>{
            this.books  = res.data;
          })
      },
      remove(id){
         axios.delete("/api/book?id="+id).then(res=>{
            this.books = this.books.filter(item=>{
               return item.id !=id;
            })
         }).catch(err=>console.log(err));
      }
    },
    created(){
      this.getData();
    },
    activated(){ //钩子函数 设置在缓存里做些事情
      this.getData();
    }
  }
</script>
<style scoped lang="less">
  .bookList{
    overflow: hidden;
    dt{
      width: 40%;
      float:left;
      img{
        width: 100%;
      }
    }
    dd{
      width: 55%;
      padding-left: 5%;
      float:left
    }
  }
</style>
