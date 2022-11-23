<template>
    <div id="social-banner">
        <div>
            <span>(001) 88451234</span>
            <span>88455438</span>
        </div>
        <div>
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-pinterest"></i>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'SocialBannerComponent'
    }
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/mixins' as *;
@use '../assets/styles/partials/variables' as *;

#social-banner{
    @include dflex('row');
    height: 35px;
    padding: 0 15px;
    background-color: $dark-d3-bg;
    color: $grey-d1-text;

    div{
        >*{
            margin: 0 10px;
        }
        i{
            cursor: pointer;
        }
    }
}
</style>