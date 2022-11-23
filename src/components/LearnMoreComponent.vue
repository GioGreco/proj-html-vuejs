<template>
    <section id="learn-more">
        <div class="wrapper">
            <div class="learnMore-left">
                <img class="pic-behind" src="/images/busy-architect-PYVKWM4-1024x872.jpg" alt="">
                <!-- <div class="green-layover"></div> -->
                <!-- <img class="pic-front" src="/images/businesswoman-analysing-document-P8WSNMC-1024x820.jpg" alt=""> -->
            </div>
            <div class="learnMore-right">
                <h3>learn more about our <span>missions</span></h3>
                <div class="custom-separator my-4">
                    <span></span><span></span>
                </div>
                <div>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind text. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. Separated they live in Bookmarksgrove.</div>
                <button class="custom-btn rounded-pill text-uppercase mt-5">Read More</button>
            </div>
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
        background-color: $white-d2-bg;
        .wrapper{
            @include dflex('row');
            height: 850px;
            justify-content: center;

            .learnMore-left{
                width: 60%;
                .pic-behind{
                    width: 80%;
                }
            }

            .learnMore-right{
                width: 40%;
                h3{
                    font-size: 48px;
                }
                span{
                    color: $active-special-text
                }
            }
        }
    }
</style>