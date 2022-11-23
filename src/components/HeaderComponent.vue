<template>
    <header>
        <div class="h-100">
            <a href="#"><img src="/images/cropped-Group-39-2x.png" alt="Phlox Logo"></a>
        </div>
        <BrowseSectionsComponent/>
        <div class="h-100">
            <button class="custom-btn rounded-pill text-uppercase">Purchase</button>
            <i class="fa-solid fa-magnifying-glass"></i>
        </div>
    </header>
</template>

<script>
import BrowseSectionsComponent from './BrowseSectionsComponent.vue';

    export default {
        name: 'HeaderComponent',
        components: {
            BrowseSectionsComponent
        }
    }
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/mixins' as *;
@use '../assets/styles/partials/variables' as *;

header{
    @include dflex('row');
    height: 100px;
    padding: 0px 3%;
    background-color: $white-100;
    position: sticky;
    top: 0;
    left: 0;
    z-index: 500;

    > div{
        @include dflex('row');
        width: 200px
    }

    i{
        background: -webkit-linear-gradient(150deg, rgb(226, 127, 107) 20%, $palered-bg 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        cursor: pointer;
    }
}

</style>