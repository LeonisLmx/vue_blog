import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/group/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: index
    },{
      path: '/index',
      name: 'index',
      component: index
    }
  ]
})
