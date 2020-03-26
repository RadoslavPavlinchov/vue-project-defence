<template>
  <v-app>
    <app-navigation></app-navigation>
    <!-- <app-home></app-home> -->
    <app-footer></app-footer>
  </v-app>
</template>

<script>
import AppNavigation from "./components/core/Navigation";
// import AppHome from "./components/Home";
import AppFooter from '@/components/core/Footer';

export default {
  name: "App",

  components: {
    AppNavigation,
    // AppHome,
    AppFooter,
  },

  data() {
    return {

    }
  }
};
</script>


<style scoped>

</style>