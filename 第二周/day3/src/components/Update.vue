<template>
  <div class="updateBook">
    <header>
      <i @click="back"></i>
      修改
    </header>
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
        <button @click = "update">修改图书</button>
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
  .updateBook{
    header{
      width: 100%;
      position: fixed;
      left: 0;
      top:0;
      height: 40px;
      line-height: 40px;
      background: #ddd;
      text-align: center;
      i{
        position: absolute;
        left:10px;
        top:10px;
        width: 10px;
        height: 10px;
        border-top:2px solid #fff;
        border-left:2px solid #fff;
        transform: rotate(-45deg);
      }
    }
  }
</style>
<script>
  import axios from "axios";
  export default {
    data(){
      return {
        book:{
          bookCover:"",
          bookName:"",
          bookInfo:""
        }
      }
    },
    methods:{
      back(){
          this.$router.go(-1); //后退
        //this.$router.back();
      },
      update(){
          axios.put("/api/book?id="+this.book.id,this.book).then(res=>{
              this.book = {
                bookCover:"",
                bookName:"",
                bookInfo:""
              };
              this.$router.push("/list");
          })
      },
      getData(){
        //获取路由的参数 this.$route.params.id
        axios.get("/api/book?id="+this.$route.params.id).then(res=>{

            this.book = res.data;
        })
      }
    },
    created(){
      this.getData();
    }
  }

</script>
