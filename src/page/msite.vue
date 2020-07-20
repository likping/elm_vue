<template>
  <div class="msite_container">
      <head-top :goBack="true" :signUp="true">
          <router-link to="/home" tag="p" slot="head_title" class="msite_head_title">{{city.name}}</router-link>

      </head-top>
  </div>
</template>

<script>
import headTop from "../components/header/head.vue";
import {poisPlace} from "../service/getData.js";
export default {
    name:"msite",
    data:function(){
        return {
            city:{}
        }
    },
    components:{
        headTop,
        
    },
    async mounted(){
        this.city=await poisPlace(this.$route.query.geohash);
    }
}
</script>

<style lang="scss" scoped>
@import "../style/mixin.scss";
.msite_head_title{
    @include center;
    @include sc(0.65rem,#fff);
    @include wh(5rem,1rem);
    line-height: 1rem;
    overflow:hidden;
    text-align: center;
   
}

</style>