import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '@/components/Home.vue';
import Categories from '@/components/Categories.vue';
import Recipe from '@/components/shared/Recipe.vue';
import Profile from '@/components/core/Profile.vue';
import NotFound from '../components/shared/NotFound.vue'
import Recipes from '@/components/core/Recipes.vue';

Vue.use(VueRouter)

function anonymousGuard(to, from, next) {
  if (localStorage.getItem('token') !== null) {
    next('/');
  } else {
    next();
  }
}

function authGuard(to, from, next) {
  if (localStorage.getItem('token') === null) {
    next('/signin');
  } else {
    next();
  }
}

const routes = [
  {
    path: '/',
    name: "home",
    component: Home
  },
  {
    path: '/signin',
    name: "signin",
    component: () => import('@/components/auth/Signin.vue'),
    beforeEnter: anonymousGuard
  },
  {
    path: '/register',
    component: () => import('@/components/auth/Register.vue'),
    beforeEnter: anonymousGuard
  },
  {
    path: '/categories',
    component: Categories
  },
  {
    path: '/recipe-details/:id',
    name: 'recipe-details',
    component: Recipe,
    params: true
  },
  {
    path: '/create',
    component: () => import('@/components/Create.vue')
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile,
    beforeEnter: authGuard
  },
  {
    path: '/recipes',
    component: Recipes
  },
  {
    path: '*',
    component: NotFound
  }
]

export default new VueRouter({
  mode: 'history',
  routes
})

