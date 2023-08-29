import VueRouter from "vue-router";
import User from "@/pages/User";
import School from "@/pages/School";
import Student from "@/pages/Student";
import Teacher from "@/pages/Teacher";
import Detail from "@/pages/Detail";

const router = new VueRouter({
    routes:[
        {
            path:"/user",
            component:User,
            //独享路由守卫被触发
            // beforeEnter:(to,from,next)=>{
            //     console.log("独享路由守卫被触发",to);
            //     if(to.path==='/user'){
            //         if(localStorage.getItem("user")==="admin"){
            //             next();
            //         }else{
            //             alert("非admin账号无权限操作");
            //         }
            //     }else{
            //         next();
            //     }
            // }
        },
        {
            path:"/school",
            component:School,
            children:[
                {
                    path:"student",
                    component:Student,
                    children:[
                        {
                            //方式1-query
                            //path:"detail",

                            //方式2-路由命名-query
                            // name:"stu_info",
                            // path:"detail",

                            //方式3-路由命名(必须)-params
                            // name:"stu_info",
                            // path:"detail/:id/:name",

                            //方式4-1-路由命名(必须)-params(必须)-props
                            // name:"stu_info",
                            // path:"detail/:id/:name",
                            // props:true,

                            //方式4-2-路由命名(必须)-query-props
                            name:"stu_info",
                            path:"detail",
                            props($route){
                                return{
                                    id:$route.query.id,
                                    name:$route.query.name
                                }
                            },

                            component:Detail,
                        }
                    ]
                },
                {
                    path:"teacher",
                    component:Teacher
                }
            ]
        }
    ]
});
// router.beforeEach((to,from,next)=>{
//     console.log("全局前置路由守卫被触发",to);
//     if(to.path==='/user'){
//         if(localStorage.getItem("user")==="admin") {
//             next();
//         }else{
//             alert("非admin账号无权限操作");
//         }
//     }else{
//         next();
//     }
// })
// //全局后置路由守卫————初始化的时候被调用、每次路由切换之后被调用
// router.afterEach((to,from)=>{
//     console.log('全局后置路由守卫被触发')
// })
export default router;