<template>
    <div id="jumbo">
        <img src="/images/Group-36-2x.png" alt="Office dressed red haired woman sittng on a chair while reading notes from a tablet">
        <div class="wrapper">
            <div class="jumbo-info">
                <div class="position-relative"><span class="experience text-uppercase position-absolute" v-motion :initial="{opacity: 0, left: -100}" :enter="{opacity: 1, left: 0, transition:{type: 'spring', mass: 2}}">17 years of experience</span></div>
                <h2>We are a</h2>
                <h2>Web Design <span class="position-relative"><span class="position-absolute" v-motion :initial="{opacity: 0, left: 5, bottom: -80}" :enter="{opacity: 1, left: 5, bottom: -1, transition:{type: 'spring', mass: 2}}">Agency</span></span></h2>
                <div class="custom-separator" v-motion :initial="{x: 400}" :enter="{x:0, transition:{type:'spring', stiffness: 30}}">
                    <span></span><span></span>
                </div>
                <div class="description" v-motion :initial="{scale: 1.1}" :enter="{scale: 1, transition: {type: 'spring', mass: 2}}">
                    Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind text. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. Separated they live in Bookmarksgrove.
                </div>
                <button class="custom-btn rounded-pill text-uppercase" v-motion :initial="{scale: 1.1}" :enter="{scale: 1, transition: {type: 'spring', mass: 2}}">Read More</button>
                <div class="socials text-uppercase">
                    <span>Facebook</span>
                    <span>Instagram</span>
                    <span>Youtube</span>
                    <span>Twitter</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'JumbotronComponent',

    }
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/mixins' as *;
@use '../assets/styles/partials/variables' as *;

    #jumbo{
        height: 850px;
        background-color: $white-d2-bg;
        position: relative;
        overflow: hidden;
        @include dflex('column');
        justify-content: center;

        img{
            position: absolute;
            right: 0;
            top: 50%;
            transform: translate(25%, -50%) scale(.7);
        }

        .wrapper{
            width: 85%;
            margin: 0 auto;

            .jumbo-info{
                width: 45%;
                @include dflex('column');
                justify-content: space-around;

                h2{
                    font-size: 60px;
                    margin: 0;
                }


                .experience{
                    letter-spacing: 8px;
                    width: max-content;
                    top: -15px;
                }

                span{
                    color: $active-special-text;
                }

                .custom-separator{
                    margin: 20px 0 40px 0;
                }

                .custom-btn{
                    margin: 75px 0;
                }
                .socials{
                    span{
                        color: $black-l1-text;
                        font-weight: bold;
                        font-size: .8rem;

                        &:not(:last-of-type)::after{
                            content: '-';
                            margin: 0 4px;
                        }
                    }
                }
            }
        }
        
    }

</style>