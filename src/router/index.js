import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/page/home/Home'
import City from "@/page/city/city"
import detail from "@/page/detail/detail"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },{
      path: '/city',
      name: 'City',
      component: City
    },{
      path: '/detail/:id',
      name: 'detail',
      component: detail
    }
  ]
})
