import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import(/* webpackChunkName: "home" */ './views/Home.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/grid',
      name: 'grid',
      component: () => import(/* webpackChunkName: "grid" */ './views/Grid.vue')
    },
    {
      path: '/cards',
      name: 'cards',
      component: () => import(/* webpackChunkName: "cards" */ './views/Cards.vue')
    },
    {
      path: '/form',
      name: 'form',
      component: () => import(/* webpackChunkName: "form" */ './views/Form.vue')
    }
  ]
})
