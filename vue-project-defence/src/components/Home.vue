<template>
    <span>
        <!-- <app-create></app-create> -->
        <!-- <app-filter></app-filter> -->
        <!-- <app-recipes></app-recipes> -->
        <app-recipe></app-recipe>
        <app-landing></app-landing>
        <app-landing-details></app-landing-details>
        <app-categories></app-categories>
    </span>
</template>

<script>
import AppLanding from '@/components/Landing';
import AppLandingDetails from '@/components/LandingDetails';
import AppCategories from '@/components/Categories';
// import AppRecipes from '@/components/core/Recipes';
// import AppCreate from '@/components/Create';
// import AppFilter from '@/components/Filter';
import AppRecipe from './shared/Recipe';

export default {
    name: 'AppHome',
    components: {
        AppLanding,
        AppLandingDetails,
        AppCategories,
        // AppRecipes,
        // AppCreate,
        // AppFilter
        AppRecipe,
    },
    props: {
        isAuth: Boolean
    },
    beforeCreate() {
    this.$emit('onAuth', localStorage.getItem('token') !== null);
  },
};
</script>