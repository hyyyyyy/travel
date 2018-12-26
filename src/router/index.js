import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/page/home/Home'
import City from "@/page/city/city"
import detail from "@/page/detail/detail"

Vue.use(Router)
//这样写，主页就变成异步加载了
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: ()=> import('@/page/home/Home')
    },{
      path: '/city',
      name: 'City',
      component: City
    },{
      path: '/detail/:id',
      name: 'detail',
      component: detail
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
