<template>
  <div>
    <h1>This is the recipe details</h1>
    <h3>{{this.$route.params.id}}</h3>
    <!-- {{recipe.desctiption}} -->
  </div>
</template>

<script>
export default {
  name: "AppRecipe",
  data() {
    return {

    };
  },
  computed: {
    // recipe() {
    //   return this.$store.state.recipes.find(rec => rec.id === this.$route.params.id)
    // }
  }
};
</script>

<style>
</style>