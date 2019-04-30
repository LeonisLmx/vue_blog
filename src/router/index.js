import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/group/index'
import thrends from '@/components/group/thrends'
import author from '@/components/group/author'

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
    },{
      path: '/author',
      name: 'author',
      component: author
    }
  ]
})
