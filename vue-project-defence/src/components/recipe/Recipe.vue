<template>
  <v-card width="700" height="auto" class="mx-auto">
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="headline">{{recipe.title}}</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
    <v-img :src="recipe.imageUrl"></v-img>
    <v-card-text>Created: {{recipe.date | date}}</v-card-text>
    <v-card-text>{{recipe.description}}</v-card-text>
    <v-card-text>
      <ul>
        <li v-for="(ingredient, i) in recipe.ingredients" :key="i">{{ingredient}}</li>
      </ul>
    </v-card-text>
    <v-card-actions>
      <app-edit :recipe="recipe" v-if="userIsCreator"></app-edit>
      <app-delete :recipe="recipe" v-if="userIsCreator"></app-delete>
      <v-spacer></v-spacer>
      <app-add-to-fav :recipeId="recipe.id" v-if="userIsAuth && !userIsCreator"></app-add-to-fav>
    </v-card-actions>
  </v-card>
</template>

<script>
import AppDelete from '../recipe/Delete.vue'
import AppEdit from '../recipe/Edit'
import AppAddToFav from '../user/AddToFav'

export default {
  name: "AppRecipe",
  components: {
    AppDelete,
    AppEdit,
    AppAddToFav
  },
  props: ["id"],
  computed: {
    recipe() {
      return this.$store.getters.loadedRecipe(this.id);
    },
    userIsAuth() {
      return (
        this.$store.getters.user !== null &&
        this.$store.getters.user !== undefined
      );
    },
    userIsCreator() {
      if (!this.userIsAuth) {
        return false;
      }
      return this.$store.getters.user.id === this.recipe.creatorId;
    }
  }
};
</script>

<style>
</style>