<template>
    <section id="partners">
        <div class="custom-container">
            <div v-for="(item, index) in store.partners" :key="index" class="client">
                <img :src="item.img" :alt="item.name">
            </div>
        </div>
    </section>
</template>

<script>
import {store} from '../store.js';

    export default {
        name: 'PartnersComponent',
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

#partners{
    background-color: $white-d2-bg;
    height: 300px;

    .custom-container{
        @include dflex('row');
        justify-content: center;
        height: 100%;
        .client{
            width: calc(100% / 6);
            @include dflex('row');
            justify-content: center;
        }
    }
}
</style>