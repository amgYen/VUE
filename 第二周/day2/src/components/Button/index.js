import Button from './Button.vue';
import Vue  from 'vue';
export default {
    install(){  //安装一个全局的组件
        Vue.component("zf-button",Button);
    }
}