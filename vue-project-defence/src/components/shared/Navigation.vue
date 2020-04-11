<template>
  <span>
    <v-navigation-drawer app v-model="drawer" class="green darken-1" dark disable-resize-watcher>
      <v-list>
        <template v-for="(item, index) in items">
          <v-list-item :key="index">
            <v-list-item-content>{{item.title}}</v-list-item-content>
          </v-list-item>
          <v-divider :key="`divider-${index}`"></v-divider>
        </template>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar color="green darken-3" dark>
      <v-app-bar-nav-icon class="hidden-md-and-up" @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-spacer class="hidden-md-and-up"></v-spacer>
      <v-toolbar-title class="pointer"><router-link to="/" tag="span">{{appTitle}}</router-link></v-toolbar-title>
      <v-btn v-if="userIsAuth" color="green lighten-1" class="hidden-sm-and-down ms-2" to="/categories">All Categories</v-btn>
      <v-spacer class="hidden-sm-and-down"></v-spacer>
      <v-btn v-if="userIsAuth" color="green lighten-1" class="hidden-sm-and-down" to="/create" ms-2>Create Recipe</v-btn>
      <v-btn v-if="!userIsAuth" color="green lighten-1" class="hidden-sm-and-down" to="/signin">Sign In</v-btn>
      <v-btn v-if="!userIsAuth" color="green lighten-1" class="hidden-sm-and-down ms-2" to="/register">Register</v-btn>
      <v-btn v-if="userIsAuth" color="green lighten-1" class="hidden-sm-and-down ms-2" to="/profile">Profile</v-btn>
      <v-btn v-if="userIsAuth" color="green lighten-1" class="hidden-sm-and-down ms-2" @click="signOut">Logout</v-btn>
    </v-app-bar>
  </span>
</template>

<script>
export default {
  name: "AppNavigation",
  data: () => ({
    appTitle: "TASTE THE HEALTHY ONES",
    drawer: false,
    items: [
        { title: "Sign In" }, 
        { title: "Register" },
        ],
  }),
  methods: {
    signOut() {
      this.$store.dispatch('signUserOut')
    }
  },
  computed: {
    userIsAuth() {
      return this.$store.getters.user !== null && this.$store.getters.user !== undefined
    }
  }
};
</script>

<style scoped>
.pointer {
  cursor: pointer;
}
</style>