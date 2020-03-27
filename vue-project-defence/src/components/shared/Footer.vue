<template>
  <v-footer absolute color="green darken-3" dark>
    <v-col
      class="text-center"
      cols="12"
    >
      {{ new Date().getFullYear() }} — <strong>Taste The Healthy Ones</strong>
    </v-col>
  </v-footer>
</template>

<script>
export default {
    name: 'AppFooter'
};
</script>

<style scoped>

</style>