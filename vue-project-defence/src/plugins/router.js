import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '@/components/Home.vue';
import Signin from '@/components/auth/Signin.vue';
import Register from '@/components/auth/Register.vue';
import Categories from '@/components/Categories.vue';
import Recipe from '@/components/shared/Recipe.vue';
import Create from '@/components/Create.vue'
import Profile from '@/components/core/Profile.vue'

Vue.use(VueRouter)

function anonymousGuard(to, from, next) {
  if (localStorage.getItem('token') !== null) {
      next('/');
  } else {
      next();
  }
}

const routes = [
    {path: '/', name: "home", component: Home},
    {path: '/signin', name: "signin", component: Signin, beforeEnter: anonymousGuard},
    {path: '/register', component: Register, beforeEnter: anonymousGuard},
    {path: '/categories', component: Categories},
    {
      path: '/recipe-details/:id',
      name: 'recipe-details',
      component: Recipe,
      params: true
    },
    {
      path: '/create',
      component: Create,
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile,
    },
]

export default new VueRouter({
  mode: 'history',
  routes
})

