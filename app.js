import Vue from 'vue/dist/vue.esm';
import VurRouter from 'vue-router';
import Component1 from './src/components/component1'
import Component2 from './src/components/component2'
import Component3 from './src/components/component3'
import Allcmp from './src/components/allcmp'
Vue.use(VurRouter);
import router from './src/router/index'

const vm = new Vue({
    el:"#app",
    router,
    data:{
        routerIndex:'router1',
        routerInt:0,
        
    },
    template:`
    <div>
        
         <div class="main">
              主页面app.js显示内容 路由
              <router-link to='/'>首页</router-link>
              <router-link to='/router1'>路由一</router-link>
              <router-link to='/router2'>路由二</router-link>
              <router-link to='/router3'>路由三命名router-view</router-link>
         </div>
         <div class='routerJs'>
          js控制路由:获取路由信息$route 控制路由跳：$router<br>
          this.$router.push(字符串/对象) 跳转到<br>
          this.$router.replace(字符串/对象) 替换当前路由<br>
          this.$router.go(数值) 1 -2 操作路由栈 <br>
            <select v-model="routerIndex">
                <option value="router1">路由一</option>
                <option value="router2">路由二</option>
                <option value="router3">路由三</option>
            </select>
            <button @click="pushRouter()">push方法到{{routerIndex}}</button>
            <button @click="repalceRouter()">replace方法到{{routerIndex}}</button>
            <input type='number' v-model='routerInt'>
            <button @click="goRouter()">go方法操作{{routerInt}}步</button><br>
            当前路由路径：{{this.$route.path}}<br>
            当前路由名字：{{this.$route.name}}
            
         </div>
         <cmp1></cmp1>
         <Allcmp></Allcmp>
         <div class="default_router-view">
         默认router-view显示内容
         <router-view></router-view>
         </div>
         <div class="rename_router-view">
         命名router-view显示内容name=rouer3
         <router-view name='router3'></router-view>
         </div>
         
        <button @mouseover="fn()">按钮</button>
    </div>
    `,
    components:{
        Cmp1:{
            data(){
                return{
                    
                    name:'cmp1',
                    sketch:'在宿主组件的components中直接编写对象，不需要像全局组件一样用vue.component({……})'
                }
            },
            template:'<div>局部组件{{name}}：{{sketch}}</div>'
        },
    },
    methods: {
        pushRouter(){
            this.$router.push(this.routerIndex);
            console.log(this.$route.path);
        },
        replaceRouter(){
            this.$router.replace(this.routerIndex);
        },
        goRouter(){
            this.$router.go(this.routerInt);
        },
        fn(){
            console.log("once事件")
        }
    },
    
})