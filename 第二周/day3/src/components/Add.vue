<template>
  <div>
    <MHeader>添加页面</MHeader>
    <div class="scroll-content">
      <form class="form-list">
        <div>
          <label for="bookName">书名</label>
          <input type="text" id="bookName" placeholder="请输入书名" v-model="book.bookName">
        </div>
        <div>
          <label for="bookCover">封面地址</label>
          <input type="text" id="bookCover" placeholder="请输入封面地址" v-model="book.bookCover">
        </div>
        <div>
          <label for="bookInfo">书的详细信息</label>
          <input type="text" id="bookInfo" placeholder="请输入书的详细信息" v-model="book.bookInfo">
        </div>
        <button @click = "add">添加图书</button>
      </form>
    </div>
  </div>
</template>
<style scoped lang="less">
    .form-list{
      padding:10px 30px;
      label{
        display: block;
        padding:10px 0;
      }
      input{
        width: 250px;
        height: 40px;
        line-height: 40px;
        border:1px solid #ccc;
        padding-left: 10px;
      }

    }
</style>

<script>
  import MHeader from '../base/MHeader';
  import axios from "axios";
  export default {
    data(){
      return {
        book:{
          bookName:"",
          bookCover:"",
          bookInfo:""
        }
      }
    },
    methods:{
      add(){
        axios.post("/api/book",this.book).then(res=>{
          this.book = {
            bookName:"",
            bookCover:"",
            bookInfo:""
          };
          this.$router.push("/list");//相当于跳转到路由/list组件页面上
        });
      }
    },
    components:{
      MHeader
    }
  }
</script>
