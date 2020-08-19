<template>
    <div class="city_container">
        <head-top :goBack="true"  :title="true" :head_title="$route.params.name">
            <router-link to="/home" slot="changcity" class="changcity">切换城市</router-link>
        </head-top>
        <section class="input_container">
            <input type="search" name="address" placeholder="输入学校，商务楼，地址" required v-model="inputValue" />
            <input type="submit" name="submit" @click="post_msg" value="提交"  />
        </section>
        <section class="history_container">
            <h4 v-if="historyTitle">搜索历史</h4>
            <section class="history">
                <ul  class="history_group">
                    <li  class="history_li" v-for="i in (!historyTitle?placeList:history_place)" :key="i.name" @click="nextPage(i)">
                        <p> {{i.name}}</p>
                        <p> {{i.address}}</p>
                    </li>
                </ul>
                <button class="btn-clearAll" v-if="historyTitle&&history_place.length>0" @click="clearAll">清空所有</button>
                <p v-if="!historyTitle&&!has_result" class="no_result">很抱歉！无搜索结果</p>
            </section>
        </section>

    </div>
</template>

<script>
import headTop from "../components/header/head.vue";
import {searchPlace} from "../service/getData.js";
import {setStore,getStore,removeStore} from "../config/mutil.js";
export default {
    name: "city",
    components: {
        headTop
    },
    data:function(){
        return {
            historyTitle:true,
            placeList:[],
            has_result:true,
            inputValue:'',
            history_place:[]
        }
    },
    mounted(){
        this.initData()
    },
    methods:{
           initData(){
               if(getStore("history_place")){
                this.history_place=JSON.parse(getStore("history_place"))
               }else{
                   this.history_place=[]
               }
           },
            async post_msg(){
                if(this.inputValue){
                this.historyTitle=false;
                let res=await searchPlace(this.$route.params.id,this.inputValue);
                this.has_result= res.length > 0?true:false;
                this.placeList=res;
                }
             },
          nextPage(item){
              let geohash=`${item.latitude},${item.longitude}`
            //   let url=`/msite?geohash=${geohash}` 
              let checkrepeat=false
              this.history_place.forEach(e=>{
                  if(e.geohash==geohash){
                        checkrepeat=true
                  } 
              })
              if(!checkrepeat){
                  this.history_place.push({
                      ...item,
                      geohash
                })
                
              }
              setStore("history_place",this.history_place);
              this.$router.push({
                  path:"/msite",
                  query:{
                      geohash
                  }
              })
          },
          clearAll(){
              removeStore("history_place")
              this.initData()
          }
    }
};
</script>

<style lang="scss" scoped>
@import "../style/mixin";
.changcity {
    @include sc(0.65rem, #fff);
    right: 0.5rem;
    @include ct;
}
.city_container{
    padding-top:2.5rem;
}
.input_container {
    @include wh(100%, "fit-content");
    padding-left:1.5rem;
    padding-right: 1.5rem;
    background: white;
    border-bottom :1px solid $bc;
    input {
        @include wh(100%, 1.5rem);
        border: 1px solid $bc;
        margin: 0.5rem 0;
        @include radius(5px);
    }
    input[type="submit"] {
        background: $blue;
        @include sc(0.65rem, #fff);
        border: none;
        @include radius(5px);
    }
}
.history_container{
    h4{
        border-top: 1px solid $bc;
        border-bottom:1px solid $bc;
        @include sc(0.65rem,#aaa);
        padding:0.1rem 0;
    }
    .history{
           background:white;
           .btn-clearAll{
               @include cl;
               @include sc(1rem,white);
               background:rgba(247, 14, 14, 0.918);
               padding:5px 5px;
               border-radius:5px;
               margin-top:0.5rem;
           }
           .history_group{
                .history_li{
                    padding:0 0.6rem;
                    padding-top:0.8rem; 
                   @include wh(100%,3.5rem);
                   border-bottom: 1px solid $bc;
                   p:nth-of-type(1){
                       @include sc(0.65rem,#111);
                       @include wh(100%,'fit-content');
                       margin: 0.1rem 0;
                       }
                   p:nth-of-type(2){
                       @include sc(0.5rem,$fgc);
                   }
               }
           }
    }


}
</style>