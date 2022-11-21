<template>
    <section id="learn-more" class="custom-container">
        <div class="learnMore-left">
        
        </div>
        <div class="learnMore-right">
            <h3>learn more about our <span>missions</span></h3>
            <div class="custom-separator">
                <span></span><span></span>
            </div>
            <div>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind text. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. Separated they live in Bookmarksgrove.</div>
            <button class="custom-btn rounded-pill text-uppercase">Read More</button>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'LearnMoreComponent'
    }
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;
@use '../assets/styles/partials/mixins' as *;

    #learn-more{
        height: 850px;
        background-color: $white-d2-bg;
        @include dflex('row');
        justify-content: center;

        .learnMore-left{
            width: 60%;
        }

        .learnMore-right{
            width: 40%;
            h3{
                font-size: 48px;
            }
            span{
                color: $palegreen-text
            }
        }
    }
</style>