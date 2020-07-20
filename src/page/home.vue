<template>
    <div>
        <head-top :signUp="true">
            <span slot="logo" class="head_logo">elem.me</span>
        </head-top>
        <nav class="city_nav">
            <div class="city_tip">
                <span>当前定位城市：</span>
                <span>定位不准时请在城市列表中选择</span>
            </div>
            <router-link :to="`/city/广安/${guess.id}`" class="guess_city">
                <span>{{guess.name}}</span>
                <svg class="arrow_right">
                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-right" />
                </svg>
            </router-link>
        </nav>
        <section id="hot_city_container">
            <h4 class="city_title">热门城市</h4>
            <ul class="city_list_ul">
                <router-link tag="li" :to="`/city/${i.name}/${i.id}`" v-for="i in hotList " :key="i.id">{{i.name}}</router-link>
            </ul>
        </section>
        <section class="group_city_container">
            <ul class="letter_classify">
                <li v-for="i in charList"  :key="i" class="letter_classify_li">
                    <h4 class="city_title">
                        {{i}}
                        <span>按字母排序</span>
                    </h4>
                    <ul class="city_list_ul groupcity_name_container">
                        <router-link tag="li" :to="`/city/${j.name}/${j.id}`" v-for="j in groupMap[i]" :key="j.id" ellipsis >{{j.name}}</router-link>
                    </ul>
                </li>
            </ul>
        </section>
    </div>
</template>

<script>
import headTop from "../components/header/head.vue";
import {cityGuess, hotCity, groupCity} from "../service/getData";
export default {
    name: "home",
    components: {
        headTop
    },
    data: function() {
        return {
            hotList: [],
            guess: "",
           groupMap:{}
        };
    },
    computed:{
        charList(){
           let temp=[];
           for(let i=0;i<26;i++){
               let j=this.Char(i);
               if(j in this.groupMap){
                    temp.push(j);
               }
              

            }
           return temp;
        }
    },
    methods:{
        Char(i){
            let j=String.fromCharCode(65+i);

            return j;
        }
    },
    async created() {
        
        this.guess =  await cityGuess();
      
        this.hotList =await hotCity();
       
        this.groupMap =await groupCity();
       
       
   }
};
</script>

<style lang="scss" scoped>
@import "../style/mixin";
.head_logo {
    left: 0.4rem;
    font-weight: 400;
    @include sc(0.7rem, #fff);
    @include wh(2.3rem, 0.7rem);
    @include ct;
}
.city_nav {
    padding-top: 2.35rem;
    border-top: 1px solid $bc;
    background-color: #fff;
    margin-bottom: 0.4rem;
    .city_tip {
        @include fj;
        line-height: 1.45rem;
        padding: 0 0.45rem;
        span:nth-of-type(1) {
            @include sc(0.55rem, #666);
        }
        span:nth-of-type(2) {
            font-weight: 900;
            @include sc(0.475rem, #9f9f9f);
        }
    }
    .guess_city {
        @include fj;
        align-items: center;
        height: 1.8rem;
        padding: 0 0.45rem;
        border-top: 1px solid $bc;
        border-bottom: 2px solid $bc;
        @include font(0.75rem, 1.8rem);
        span:nth-of-type(1) {
            color: $blue;
        }
        .arrow_right {
            @include wh(0.6rem, 0.6rem);
            fill: #999;
        }
    }
}
#hot_city_container {
    background-color: #fff;
    margin-bottom: 0.4rem;
}
.city_list_ul {
    //就是下面这个问题
    display: flow-root;
    @include wh(100%, "initial");
    //box-sizing: border-box;
    zoom: 1;
    li {
        overflow: hidden;
        float: left;
        text-align: center;
        color: $blue;
        border-bottom: 0.025rem solid $bc;
        border-right: 0.025rem solid $bc;
        @include wh(25%, 1.75rem);
        @include font(0.6rem, 1.75rem);
    }
    li:nth-of-type(4n) {
        border-right: none;
    }
}
.city_title {
    color: #666;
    font-weight: 400;
    text-indent: 0.45rem;
    border-top: 2px solid $bc;
    border-bottom: 1px solid $bc;
    @include font(0.55rem, 1.45rem, "Helvetica Neue");
    span {
        @include sc(0.475rem, #999);
    }
}

.letter_classify_li {
    margin-bottom: 0.4rem;
    background-color: #fff;
    border-bottom: 1px solid $bc;
    
    .groupcity_name_container {
        li {
            color: #666;
         }
    }
}
</style>