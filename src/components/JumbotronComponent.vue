<template>
    <div id="jumbo">
        <img src="../../public/images/Group-36-2x.png" alt="Office dressed red haired woman sittng on a chair while reading notes from a tablet">
        <div class="wrapper">
            <div class="jumbo-info">
                <span class="text-uppercase">17 years of experience</span>
                <h2>We are a</h2>
                <h2>Web Design <span>Agency</span></h2>
                <div class="custom-separator">
                    <span></span><span></span>
                </div>
                <div class="description">
                    Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind text. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. Separated they live in Bookmarksgrove.
                </div>
                <button class="custom-btn rounded-pill text-uppercase">Read More</button>
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

                > span{
                    letter-spacing: 8px;
                }

                span{
                    color: $palegreen-text;
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