<template>
  <div>
    <h1>This is the recipe details</h1>
    <h3>{{this.$route.params.id}}</h3>
    {{details.ingredients}}
  </div>
</template>

<script>

export default {
  name: "AppRecipe",
  computed: {
    details() {
      // return this.$store.state.recipes.recipes.find(x => x.id === +this.$route.params.id)
      return this.$store.state.recipes.recipes[`id-${+this.$route.params.id}`]
    }
  },
};
</script>

<style>
</style>