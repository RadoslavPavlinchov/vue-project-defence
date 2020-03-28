<template>
  <div class="recipes">
    <h1>Recipes Page</h1>
    <div class="recipe-container">
      <div v-for="recipe in allRecipes" :key="recipe.id">
        <div class="recipe-box">
          <!-- <img :src="recipe.thumbnail" /> -->
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

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  name: "AppRecipes",
  components: {},
  data() { return { }; },
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