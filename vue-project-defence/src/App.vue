<template>
  <v-app>
    <app-navigation></app-navigation>
    <!-- <app-footer></app-footer> -->
  </v-app>
</template>

<script>
import AppNavigation from "./components/shared/Navigation";
// import AppFooter from '@/components/shared/Footer';

import { mapActions } from "vuex";

export default {
  name: "App",

  components: {
    AppNavigation,
    // AppFooter,
  },
    methods: {
    ...mapActions(["fetchRecipes"])
  },
    created() {
    this.fetchRecipes();
  },

  data() {
    return {
    }
  }
};
</script>


<style scoped>

</style>