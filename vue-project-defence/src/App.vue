<template>
  <v-app>
    <app-navigation></app-navigation>
    <app-home></app-home>
    <app-footer></app-footer>
    <v-content transition="slide-x-transition">
      <!-- Add router -->
    </v-content>
  </v-app>
</template>

<script>
import AppNavigation from "./components/core/Navigation";
import AppHome from "./components/Home";
import AppFooter from '@/components/core/Footer';

export default {
  name: "App",

  components: {
    AppNavigation,
    AppHome,
    AppFooter
  },

  data: () => ({
    //
  })
};
</script>


<style scoped>

</style>