<template>
    <span>
        <app-landing></app-landing>
        <app-landing-details></app-landing-details>
        <app-categories></app-categories>
    </span>
</template>

<script>
import AppLanding from '@/components/Landing';
import AppLandingDetails from '@/components/LandingDetails';
import AppCategories from '@/components/Categories';


export default {
    name: 'AppHome',
    components: {
        AppLanding,
        AppLandingDetails,
        AppCategories,

    }
};
</script>