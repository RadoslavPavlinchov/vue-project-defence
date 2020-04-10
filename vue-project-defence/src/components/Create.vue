<template>
  <!-- <v-container>
    <v-row>
      <v-col md="3" cols="12">
        <h1>Create recipe</h1>
        <div class="field">
          <label for="title">Title</label>
          <input type="text" id="title" v-model="title" />
        </div>
        <div class="field">
          <label for="thumbnail">Thumbnail URL</label>
          <input type="text" id="thumbnail" v-model="imageUrl" />
        </div>
        <div class="field">
          <label for="ingredients">Ingredients</label>
          <input type="text" id="ingredients" v-model="ingredients" />
        </div>
        <div class="field">
          <label for="description">Description</label>
          <input type="text" id="description" v-model="description" />
        </div>
        <v-btn
          color="green lighten-1"
          dark
          :disabled="!formIsValid"
          @click="createRecipeHere"
        >Create Recipe</v-btn>
      </v-col>
      <v-col md="9" cols="12">
        <v-card width="700" height="700" class="mx-auto">
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="headline">{{title}}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-img :src="imageUrl"></v-img>

          <v-card-text>{{description}}</v-card-text>

          <v-card-text>
            <ul>
              <li v-for="(ingredient, i) in ingredients" :key="i">ingredient</li>
            </ul>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>-->
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <h4>Create a new Recipe</h4>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs12>
        <form @submit.prevent="onCreateRecipe">
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-text-field name="title" label="Title" id="title" v-model="title" required></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-btn raised dark color="green lighten-1" @click="onPickFile">Upload Image</v-btn>
              <input
                type="file"
                style="display: none"
                ref="fileInput"
                accept="image/*"
                @change="onFilePicked"
              />
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <img :src="imageUrl" height="310" />
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-text-field
                name="ingredients"
                label="Ingredients"
                id="ingredients"
                v-model="ingredients"
                required
              ></v-text-field>
            </v-flex>
          </v-layout>

          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-text-field
                name="description"
                label="Description"
                id="description"
                multi-line
                v-model="description"
                required
              ></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-btn
                color="green lighten-1"
                dark
                :disabled="!formIsValid"
                type="submit"
              >Create Recipe</v-btn>
            </v-flex>
          </v-layout>
        </form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
// import { mapActions } from "vuex"; //reverted back
export default {
  name: "AppCreate",
  data() {
    return {
      id: "",
      title: "",
      description: "",
      creatorId: "",
      imageUrl: "",
      ingredients: [],
      date: "",
      image: null
    };
  },
  computed: {
    formIsValid() {
      return (
        this.title !== "" &&
        this.description !== "" &&
        this.imageUrl !== "" &&
        this.ingredients !== ""
      );
    }
  },
  methods: {
    // ...mapActions(["createRecipe"]),  //reverted back
    onCreateRecipe() {
      // this.createRecipe(this.recipe);
      if (!this.formIsValid) {
        return;
      }
      if (!this.image) {
        return;
      }
      const recipeObj = {
        title: this.title,
        description: this.description,
        // creatorId: this.title,
        image: this.image,
        ingredients: this.ingredients,
        date: new Date()
      };
      // this.createRecipe(recipeObj);
      this.$store.dispatch("createRecipe", recipeObj);
      this.$router.push("/recipes");
    },
    onPickFile() {
      this.$refs.fileInput.click();
    },
    onFilePicked() {
      const files = event.target.files;
      let filename = files[0].name;
      if (filename.lastIndexOf(".") <= 0) {
        return alert("Please add a valid file!");
      }
      const fileReader = new FileReader();
      fileReader.addEventListener("load", () => {
        this.imageUrl = fileReader.result;
      });
      fileReader.readAsDataURL(files[0]);
      this.image = files[0];
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