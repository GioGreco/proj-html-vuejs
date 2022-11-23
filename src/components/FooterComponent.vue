<template>
    <div class="wrap">
        <footer class="row g-4 m-0 mx-auto">
            <div class="col-12 col-sm-6 col-md-3">
                <img class="mb-3" src="/images/cropped-Group-39-2x.png" alt="Phlox logo">
                <p>While the lovely valley steems with vapour around-me, and the meridian sun strikes the upper surface of the impenetrable foliage of my trees. While the lovely valley steems with vapour around me.</p>
            </div>
            <div class="quick-links col-12 col-sm-6 col-md-3">
                <h5>Quick Links</h5>
                <div class="custom-separator my-3"><span></span><span></span></div>
                <QuickLinks/>
            </div>
            <div class="col-12 col-sm-6 col-md-3">
                <h5>Contact</h5>
                <div class="custom-separator my-3"><span></span><span></span></div>
                <p class="my-3">{{store.contacts.referent}}{{store.contacts.address}}</p>
                <p>{{store.contacts.mail}}</p>
                <p>{{store.contacts.phoneNumber}}</p>
            </div>
            <div class="col-12 col-sm-6 col-md-3">
                <h5>Location on map</h5>
                <div class="custom-separator my-3"><span></span><span></span></div>
                <img class="w-100" src="/images/map.png" alt="our location">
            </div>
        </footer>
    </div>
    <FooterBottom/>
</template>

<script>
import QuickLinks from './QuickLinks.vue';
import FooterBottom from './FooterBottom.vue';
import {store} from '../store.js';

    export default {
        name: 'FooterComponent',
        components: {
            QuickLinks,
            FooterBottom
        },
        data(){
            return{
                store
            }
        }
    }
</script>

<style lang="scss">
@use '../assets/styles/partials/variables' as *;
@use '../assets/styles/partials/mixins' as *;

.wrap{
    background-color: $white-d1-bg;
}

footer{
    width: 95%;
    padding: 150px 0px;
    margin: 0 auto;
    color: $grey-d1-text;

    .quick-links{
        ul{
            list-style: none;
            padding: 0;

            li{
                a{
                    text-decoration: none;
                    color: $grey-d1-text;

                    &:hover{
                        text-decoration: underline;
                    }
                }
            }
        }
    }
}


</style>