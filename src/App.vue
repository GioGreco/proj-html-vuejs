<template>
  <SocialBannerComponent/>
  <HeaderComponent/>
  <JumbotronComponent/>
  <MainComponent/>
  <FooterComponent/>
</template>

<script>
import {store} from './store.js';
import SocialBannerComponent from './components/SocialBannerComponent.vue';
import HeaderComponent from './components/HeaderComponent.vue';
import JumbotronComponent from './components/JumbotronComponent.vue';
import MainComponent from './components/MainComponent.vue';
import FooterComponent from './components/FooterComponent.vue';


  export default {
    components: {
      SocialBannerComponent,
      HeaderComponent,
      JumbotronComponent,
      MainComponent,
      FooterComponent
    },
    data(){
      return{
        store
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
