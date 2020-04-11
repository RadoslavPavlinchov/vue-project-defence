<template>
  <v-card class="footer" >
  <v-footer color="green darken-3" dark class="font-weight-medium">
    <v-col
      class="text-center"
      cols="12"
    >
      {{ new Date().getFullYear() }} — <strong>Taste The Healthy Ones</strong>
    </v-col>
  </v-footer>
  </v-card>
</template>

<script>
export default {
    name: 'AppFooter'
};
</script>

<style scoped>
.footer{
  margin-top: 20%;
}
</style>