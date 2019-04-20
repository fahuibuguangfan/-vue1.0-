import Vue from 'vue/dist/vue.esm';
export default Vue.component('Allcmp',{
    data(){
        return {
            name:'全局组件',
            sketch:'通过Vue.component(\'组件名字\',{ 组件对象 （data用方法return出对象）})方法创建'
        }
    },
    template:'<div>{{name}}{{sketch}}</div>'
})