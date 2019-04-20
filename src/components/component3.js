import Vue from 'vue/dist/vue.esm';
export default Vue.component('Component3',{
    data(){
        return{
            name:'组件三',
        }
    },
    template:`
    <div>{{name}}
    <router-link to='/router1'>router1</router-link>
    <router-link :to="{name:'routerb'}">路由命名方式访问</router-link>
    
    </div>
    `
})