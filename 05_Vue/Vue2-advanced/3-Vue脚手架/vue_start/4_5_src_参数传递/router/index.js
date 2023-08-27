import VueRouter from "vue-router";
import User from "@/pages/User";
import School from "@/pages/School";
import Student from "@/pages/Student";
import Teacher from "@/pages/Teacher";
import Detail from "@/pages/Detail";

const vueRouter = new VueRouter({
    routes:[
        {
            path:"/user",
            component:User
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
export default vueRouter;