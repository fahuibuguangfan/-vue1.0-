import Vue from 'vue/dist/vue.esm';
export default Vue.component('Component1',{
    data(){
        return{
            name:'组件一',
            sketch:'路由名跳转 <router-link :to=\"{name:\'陆游名\' params:23}\"</router-link>'
        }
    },
    template:`
    <div>{{name}}:{{sketch}}</br>
    <router-link to='/router1'>router1</router-link>
    <router-link :to="{name:'routerb',params:{name:'fahui'}}">路由命名方式访问router2</router-link>
    
    </div>
    `
})