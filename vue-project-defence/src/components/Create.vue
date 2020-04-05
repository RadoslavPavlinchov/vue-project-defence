<template>
  <v-container>
    <v-row>
      <v-col md="3" cols="12">
        <h1>Recipe Create Page</h1>
        <div class="field">
          <label for="title">Title</label>
          <input type="text" id="title" v-model="recipe.title" />
        </div>
        <div class="field">
          <label for="thumbnail">Thumbnail URL</label>
          <input type="text" id="thumbnail" v-model="recipe.thumbnail" />
        </div>
        <div class="field">
          <label for="description">Description</label>
          <input type="text" id="description" v-model="recipe.description" />
        </div>
        <div class="field">
          <label for="ingredients">Ingredients</label>
          <input type="text" id="ingredients" v-model="recipe.ingredients" />
        </div>
        <v-btn color="green lighten-1" dark @click="createRecipe">Create Recipe</v-btn>
      </v-col>
      <v-col md="9" cols="12">

          <v-card width="700" height="700" class="mx-auto">
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="headline">{{recipe.title}}</v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <v-img :src="recipe.thumbnail"></v-img>

    <v-card-text>{{recipe.description}}</v-card-text>

    <v-card-text>
      <ul>
        <li v-for="(ingredient, i) in recipe.ingredients" :key="i">ingredient</li>
      </ul>
    </v-card-text>
  </v-card>

      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  name: "AppCreate",
  data() {
    return {
      recipe: {}
    };
  },
  methods: {
    createRecipe() {
      console.log('Hello');
    }
  }
};
</script>

<style lang="scss" scoped>
.field {
  input {
    border: 1px solid black;
  }
  label {
    display: block;
  }
  padding-bottom: 10px;
}
</style>