<template>
    <section id="case-studies" class="custom-container">
        <div class="case-studies-top">
            <div class="top-left">
                <div class="custom-separator"><span></span><span></span></div>
                <h3>Our recent <span>web design</span> &amp; some examples of past <span>projects</span></h3>
                <div class="custom-separator"><span></span><span></span></div>
            </div>
            <div class="top-right">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind text. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. Separated they live in Bookmarksgrove.</div>
        </div>
        <div></div>
        <button class="custom-btn rounded-pill text-uppercase">read more</button>
    </section>
</template>

<script>
    export default {
        name: 'CaseStudiesComponent'
    }
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;
@use '../assets/styles/partials/mixins' as *;

#case-studies{
    min-height: 850px;
    background-color: $white-100;
    @include dflex('column');
    align-items: center;

    .case-studies-top{
        @include dflex('row');
        justify-content: center;
        .top-left{
            width: 45%;
        }
        .top-right{
            width: 55%;
        }
    }
}
</style>