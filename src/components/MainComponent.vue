<template>
    <main>
        <FeaturesComponent/>
        <LearnMoreComponent/>
        <CaseStudiesComponent/>
        <QuoteComponent/>
        <LatestNewsComponent/>
        <ContactUsComponent/>
        <PartnersComponent/>
    </main>
</template>

<script>
import FeaturesComponent from './FeaturesComponent.vue';
import LearnMoreComponent from './LearnMoreComponent.vue';
import CaseStudiesComponent from './CaseStudiesComponent.vue';
import QuoteComponent from './QuoteComponent.vue';
import LatestNewsComponent from './LatestNewsComponent.vue';
import ContactUsComponent from './ContactUsComponent.vue';
import PartnersComponent from './PartnersComponent.vue';

    export default {
        name: 'MainComponent',
        components: {
            FeaturesComponent,
            LearnMoreComponent,
            CaseStudiesComponent,
            QuoteComponent,
            LatestNewsComponent,
            ContactUsComponent,
            PartnersComponent
        }
    }
</script>

<style lang="scss" scoped>

</style>