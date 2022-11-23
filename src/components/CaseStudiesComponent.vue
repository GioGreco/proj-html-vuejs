<template>
    <section id="case-studies">
        <div class="wrap custom-container">
            <div class="case-studies-top">
                <div class="top-left">
                    <div class="custom-separator"><span></span><span></span></div>
                    <h3>Our recent <span>web design</span> &amp; some examples of past <span>projects</span></h3>
                    <div class="custom-separator"><span></span><span></span></div>
                </div>
                <div class="top-right">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind text. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. Separated they live in Bookmarksgrove.</div>
            </div>
            <div class="cases row my-5 g-0">
                <div v-for="(item,index) in store.caseStudies" :key="index" class="case col-6 col-sm-4 col-md-3">
                    <img :src="item.previewImg" :alt="item.name">
                </div>
            </div>
            <button class="custom-btn rounded-pill text-uppercase">read more</button>
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
            }
        }

        .cases{
            .case{
                img{
                    height: 100%;
                    width: 100%;
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