<template>
  <!-- <v-dialog max-width="600px"> -->
    <!-- <v-btn text class="success">Add new recipe</v-btn> -->
    <!-- <v-card>
      <v-card-title>
        <h2>Add New Recipe</h2>
      </v-card-title>
      <v-card-text> -->
        <v-form class="px-3">
          <v-text-field label="Title" v-model="title"></v-text-field>
          <v-textarea label="Information" v-model="content"></v-textarea>
          <v-btn text class="success mx-0 mt-3" @click="onClick">Add recipe</v-btn>
        </v-form>
      <!-- </v-card-text>
    </v-card> -->
  <!-- </v-dialog> -->
</template>

<script>
import { validationMixin } from 'vuelidate';
// import { email } from 'vuelidate/lib/validators';
export default {
  name: "AppCreateRecipe",
  mixins: [ validationMixin ],
  data() {
    return {
      title: "",
      content: ""
    };
  },
  methods: {
    onClick() {
      console.log(this.title, this.content);
    }
  }
};
</script>

<style>
</style>