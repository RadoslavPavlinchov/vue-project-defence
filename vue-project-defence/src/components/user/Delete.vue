<template>
  <div class="text-center">
    <v-dialog v-model="editDialog" width="500">
      <template v-slot:activator="{ on }">
        <v-btn color="red lighten-1" dark v-on="on">Delete</v-btn>
      </template>
      <v-card>
        <v-container>
          <v-layout row wrap>
            <v-flex xs12>
              <v-card-title>Delete Recipe</v-card-title>
            </v-flex>
          </v-layout>
          <v-divider></v-divider>
          <v-layout row wrap>
            <v-flex xs12>
              <v-card-text>{{recipe.title}}</v-card-text>
            </v-flex>
          </v-layout>
          <v-divider></v-divider>
          <v-layout row wrap>
            <v-flex x12>
              <v-card-actions>
                <v-btn text class="green--text darken-1" @click="editDialog = false">Close</v-btn>
                <v-btn text class="red--text darken-1" @click="onConfirm">Confirm</v-btn>
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
  name: "AppDelete",
  props: ["recipe"],
  data() {
    return {
      editDialog: false
    };
  },
  methods: {
    onConfirm() {
      this.editDialog = false;
      this.$store.dispatch("deleteRecipe", this.recipe.id);
      this.$router.push("/recipes");
    }
  }
};
</script>

<style>
</style>