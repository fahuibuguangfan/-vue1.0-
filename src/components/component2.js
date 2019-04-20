import Vue from 'vue/dist/vue.esm';
export default Vue.component('Component2',{
    data(){
        return{
            name:'组件二',
            
        }
    },
    template:`
    <div>{{name}}
    <router-link to='/router1'>router1</router-link>
    <router-link to='/routerb'>routerb</router-link>
    </div>
    `
})