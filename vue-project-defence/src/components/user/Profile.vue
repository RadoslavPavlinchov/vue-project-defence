<template>
  <v-container grid-list-lg>
    <v-layout row wrap>
        <template v-if="allRecipes.length == 0">
          <h1>You do not have any recipes yet!</h1> 
        </template>
      <v-flex xs12 sm6 md6 lg4 v-for="recipe in allRecipes" :key="recipe.id">
        <h1>Created:</h1>
        <v-card>
          <v-responsive>
            <v-img
              :src="recipe.imageUrl"
            ></v-img>
          </v-responsive>

          <v-card-text>
            <div class="title">{{recipe.title}}</div>
            <div>Created: {{recipe.date | date}}</div>
            <div class="subheading">Ingredients</div>
            <ul>
              <li v-for="(ingredient, i) in recipe.ingredients" :key="i">{{ingredient}}</li>
            </ul>
          </v-card-text>
          <v-card-actions>
            <v-btn color="green" dark :to='{ name: "recipe-details", params: { id: recipe.id }}'>Details</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>

export default {
  name: "AppProfile",
  computed: {
    allRecipes() {
      return this.$store.getters.userCreatedRecipes
    }
  }
};
</script>


<style scoped>
</style>
