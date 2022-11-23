<template>
    <div class="wrap">
        <section id="contact-us" class="custom-container">
            <div class="new-project" v-motion :initial="{x: -100, opacity: 0}" :visible="{x: 0, opacity: 1, transition:{type:'spring', damping: 30}}">
                <div class="text-center">
                    <span>Are You Ready?</span>
                    <h4>Start a New project</h4>
                </div>
                <div class="w-100 d-flex justify-content-center">
                    <input type="email" placeholder="Enter Your Email Address">
                    <button class="text-uppercase">submit</button>
                </div>
            </div>
            <div class="job-talk" v-motion :initial="{x: 100, opacity: 0}" :visible="{x: 0, opacity: 1, transition:{type:'spring', damping: 30}}">
                <div class="text-center">
                    <span>What Are You Waiting for?</span>
                    <h4>Let's Talk About Work</h4>
                </div>
                <button class="custom-btn rounded-pill text-uppercase">start now</button>
            </div>
        </section>
    </div>
</template>

<script>
    export default {
        name: 'ContactUsComponent'
    }
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;
@use '../assets/styles/partials/mixins' as *;

.wrap{
    background-color: $white-d2-bg;
}

#contact-us{
    @include dflex('row');
    overflow: hidden;

    .new-project{
        @include dflex('column');
        align-items: center;
        justify-content: space-between;
        color: $white-100;
        padding: 75px 0;
        height: 315px;
        width: 49%;
        border-radius: 10px;
        background-image: $linGrad-lightblack-black100;

        span{
            color: $grey-d1-text;
        }
        h4{
            font-size: 32px;
        }
        input{
            background-color: $dark-d1-bg;
            color: $grey-d1-text;
            border: none;
            width: 40%;
            border-top-left-radius: 20px;
            border-bottom-left-radius: 20px;
            padding: 10px 10px;
            outline: none;
        }
        button{
            background-color: $dark-d1-bg;
            color: $grey-d1-text;
            border: none;
            border-top-right-radius: 20px;
            border-bottom-right-radius: 20px;
            padding: 10px 10px;
        }
    }

    .job-talk{
        @include dflex('column');
        align-items: center;
        justify-content: space-between;
        color: $white-100;
        padding: 75px 0;
        height: 315px;
        width: 49%;
        border-radius: 10px;
        background-image: $active-special-lingrad;
        span{
            color: $grey-d1-text;
        }
        h4{
            font-size: 32px;
        }
        button{
            background-image: $linGrad-lightblack-black100;
            padding: 10px 30px;
            color: $grey-d1-text
        }
    }
}

</style>