<template>
  <div>
    This is the recipe details
    {{productId}}
  </div>
</template>

<script>
export default {
  name: "AppRecipeDetails",
  data() {
    return {
      productId: this.$route.params.id
    };
  }
};
</script>

<style>
</style>