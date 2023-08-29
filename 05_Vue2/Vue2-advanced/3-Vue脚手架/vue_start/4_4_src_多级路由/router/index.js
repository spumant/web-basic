import VueRouter from "vue-router";
import User from "@/pages/User";
import School from "@/pages/School";
import Student from "@/pages/Student";
import Teacher from "@/pages/Teacher";

export default new VueRouter({
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
                    component:Student
                },
                {
                    path:"teacher",
                    component:Teacher
                }
            ]
        }
    ]
})