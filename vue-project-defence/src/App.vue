<template>
  <v-app>
    <app-navigation></app-navigation>
      <router-view></router-view>
    <app-footer></app-footer>
  </v-app>
</template>

<script>
import AppNavigation from "./components/shared/Navigation";
import AppFooter from '@/components/shared/Footer';

export default {
  name: "App",
  components: {
    AppNavigation,
    AppFooter,
  }
};
</script>


<style scoped>

</style>