<template>
  <div class="text-center">
    <v-dialog v-model="addToFavoritesDialog">
      <template v-slot:activator="{ on }">
        <v-btn color="green lighten-1" dark v-on="on">
            {{recipeIsAdded ? 'Unfavorite' : 'Favorite+'}}
        </v-btn>
      </template>
      <v-card>
        <v-container>
          <v-layout row wrap>
            <v-flex xs12>
              <v-card-title v-if="recipeIsAdded">RemoveFrom Favorites</v-card-title>
              <v-card-title v-else>Add Recipe To Favorites</v-card-title>
            </v-flex>
          </v-layout>
          <v-divider></v-divider>
          <v-layout row wrap>
            <v-flex xs12>
                <v-card-text>You can the right thing later on</v-card-text>
            </v-flex>
          </v-layout>
          <v-layout row wrap>
            <v-flex xs12>
                <v-card-actions>
                    <v-btn class="red--text darken-1" text @click="addToFavoritesDialog = false">Cancel</v-btn>
                    <v-btn class="green--text darken-1" text @click="onConfirm">Confirm</v-btn>
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
    name: 'AppAddToFav',
    props: ['recipeId'],
    data() {
        return {
            addToFavoritesDialog: false
        }
    },
    computed: {
        recipeIsAdded() {
            return this.$store.getters.user.favoriteRecipes.findIndex(recipeId => {
                return recipeId === this.recipeId
            }) >= 0
        }
    },
    methods: {
        onConfirm() {
            this.addToFavoritesDialog = false
            if (this.recipeIsAdded) {
                this.$store.dispatch('removeRecipeFromFavs', this.recipeId)
            } else {
                this.$store.dispatch('addRecipeToFavs', this.recipeId)
            }
        }
    }
};
</script>

<style>
</style>