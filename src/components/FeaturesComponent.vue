<template>
    <section id="features" class="custom-container">
        <div class="features-left">
            <h2>We Are Here To Make Your <span>Website</span> Look More <span>Elegant</span> And Stylish!</h2>
            <div class="custom-separator">
                <span></span><span></span>
            </div>
            <button class="custom-btn rounded-pill text-uppercase">View All</button>
        </div>
        <div class="features-right">

        </div>
    </section>
</template>

<script>
    export default {
        name: 'FeaturesComponent'
    }
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;
@use '../assets/styles/partials/mixins' as *;


    #features{
        height: 850px;
        background-color: $white-100;
        @include dflex('row');
        justify-content: center;

        .features-left{
            width: 40%;

            h2{
                font-size: 60px;
                margin: 0;
            }

            span{
                color: $palegreen-text
            }
        }

        .features-right{
            width: 60%;
        }
    }
</style>