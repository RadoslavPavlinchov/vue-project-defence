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
      <v-toolbar-title>{{appTitle}}</v-toolbar-title>
      <v-btn color="green lighten-1" class="hidden-sm-and-down ms-2">All Recipes</v-btn>
      <v-spacer class="hidden-sm-and-down"></v-spacer>
      <v-btn color="green lighten-1" class="hidden-sm-and-down">SIGN IN</v-btn>
      <v-btn color="green lighten-1" class="hidden-sm-and-down ms-2">Register</v-btn>
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
        { title: "Menu" }, 
        { title: "Sign In" }, 
        { title: "Join" },
        ]
  })
};
</script>

<style scoped>
</style>