<template>
  <div class="recipes">
    <h1>Recipes Page</h1>
    <div class="recipe-container">
      <div v-for="recipe in allRecipes" :key="recipe.id">
        <router-link :to='{ name: "recipe-details", params: { id: recipe.id }}'>
        <div class="recipe-box">
            <img :src="recipe.img" />
            <div>
              <h3>{{recipe.title}}</h3>
              <div>{{recipe.ingredients}}</div>
            </div>
          <button @click="deleteRecipe(recipe.id)">Delete</button>
        </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "AppRecipes",
  methods: {
    ...mapActions(["deleteRecipe"])
  },
  computed: {
    ...mapGetters(["allRecipes"])
  },
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