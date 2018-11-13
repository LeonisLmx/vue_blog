import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home/home'
import index from '@/components/group/index'
import test from '@/components/group/article_detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: home
    },{
      path: '/home',
      name: 'home',
      component: home
    },{
      path: '/index',
      name: 'index',
      component: index
    },{
      path: '/test/',
      name: 'test',
      component: test
    }
  ]
})
