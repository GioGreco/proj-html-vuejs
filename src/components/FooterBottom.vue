<template>
    <div class="footer-bottom">
        <span class="text-uppercase">&copy; 2020 phlox business theme.</span>
        <div class="socials">
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-pinterest"></i>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'FooterBottom'
    }
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/mixins' as *;
@use '../assets/styles/partials/variables' as *;
.footer-bottom{
    padding: 0 25px;
    height: 100px;
    color: $grey-d1-text;
    @include dflex('row');
    background-image: $linGrad-lightblack-black100;
    .socials{
        @include dflex('row');
        justify-content: space-around;
        width: 8%;
    }
}
</style>