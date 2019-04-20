import VurRouter from 'vue-router';
export default new VurRouter({
    routes:[
        {
            path:'/router1',
            name:'routera',
            component:{
                template:'<div>router1组件一 <Component1></Component1></div>'
            }

        },
        {
            path:'/router2',
            name:'routerb',
            component:{
                template:'<div>router2组件二 <Component2></Component2> </div>'
            },
            children:[
                {
                    path:'children1',
                    name:'childrouter',
                    component:{
                        template:`<div>子路由</div>`
                    }
                }
            ]

        },
        {
            path:'/router3',
            
            components:{
                default:{template:'<div>路由3 默认视图</div>'},
                router3:{template:`
                <div>router3组件三 <Component3></Component3>
                    组件三中包含子路由<br>
                    <router-link to='children1'>子路由一</router-link>
                    <router-link :to="{name:'child_router'}">子路由二</router-link>
                    <router-view></router-view>
                </div>
                `}
            },
            children:[
                {
                    path:'children1',
                    components:{
                        default:{template:'<div>路由3子路由一</div>'},
                      //  router3:{template:'<div>router3子路由 <Component3></Component3></div>'}
                    }
                },
                {
                    path:'children2',
                    name:'child_router',
                    components:{
                        default:{template:'<div>路由3子路由二</div>'},
                      //  router3:{template:'<div>router3子路由 <Component3></Component3></div>'}
                    }
                }
            ]

        }
    ]
})
