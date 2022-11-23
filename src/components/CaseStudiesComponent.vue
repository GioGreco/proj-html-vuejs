<template>
    <section id="case-studies">
        <div class="wrap custom-container">
            <div class="case-studies-top">
                <div class="top-left">
                    <div class="custom-separator"><span></span><span></span></div>
                    <h3 class="my-3" v-motion :initial="{x: 50, opacity: 0}" :visible="{x: 0, opacity: 1, transition:{type:'spring', mass: 1.5}}">Our recent <span>web design</span> &amp; some examples of past <span>projects</span></h3>
                    <div class="custom-separator"><span></span><span></span></div>
                </div>
                <div class="top-right" v-motion :initial="{x: 50, opacity: 0}" :visible="{x: 0, opacity: 1, transition:{type:'spring', mass: 1.5}}">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind text. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. Separated they live in Bookmarksgrove.</div>
            </div>
            <div class="cases row my-5 g-0">
                <div v-for="(item,index) in store.caseStudies" :key="index" class="case col-6 col-sm-4 col-md-3">
                    <img :src="item.previewImg" :alt="item.name">
                </div>
            </div>
            <button class="custom-btn rounded-pill text-uppercase" v-motion :initial="{y: 40, opacity: 0}" :visible="{y: 0, opacity: 1, transition:{type:'spring', mass: 1.5}}">read more</button>
        </div>
    </section>
</template>

<script>
import {store} from '../store.js';
export default {
        name: 'CaseStudiesComponent',
        data(){
            return{
                store
            }
        }
    }
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;
@use '../assets/styles/partials/mixins' as *;

#case-studies{
    background-color: $white-d1-bg;
    overflow: hidden;
    .wrap{
        @include dflex('column');
        align-items: center;
        justify-content: center;
        padding: 150px 0;

        .case-studies-top{
            @include dflex('row');
            justify-content: center;
            .top-left{
                width: 46%;
                h3{
                    font-size: 48px;
                }
                span{
                    color: $palegreen-text
                }
            }
            .top-right{
                width: 54%;
                align-self: flex-end;
                padding: 0 20px;
                line-height: 35px;
            }
        }

        .cases{
            width: 100%;
            .case{
                position: relative;
                width: calc((100vw - 52px) / 4);
                height: calc((100vw - 52px) / 4);
                margin: 1px;
                img{
                    position: absolute;
                    height: 100%;
                    width: 100%;
                    border-radius: 5px;
                    transition: transform .3s ease-in-out;

                    &:hover{
                        transform: scale(1.1);
                        z-index: 400;
                    }
                }
            }
        }
    }

    // .case-studies-top{
    //     @include dflex('row');
    //     justify-content: center;
    //     .top-left{
    //         width: 45%;
    //         h3{
    //             font-size: 48px;
    //         }
    //         span{
    //             color: $palegreen-text
    //         }
    //     }
    //     .top-right{
    //         width: 55%;
    //         align-self: flex-end;
    //         padding: 0 20px;
    //     }
    // }

    // .cases{
    //     .case{
    //         img{
    //             height: 100%;
    //             width: 100%;
    //         }
    //     }
    // }
}
</style>