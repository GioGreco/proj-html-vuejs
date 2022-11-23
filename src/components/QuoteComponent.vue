<template>
    <div class="quote">
        <div class="quote-content">
            <div class="top d-flex flex-column align-items-center" v-motion :initial="{scale: .9}" :visible="{scale: 1, transition:{type: 'spring', damping: 50, delay: 500}}">
                <i class="fa-solid fa-quote-left"></i>
                <div class="w-50 text-center mt-5">When it comes to barbequing, there are two main schools of thought for the techniques that you can use. Freshly scrambled eggs with applewood smoked bacon are amazing!</div>
            </div>
            <div class="person d-flex flex-column align-items-center" v-motion :initial="{y: 50, opacity: 0}" :visible="{y: 0, opacity: 1, transition:{type:'spring', damping: 30}}">
                <div class="person-pic mb-4"></div>
                <p class="person-name text-uppercase mb-1">Lisa Durbin</p>
                <span class="person-role">Client</span>
            </div>
        </div>
        <div class="layover"></div>
    </div>
</template>

<script>
    export default {
        name: 'QuoteComponent'
    }
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;
@use '../assets/styles/partials/mixins' as *;

.quote{
    height: 750px;
    background-image: url('/images/four-businesspeople-in-a-boardroom-with-paperwork-PC4V8H4.jpg');
    background-size: cover;
    background-position: center;
    position: relative;

    .quote-content{
        @include dflex('column');
        justify-content: center;
        align-items: center;
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        z-index: 450;

        .top{
            i{
                font-size: 48px;
            }
            div{
                font-size: 24px;
            }
        }

        i, p{
            color: $active-special-text;
        }

        div, span{
            color: $white-d1-text
        }

        .person{
            margin-top: 100px;
            .person-pic{
                height: 85px;
                width: 85px;
                border-radius: 50%;
                background-image: url('/images/businesswoman-analysing-document-P8WSNMC-1024x820.jpg');
                background-size: cover;
            }
        }
    }


    .layover{
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: $dark-tr-bg;
        z-index: 400;
    }
}

</style>