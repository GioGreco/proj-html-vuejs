<template>
    <section id="learn-more">
        <div class="wrapper">
            <div class="learnMore-left">
                <div class="wrapper">
                    <img class="pic-behind" src="/images/busy-architect-PYVKWM4-1024x872.jpg" alt="" v-motion :initial="{x: -5}" :visible="{x: 5, transition:{repeat: Infinity, repeatType: 'mirror', type: 'spring', stiffness: 10, mass: 5}}">
                    <div class="green-layover"></div>
                    <img class="pic-front" src="/images/businesswoman-analysing-document-P8WSNMC-1024x820.jpg" alt="" v-motion :initial="{x: -10}" :visible="{x: 10, transition:{repeat: Infinity, repeatType: 'mirror', type: 'spring', stiffness: 10, mass: 5}}">
                </div>
            </div>
            <div class="learnMore-right">
                <h3>learn more about our <span>missions</span></h3>
                <div class="custom-separator my-4">
                    <span></span><span></span>
                </div>
                <div>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind text. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. Separated they live in Bookmarksgrove.</div>
                <div class="custom-btn rounded-pill text-uppercase mt-5"><div class="text">Learn more</div><div class="layover"></div></div>
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

                .wrapper{
                    width: 80%;
                    height: max-content;
                    border-top-right-radius: 20px;
                    border-bottom-right-radius: 20px;
                    position: relative;
                    .pic-behind{
                        width: 100%;
                        border-top-right-radius: 20px;
                        border-bottom-right-radius: 20px;
                    }
                    .green-layover{
                        position: absolute;
                        width: 100%;
                        height: 100%;
                        border-top-right-radius: 20px;
                        border-bottom-right-radius: 20px;
                        background-color: rgba($palered-bg, 0.6);
                    }

                    .pic-front{
                        position: absolute;
                        width: 100%;
                        height: 100%;
                        top: 15%;
                        left: 10%;
                        border-radius: 20px;
                    }
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