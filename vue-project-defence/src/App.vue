<template>
  <v-app>
    
    <app-navigation></app-navigation>
    <app-home></app-home>

    <v-content transition="slide-x-transition">
      <!-- Add router -->
    </v-content>
  </v-app>
</template>

<script>
import AppNavigation from "./components/Navigation";
import AppHome from "./components/Home";

export default {
  name: "App",

  components: {
    AppNavigation,
    AppHome
  },

  data: () => ({
    //
  })
};
</script>


<style scoped>

</style>