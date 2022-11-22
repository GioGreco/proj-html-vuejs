<template>
    <ul>
        <li v-for="(item,index) in store.quickLinks" :key="index">
            <a :href="item.url">{{item.name}}</a>
        </li>
    </ul>
</template>

<script>
import {store} from '../store.js';

    export default {
        name: 'QuickLinks',
        data(){
            return{
                store
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>