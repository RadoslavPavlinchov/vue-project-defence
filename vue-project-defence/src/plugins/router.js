import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '@/components/Home.vue';
import Signin from '@/components/auth/Signin.vue';
import Register from '@/components/auth/Register.vue';
import Categories from '@/components/Categories.vue';
import Recipe from '@/components/shared/Recipe.vue';
import Create from '@/components/Create.vue'

const routes = [
    {path: '/', component: Home},
    {path: '/signin', component: Signin},
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
]

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes
})

