<template>
    <div class="msite_container">
        <head-top :goBack="false" :signUp="true">
            <router-link to="/home" tag="p" slot="head_title" class="msite_head_title">{{city.name}}</router-link>
            <router-link :to="'/search/geohash'" class="link_search" slot="search">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" version="1.1">
                    <circle
                        cx="8"
                        cy="8"
                        r="7"
                        stroke="rgb(255,255,255)"
                        stroke-width="1"
                        fill="none"
                    />
                    <line
                        x1="14"
                        y1="14"
                        x2="20"
                        y2="20"
                        style="stroke:rgb(255,255,255);stroke-width:2"
                    />
                </svg>
            </router-link>
        </head-top>
        <nav class="msite_nav">
            <div class="swiper-container">
                <div class="swiper-swiper">
                   <div class="swiper-card"  v-for="(i,index) in foodTypes" :key="index">
                       <img :src="`${imgBaseUrl}${i.image_url}`">
                       <p>{{i.title}}</p>
                   </div>
                </div>
                <ul class="swiper-indecitor">
                    <li class="active_indecitor"></li>
                    <li></li>
                </ul>
            </div>  
        </nav>

            <section class="shop_list_container">

            </section>
      
    </div>
</template>

<script>
import headTop from "../components/header/head.vue";
import { poisPlace,msiteFoodTypes } from "../service/getData.js";
export default {
    name: "msite",
    data: function () {
        return {
            city: {},
            foodTypes:[],
            imgBaseUrl: 'https://fuss10.elemecdn.com'
        };
    },
    components: {
        headTop,
    },
    async mounted() {
        this.city = await poisPlace(this.$route.query.geohash);
        this.foodTypes=await msiteFoodTypes();
    },
};
</script>

<style lang="scss" scoped>
@import "../style/mixin.scss";
.msite_container{
 background:$gap;
}
.msite_head_title {
    @include center;
    @include sc(0.65rem, #fff);
    @include wh(5rem, 1rem);
    line-height: 1rem;
    overflow: hidden;
    text-align: center;
}
.link_search {
    display: block;
    @include wh(1rem, 1rem);
    @include ct;
}
.msite_nav{
    background :white;
    @include wh(100%,10rem);
    padding-top:1.9rem;
    .swiper-container{
        @include wh(100%,100%);
        overflow-x:auto;
        .swiper-swiper{
              @include wh(200%,90%);
            display:flex;
            flex-wrap:wrap;
            overflow-y:hidden;
            align-content:flex-start;
            .swiper-card{
              @include wh(4rem,4rem);
              padding:1rem 1rem;
              overflow: hidden;
              img{
                  @include wh(100%,100%);
              }
              p{
                  font-size: 0.5rem;
                  text-align: center;
              }
            }
            

            }
            .swiper-indecitor{
                @include wh(100%,10%);
                display:flex;
                position:absolute;
                justify-content: center;
                li{
                    @include wh(.5rem,.5rem);
                    border-radius: 100%;
                    border:1px solid grey;
                    display:block;
                    margin:3px;
                }
        }
        
    }

}
.active_indecitor{
    background:blue;
}
.shop_list_container{
    @include wh(100%,3rem);
    background:red;
    margin-top:0.6rem;
    padding:0 2px;
}
</style>