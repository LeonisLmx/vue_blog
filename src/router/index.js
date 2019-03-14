import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/group/index'
import thrends from '@/components/group/thrends'

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
    },{
      path: '/thrends',
      name: 'thrends',
      component: thrends
    }
  ]
})
