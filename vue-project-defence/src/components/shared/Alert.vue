<template>
  <v-alert
    error
    dismissible
    @input="onClose"
    type="warning"
    :value="true"
  >{{text}}</v-alert>
</template>

<script>
export default {
    props: ['text'],
    methods: {
        onClose() {
            this.$emit('dismissed')
        }
    }
};
</script>

<style>
</style>