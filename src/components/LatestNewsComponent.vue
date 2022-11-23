<template>
    <div class="wrap">
        <section id="latest-news" class="custom-container">
            <h3 v-motion :initial="{y: 50, opacity: 0}" :visible="{y: 0, opacity: 1, transition:{type:'spring', damping: 30}}">Latest News &amp; Our <span>Blog</span></h3>
            <div class="custom-separator"><span></span><span></span></div>
            <div class="row gy-5" v-motion :initial="{y: 50, opacity: 0}" :visible="{y: 0, opacity: 1, transition:{type:'spring', damping: 30, delay: 200}}">
                <div v-for="(item,index) in store.latestNews" :key="index" class="news col-12 col-md-6 col-lg-4">
                    <div class="pic-wrapper">
                        <img :src="item.img" :alt="item.description">
                    </div>
                    <div class="news-heading">
                        <span>{{parseDate(item.pubblicated)}} - by {{item.author}}</span>
                        <h5>{{item.title}}</h5>
                    </div>
                </div>
            </div>
            <div class="custom-btn rounded-pill text-uppercase"><div class="text">View all posts</div><div class="layover"></div></div>
        </section>
    </div>
</template>

<script>
import {store} from '../store.js';
import {DateTime} from 'luxon';

    export default {
        name: 'LatestNewsComponent',
        data(){
            return{
                store
            }
        },
        methods: {
            parseDate(date){
                let parsed = DateTime.fromFormat(date, 'dd/LL/yyyy').toFormat('MMMM dd, yyyy');
                return parsed;
            }
        }
    }
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;
@use '../assets/styles/partials/mixins' as *;

.wrap{
    background-color: $white-d2-bg;
}

#latest-news{
    min-height: 850px;
    @include dflex('column');
    align-items: center;
    justify-content: center;

    h3{
        font-size: 48px;
        span{
            color: $active-special-text
        }
    }

    .custom-separator{
        margin: 25px 0;
    }
    
    .row{
        width: 100%;

        >div:first-of-type{
            padding-left: 0;
        }
        >div:last-of-type{
            padding-right: 0;
        }

        .news{
            position: relative;
            cursor: pointer;
            .pic-wrapper{
                overflow: hidden;
                border-radius: 15px;
                img{
                    height: 335px;
                    width: 100%;
                    border-radius: 15px;
                    transition: transform .2s ease-in-out;

                    &:hover{
                        transform: scale(1.2);
                    }
                }
            }

            &:hover .news-heading{
                background-image: $active-special-lingrad;
                color: $white-d1-text;
                transform: translate(-50%, 60%);

                span{
                    color: $white-d1-text;
                }
                h5{
                    &::before{
                        background-color: $white-d1-text;
                    }
                }
            }

            .news-heading{
                position: absolute;
                width: 80%;
                bottom: 0;
                left: 50%;
                transform: translate(-50%, 30%);
                background-color: $white-100;
                padding: 15px 25px;
                border-radius: 5px;
                transition: background-color .5s ease-in-out, color .5s ease-in-out, transform .5s ease-in-out;
                span{
                    color: $grey-d1-text;
                    font-size: .8rem;
                    transition: color .5s ease-in-out;
                }
                h5{
                    position: relative;
                    &::before{
                        content: '';
                        position: absolute;
                        left: -15px;
                        top: 50%;
                        transform: translate(0,-50%);
                        height: 7px;
                        width: 7px;
                        border-radius: 50%;
                        background-color: $active-special-bg;
                        transition: background-color .5s ease-in-out;
                    }
                }
            }

        }
    }

    .custom-btn{
        margin: 100px 0
    }
}
</style>