<template>
  <v-container grid-list-lg>
    <v-layout row wrap>
      <v-flex xs12 sm6 md6 lg4 v-for="recipe in allRecipes" :key="recipe.id">
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
  name: "AppRecipes",
  computed: {
    allRecipes() {
      return this.$store.getters.loadedRecipes
    }
  }
};
</script>


<style scoped lang=scss>
.recipe-container {
  .recipe-box {
    border: 1px solid black;
    border-radius: 10px;
    margin: 10px;
    padding: 10px;

    text-align: left;

    display: flex;
    justify-content: flex-start;

    img {
      width: 200px;
      padding: 10px;
    }
  }
}
</style>