<template>
  <div class="text-center">
    <v-dialog v-model="editDialog" width="500">
      <template v-slot:activator="{ on }">
        <v-btn color="green lighten-1" dark v-on="on">Edit</v-btn>
      </template>
      <v-card>
        <v-container>
          <v-layout row wrap>
            <v-flex xs12>
              <v-card-title>Edit Recipe</v-card-title>
            </v-flex>
          </v-layout>
          <v-divider></v-divider>
          <v-layout row wrap>
            <v-flex xs12>
              <v-card-text>
                <v-text-field 
                name="title" 
                label="Title" 
                id="title" 
                required 
                v-model="editedTitle"
                ></v-text-field>
                <v-text-field
                  name="description"
                  label="Description"
                  id="description"
                  multi-line
                  v-model="editedDescription"
                  required
                ></v-text-field>
              <v-text-field
                name="ingredients"
                label="Ingredients"
                id="ingredients"
                v-model="editedIngredients"
                required
              ></v-text-field>
              </v-card-text>
            </v-flex>
          </v-layout>
          <v-divider></v-divider>
          <v-layout row wrap>
            <v-flex x12>
              <v-card-actions>
                <v-btn text class="green--text darken-1" @click="editDialog = false">Close</v-btn>
                <v-btn text class="green--text darken-1" @click="onSaveChanges">Save</v-btn>
              </v-card-actions>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  props: ["recipe"],
  data() {
    return {
      editDialog: false,
      editedTitle: this.recipe.title,
      editedDescription: this.recipe.description,
      editedIngredients: this.recipe.ingredients
    };
  },
  methods: {
      onSaveChanges() {
          if(this.editedTitle.trim() === '' && this.editedDescription.trim() === '') {
              return
          }
          this.editDialog = false
          this.$store.dispatch('updateRecipe', {
              id: this.recipe.id,
              title: this.editedTitle,
              description: this.editedDescription,
              ingredients: this.editedIngredients
          })
      }
  }
};
</script>

<style>
</style>