<template>
    <span>
        <app-landing></app-landing>
        <app-landing-details></app-landing-details>
        <app-categories></app-categories>
    </span>
</template>

<script>
import AppLanding from '@/components/core/Landing';
import AppLandingDetails from '@/components/core/LandingDetails';
import AppCategories from '@/components/core/Categories';

export default {
    name: 'AppHome',
    components: {
        AppLanding,
        AppLandingDetails,
        AppCategories,
    },
};
</script>