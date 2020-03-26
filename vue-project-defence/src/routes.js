import Home from './components/Home.vue';
import Signin from './components/core/Signin.vue';
import Register from './components/core/Register.vue';
import Categories from './components/Categories.vue';
import RecipeDetails from './components/shared/RecipeDetails.vue';

export default [
    {path: '/', component: Home},
    {path: '/signin', component: Signin},
    {path: '/register', component: Register},
    {path: '/categories', component: Categories},
    {path: '/product/:id', component: RecipeDetails},
]


