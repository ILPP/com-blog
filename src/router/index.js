import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'content',
      component: () => import('../components/component/component.vue')
    },
    {
      path: '/blog',
      name: 'blog',
      component: () => import('../components/blog/blog.vue')
    },
    {
      path: '/backStage',
      name: 'backStage',
      component: () => import('../components/backStage/backStage.vue')
    },
  ]
})
