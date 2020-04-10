import Vue from 'vue';
import VueRouter from 'vue-router';
import authGuard from './auth-guard'

import Home from '@/components/Home.vue';
import Categories from '@/components/Categories.vue';
import Recipe from '@/components/shared/Recipe.vue';
import Profile from '@/components/core/Profile.vue';
import NotFound from '../components/shared/NotFound.vue'
import Recipes from '@/components/core/Recipes.vue';

Vue.use(VueRouter)

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
  },
  {
    path: '/register',
    component: () => import('@/components/auth/Register.vue'),
  },
  {
    path: '/categories',
    component: Categories,
    beforeEnter: authGuard
  },
  {
    path: '/recipe-details/:id',
    name: 'recipe-details',
    component: Recipe,
    props: true,
    beforeEnter: authGuard
  },
  {
    path: '/create',
    component: () => import('@/components/Create.vue'),
    beforeEnter: authGuard
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile,
    beforeEnter: authGuard
  },
  {
    path: '/recipes',
    component: Recipes,
    beforeEnter: authGuard
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

