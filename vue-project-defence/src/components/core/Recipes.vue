<template>
  <div class="recipes">
    <h1>Recipes Page</h1>
    <div class="recipe-container">
      <div v-for="recipe in allRecipes" :key="recipe.id">
        <div class="recipe-box">
          <div>
            <h3>{{recipe.title}}</h3>
            {{recipe.body}}
          </div>
          <button @click="deleteRecipe(recipe.id)">Delete</button>
        </div>
      </div>
    </div>
  </div>
</template>

<!-- 

<template>
    <v-container grid-list-lg>
        <v-layout row wrap>
            <v-flex xs12 sm6 md6 lg4 v-for="(item, idx) in recipes" :key="idx">
                <v-card>
                    <v-responsive>
                        <v-img :src="item.recipe.image"></v-img>
                    </v-responsive>

                    <v-card-text>
                        <div class="title my-5">{{item.recipe.label}}</div>

                        <div class="subheading">Ingredients</div>
                        <ul>
                            <li v-for="(ingredient, i) in item.recipe.ingredientLines" :key="i">{{ingredient}}</li>
                        </ul>
                    </v-card-text>

                    <v-card-actions>
                        <v-btn color="green" dark>Order</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

 /> -->

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  name: "AppRecipes",
  methods: {
    ...mapActions(['fetchRecipes', 'deleteRecipe']),
  },
  computed: mapGetters(['allRecipes']),
  created() {
    this.fetchRecipes();
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