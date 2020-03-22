<template>
    <v-container fluid fill-height class="landing" style="max-height: 100vh;">
        <v-layout justify-center align-center column pa-5>
            <div class="display-4 white--text">HEALTHY MEALS</div>
            <div class="display-4 white--text">FOR YOUR TABLE</div>
            <div class="display-1 white--text">Finally be a foodie at home with fresh, chef-prepared meals delivered daily to your door.</div>
            <v-btn class="green lighten-1">
            <v-icon color="white">expand_more</v-icon>
            </v-btn>
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
    background: url('https://images.unsplash.com/photo-1466637574441-749b8f19452f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2000&q=80');
    background-size: cover;
    width: 100%;
    height: 100%;
}
</style>