import VueRouter from "vue-router";
import User from "@/pages/User";
import School from "@/pages/School";

const vueRouter = new VueRouter({
    routes:[
        {
            path:"/user",
            component:User
        },
        {
            path:"/school",
            component:School
        }
    ]
});
export default vueRouter;