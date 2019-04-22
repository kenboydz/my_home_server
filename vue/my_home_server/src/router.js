import Vue from 'vue'
import Router from 'vue-router'
import HomePage from './views/HomePage.vue'
import BookPage from './views/BookPage.vue'

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/',
      name: 'home-page',
      component: HomePage
    },
    {
      path: '/book-page',
      name: 'book-page',
      component: BookPage
    },
    {
      path: '/about-page',
      name: 'about-page',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/AboutPage.vue')
    }
  ]
})

export default router;
