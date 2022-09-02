import Home from "@/components/Home";
import{createRouter,createWebHistory} from  'vue-router'
import SignUp from "@/components/SignUp";
import Login from "@/components/Login";
import add from "@/components/Add";
import update from "@/components/Update";

const routes =[
    {
        name:'Home',
        component:Home,
        path:'/'
    },{
        name:'SignUp',
        component:SignUp,
        path:'/SignUp'
    },{
        name:'Login',
        component:Login,
        path:'/Login'
    },{
        name:'Add',
        component:add,
        path:'/Add'
    },{
        name:'Update',
        component:update,
        path:'/Update/:id'
    }
]

const router = createRouter({
    history:createWebHistory(),routes
})

export default router