# 自搭vue环境(vue1.0)
热更新环境： webpack webpack-cli webpack-dev-server;
vue,
路由：vue-router;
集中数据管理：vuex;

## 注意事项

1 引入vue时引入 'vue/dist/vue.esm'
2 热更新方面引用资源路径问题：
    引文件引webpack 输出下将其作为初始位置
## 目录结构
```
自搭vue环境
自搭vue环境1.0
├── app.js                     //全局vue实例                  
├── dest                       //webpage输出目录，在index.html中引入         
│   └── bundle.min.js                               
├── index.html                               
├── package-lock.json                               
├── package.json              //包管理文件                   
├── proxy实现数据双向绑定.html                               
├── README.md                               
├── src                        //组件目录       
│   ├── components                               
│   │   ├── allcmp.js                               
│   │   ├── component1.js                               
│   │   ├── component2.js                               
│   │   └── component3.js                               
│   ├── router                  //路由目录            
│   │   └── index.js                               
│   └── store                    //全局数据目录(vuex)      
└── webpack.config.js            //webpack 配置文件                 
            
```

## vue基本知识

### vue常用指令

v-bing:   简写为':'   向属性中输出;
    class可以绑上数组
    style可以绑上json

v-model :数据双向绑定（输入的组件 input，比如文本框，多选框，下拉列表……）
    只能传递字符串，需要其他数值时需要转换

v-text (不常用) 比如在标签中输入\<div v-text='data中数据' >此内容会被覆盖</div> 等效于 \<div>{{data中数据}}</div>
v-html （谨慎使用） 将带有html标签的文本以html形式输出


v-on:  事件 简写为'@' 如 \<button v-on:click="fn()"> 等价于\<button @click="fn()"> fn 也可以不写括号 写括号可以传参

v-show  值为布尔值，隐藏元素（display设置为none）
v-if    值为布尔值，删除元素

v-for  循环输出组件
 1 循环数组 v-for='item,index in arr' :key=keyname
 2 json    v-for='item,key in json' :key=keyname
 3 字符串   类似于数组    
 4 数字     v-for='i in num'   :key=keyname
 :key属性 循环时如果不加他自己会生成，不加eslink会报错 key唯一，不会变
        作用：vue虚拟dom 中监视元素的变化，获取虚拟dom 变化情况，减少渲染次数，提高性能


v-pre 预编译  比如向原样输出{{a}} 时，可以在标签中加
提高性能

v-cloak 去除阻塞页面时{{a}}问题，在标签中加 v-cloak  在没读出数据前会将这个标签加上一个v-cloak属性，通过这个属性用样式解决 比如可以在样式中加 *[v-cloak]{displya:none},或添加进度条等……


### 事件修饰符

https://cn.vuejs.org/v2/guide/events.html


### vue-router 
1.路由由路由容器和路由表组成：

* 路由容器：
> 默认容器\<router-view>\</router-view>
> 单独使用时在路由对象的 component：{template:\<组件>}；
```
<router-view>\</router-view>
component:{
    template:'<组件>'
}

```

>命名组件 \<router-view name:'componentname'></router-view>
> 路由对象中 
```
<router-view></router-view>
<router-view name:'componentname'><router-view>

componets:{ //加个‘s'
    default:{templeat:'<组件>'},
    componentname:{templeat:'<组件>'}
}
```

* 路由表
```
  let router = new VueRouer({
      routes:[
        {
            path:'/aaa',
            name:'名字',    //命名路由
            component:{}/多个容器时用components:{},
            children:[      //子路由是个数组
                {
                    path:'',…………
                }
            ]
        }

      ]
  })
```
* 挂载到vue对象上
```
let ev = new Vue({
      el:'#app',
      data:{},
      router:router
  })
```

### 组件和组件间传值    

1. 局部组件：在Vue组件components中直接写对象形式
 ```
 new vue({
     el:'app',
     data:{},
     templet:`<com1></com1>` ,//com为自定义组件
     components:{
         com1:{
             data(){

             },
             name:'com1',
             temple:`<div>局部组件com1</div>` 
         }
     }
 })
 ```
 2. 全局组件，要通过Vue.component(\'组件名字\',{ 组件对象 （data用方法return出对象）})方法创建
   ```
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
   ```

3. 组件间通信 (非vuex)

    3.1父传值到子
        在标签中加入key属性，要是想传入父级对象的属性可以在加入的属性用v-bind 绑定
        在子组件中声明props:['key']后就可以用 this.$props.key 访问
    3.2子传值到父
        在标签中加入 ref属性，如：<child ref='child'><chiid>
        在父组件中用this.$refs.child  就可以取到整个子组件对象

    上面两种方式耦合度太高，可以通过事件来传值，不过仍然需要借助上面这样通信方式
      1. this.$refs.标签中写的值.$emit('事件名',value)
         this.$on('事件名',funciton(value){

         })

      2. 这里要绑this 
         this.$props.标签中写的值.$emit('事件名',value)
         this.$on('事件名',function(value){

         })


4.vuex

![数据流图](https://vuex.vuejs.org/vuex.png)<br>
  vuex用法：
  4.1安装：npm install vuex -S 前端库依赖所以用-s

  4.2基本引用
    主组件引入，全局可用

    ```
        import Vue from 'vue'
        import Vuex fromn 'vuex'
        vue.use(Vuex)
        const store = new Vuex.Store({
            state:{
                name:'vuex'
            },
        mutations:{     //操作数据 vue调试工具可以看到 不支持异步
            handle(state,value){  //操作state对象，所以函数带state value触发这个函数是传入的参数
                state.name = value;
            }
        },
        actions:{       //向上面mutations 提交方法，可以异步操作
             async requstlist({commit},value){  //可以异步操作  第一参数是 store 但是一般就用commit 所以一般这样写 
                 let name = await fetch('htttp://XXX.com:XXX/') //模拟网络获取name并修个store.namm 
                     name = await name.json();
                     commit('handle',name)      //触发actions 中函数可以在vue组件中的created中执行或者在 下面的getters中，但是要注意死循环
             }
         },
          getters:{       //类似于vue 对象的计算属性

          }
        })
    ```
    
    4.3 组件中用vuex值，全局注册后，在每个子组件中就可以用this.$store.state.XXX 访问  (更好的用法是用 mapState 映射到组件的计算属性中，下面会讲)
    4.4 组件中修改vuex中的值，可以在组件中调用this.$store.dispatch()方法修改(更好的用法是用 mapAtitions 映射到组件的计算属性中，下面会讲)