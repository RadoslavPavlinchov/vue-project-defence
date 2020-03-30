import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '@/components/Home.vue';
import Signin from '@/components/auth/Signin.vue';
import Register from '@/components/auth/Register.vue';
import Categories from '@/components/Categories.vue';
import Recipe from '@/components/shared/Recipe.vue';
import Create from '@/components/Create.vue'
import Profile from '@/components/core/Profile.vue'

const routes = [
    {path: '/', name: "home", component: Home},
    {path: '/signin', name: "signin", component: Signin},
    {path: '/register', component: Register},
    {path: '/categories', component: Categories},
    {
      path: '/recipe/:id',
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

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes
})

