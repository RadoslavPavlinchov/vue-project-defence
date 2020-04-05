<template>
  <!-- <div>
    <h1>This is the recipe details</h1>
    <h3>{{this.$route.params.id}}</h3>
    {{details}}
  </div>-->
  <v-card width="700" height="700" class="mx-auto">
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="headline">{{details.title}}</v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <v-img src="https://images.unsplash.com/photo-1559978137-8c560d91e9e1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80" height="450"></v-img>

    <v-card-text>Visit ten places on our planet that are undergoing the biggest changes today.</v-card-text>

    <v-card-text>
      <ul>
        <li v-for="(ingredient, i) in details.ingredients" :key="i">{{ingredient}}</li>
      </ul>
    </v-card-text>

    <v-card-actions>
      <v-btn color="green lighten-1" dark>Edit</v-btn>
      <v-btn color="green lighten-1" dark>Delete</v-btn> 
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapActions } from "vuex";
export default {
  
  name: "AppRecipe",
  props: ['recipe'],
  computed: {
    details() {
      return this.$store.state.recipes.recipes.find(
        x => x.id === +this.$route.params.id
      );
    }
  },
    methods: {
    ...mapActions(["deleteRecipe"])
  },

};
</script>

<style>
</style>