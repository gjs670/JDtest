import Vue from "vue"
import Router from "vue-router"
import Home from "../home/index.vue"
import Money from "../money/index.vue"
import Borrow from "../borrow/index.vue"
import Raise from "../raise/index.vue"
import Vip from "../vip/index.vue"
import Download from "../special/download.vue"
import '../../css/reset.scss'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: "/",
            name: "home",
            component: Home,
        },{
            path: "/money",
            name: "money",
            component: Money,
        },{
            path: "/borrow",
            name: "borrow",
            component: Borrow,
        },{
            path: "/raise",
            name: "raise",
            component: Raise,
        },{
            path: "/vip",
            name: "vip",
            component: Vip,
        },{
            path: "/download",
            name: "download",
            component: Download,
        },
    ],
    scrollBehavior (to,from,savedPosition){
        return {x:0,y:0}
    },
})
