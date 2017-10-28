let vm = new Vue({
    el:"#app",
    created(){
      let result = JSON.parse(localStorage.getItem("list"));
        if(result!=null){
          this.todos = result;
        }else{
            axios.get("./todo.json").then((res)=>{
                this.todos= res.data
            },error=>console.log(error));
        }
    },
    data:{
        todos:[],
        todo:{select:false,title:""},
        newObj:{select:false,title:""},
        cur:{},  //中间变量 比较cur和todos里的每一项 item
        hash:"all"
    },
    methods:{
        add(){
            this.todos.push(this.todo);
            this.todo = {select:false,title:""} //重新初始化todo
        },
        remove(p){
            this.todos = this.todos.filter(item=>item!=p);
        },
        showInput(item){
            this.cur = item; //设置满足input显示的条件
            this.newObj.title = item.title; //把span的内容显示在新的输入框
        },
        update(item){
            item.title = this.newObj.title;
            this.todos = this.todos.map((sItem)=>{  //在todos里把数据更新过来
                if(item==sItem) return item;
                return sItem;
            });
            this.cancel();//input隐藏 div显示
        },
        cancel(){
            this.cur = {};
        }
    },
    watch:{
        todos(){//监听todos变化,发生改变时,把数据放入本地存储里
            localStorage.setItem("list",JSON.stringify(this.todos));
        }
    },
    computed:{
        newTodos(){
            if(this.hash =="all") return this.todos;
            if(this.hash =="finish") return this.todos.filter(item=>item.select==true);
            if(this.hash=="unfinish") return this.todos.filter(item=>item.select==false);

        },
        count(){
            return this.todos.filter(item=>item.select==false).length;
        }
    },
    filters:{//过滤器  {{total|toFixed(1,'¥')}}

    },
    directives:{//自定义指令  v-auto-focus = ""
        autoFocus(ele,params){ //ele DOM元素 params指引号里的内容
            setTimeout(function(){//稍微等等
                if(params.value){//params 指令信息对象  参数的值是保存在value属性里
                    ele.focus();//光标聚焦
                }
            },0)

        }
    }

});

    function listener(){
        let hash = window.location.hash;
        hash = hash.length>0?hash.slice(1):"all";
        vm.hash = hash;
    }
    listener();
    window.addEventListener("hashchange",listener,false);

/*
* 1.获取数据 ->先看本地存储中是否有数据"list":'[]',有则获取,没有再发送请求获取数据
* 2.添加事项
*   ->在页面上把数据更改过来
*   ->按回车时,把修改的数据保存到todos,并且在本地存储里重新更新下
*    自定义指定 给DOM元素添加功能  filters 对{{}}或v-text里的内容添加功能
*
* 3.删除事项 ->过渡掉这一项
* 4.多选框选中是已完成 未选中的是没完成的
* 点击按钮时改变hash值,从而确定todos里显示哪些哪些
* 捕获hash值变化,可以监听 hashchange事件
*
* * */