<template>
  <v-app>
    <app-navigation @onAuth="isAuth = $event" :isAuth="isAuth"></app-navigation>
      <router-view @onAuth="isAuth = $event" :isAuth="isAuth"></router-view>
    <!-- <app-footer></app-footer> -->
  </v-app>
</template>

<script>
import AppNavigation from "./components/shared/Navigation";
// import AppFooter from '@/components/shared/Footer';

// import { mapActions } from "vuex";

export default {
  name: "App",

  components: {
    AppNavigation,
    // AppFooter,
  },
  //   methods: {
  //   ...mapActions(["fetchRecipes"])
  // },
    created() {
    // this.fetchRecipes();
    this.$store.dispatch('fetchRecipes')
  },

  data() {
    return {
      isAuth: localStorage.getItem('token') !== null
    }
  }
};
</script>


<style scoped>

</style>