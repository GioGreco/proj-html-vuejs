<template>
    <!-- Rendere componente dinamico...slider di diverse quote -->
    <div class="quote">
        <div class="quote-content">
            <i class="fa-solid fa-quote-left"></i>
            <div>When it comes to barbequing, there are two main schools of thought for the techniques that you can use. Freshly scrambled eggs with applewood smoked bacon are amazing!</div>
            <div class="person-pic"></div>
            <p class="person-name text-uppercase">Lisa Durbin</p>
            <span class="person-role">Client</span>
        </div>
        <div class="layover"></div>
    </div>
</template>

<script>
    export default {
        name: 'QuoteComponent'
    }
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;
@use '../assets/styles/partials/mixins' as *;

.quote{
    height: 750px;
    background-image: url('../../public/images/four-businesspeople-in-a-boardroom-with-paperwork-PC4V8H4.jpg');
    background-size: cover;
    background-position: center;
    position: relative;

    .quote-content{
        @include dflex('column');
        justify-content: center;
        align-items: center;
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        z-index: 450;

        i, p{
            color: $palegreen-text;
        }
    }


    .layover{
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: $dark-tr-bg;
        z-index: 400;
    }
}

</style>