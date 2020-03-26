<template>
  <v-app>
    <app-navigation></app-navigation>
    <app-home></app-home>
    <app-footer></app-footer>

    <app-create-recipe></app-create-recipe>
    <app-sign-in></app-sign-in>
    <app-register></app-register>

    <v-content transition="slide-x-transition">
      <!-- Add router -->
    </v-content>
  </v-app>
</template>

<script>
import AppNavigation from "./components/core/Navigation";
import AppHome from "./components/Home";
import AppFooter from '@/components/core/Footer';

import AppCreateRecipe from '@/components/CreateRecipe';
import AppSignIn from '@/components/core/Signin';
import AppRegister from '@/components/core/Register';

export default {
  name: "App",

  components: {
    AppNavigation,
    AppHome,
    AppFooter,
    AppCreateRecipe,
    AppSignIn,
    AppRegister
  },

  data() {
    return {

    }
  }
};
</script>


<style scoped>

</style>