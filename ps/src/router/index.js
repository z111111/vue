import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/pages/home'
import goodsDetail from '@/pages/goodsDetail'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/detail',
      name: 'goodsDetail',
      component: goodsDetail
    }
  ]
})
