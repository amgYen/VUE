<template>
<div>Home {{msg}}</div>
</template>
<style scoped>  /*scoped局部 只改自己组件里的样式*/
    div{
        background: blue;
    }
</style>
<script>
    export default {
        data(){
            return {
                msg:"zfpx"
            }
        }
    }
</script>