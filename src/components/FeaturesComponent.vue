<template>
    <section id="features">
        <div class="wrap custom-container">
            <div class="features-left">
                <h2 v-motion :initial="{x: 50, opacity: 0}" :visible="{x: 0, opacity: 1, transition:{type:'spring', mass: 1.5}}">We Are Here To Make Your <span>Website</span> Look More <span>Elegant</span> And Stylish!</h2>
                <div class="custom-separator my-4" v-motion :initial="{x: 50, opacity: 0}" :visible="{x: 0, opacity: 1, transition:{type:'spring', mass: 1.5, delay: 300}}">
                    <span></span><span></span>
                </div>
                <button class="custom-btn rounded-pill text-uppercase" v-motion :initial="{scale: 1.1}" :visible="{scale: 1, transition: {type: 'spring', mass: 2, delay: 400}}">View All</button>
            </div>
            <div class="features-right">
                <div class="features-wrap">
                    <div v-for="(item,index) in store.features" :key="index" class="feature" v-motion :initial="{x: 50, opacity: 0}" :visible="{x: 0, opacity: 1, transition:{type:'spring', mass: 1.5, delay: index * 200}}">
                        <i></i>
                        <h6>{{item.type}}</h6>
                        <span>{{item.description}}</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import {store} from '../store.js';

    export default {
        name: 'FeaturesComponent',
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


    #features{
        background-color: $white-d1-bg;
        overflow: hidden;

        .wrap{
            height: 850px;
            @include dflex('row');
            justify-content: center;
            .features-left{
                width: 40%;

                h2{
                    font-size: 60px;
                    margin: 0;
                }

                span{
                    color: $active-special-text
                }
            }

            .features-right{
                width: 60%;
                padding: 40px;
                .features-wrap{
                    width: 100%;
                    @include dflex('row');
                    flex-wrap: wrap;
                    .feature{
                        width: calc(50% - 40px);
                        padding: 20px;
                        margin: 15px;
                        background-color: $white-100;
                        border-radius: 10px;
                        box-shadow: 0 0 5px 10px $white-d2-bg;

                        h6{
                            font-size: 24px;
                        }
                        span{
                            display: block;
                            height: 75px;
                            width: 100%;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            display: -webkit-box !important;
                            -webkit-line-clamp: 3;
                            -webkit-box-orient: vertical;
                            white-space: normal;
                        }
                    }
                }
            }
        }
    }
</style>