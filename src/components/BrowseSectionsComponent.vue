<template>
    <ul>
        <li v-for="(item, index) in store.websiteSections" class="text-uppercase"><a :href="item.link">{{item.name}}</a></li>
    </ul>
</template>

<script>
import {store} from '../store.js';

    export default {
        name: 'BrowseSectionsComponent',
        data(){
            return{
                store,
            }
        }
    }
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/mixins' as *;
@use '../assets/styles/partials/variables' as *;

ul{
    @include dflex('row');
    list-style: none;
    margin: 0;
    width: 480px;

    li{
        a{
            text-decoration: none;
            color: $grey-d2-text;
            font-weight: bold;
            &:hover{
                text-decoration: underline;
            }
        }
    }
}

</style>