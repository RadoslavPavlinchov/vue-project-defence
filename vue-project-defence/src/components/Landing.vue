<template>
    <v-container fluid fill-height class="landing" style="max-height">
        <v-layout justify-center align-center column pa-5>
            <div class="display-4 white--text font-weight-bold">HEALTHY MEALS</div>
            <div class="display-4 white--text font-weight-bold">FOR YOUR TABLE</div>
            <div class="display-1 white--text">Finally find a place where you can get all of your recipes at once.</div>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    name: 'AppLanding'
};
</script>

<style scoped>
.landing {
    background-image: url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80');
    background-size: cover;
    /* background-attachment: fixed;
    background-size: 100% 100%; */
}
</style>