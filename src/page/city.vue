<template>
    <div class="city_container">
        <head-top :goBack="true"  :title="true" :head_title="$route.params.name">
            <router-link to="/home" slot="changcity" class="changcity">切换城市</router-link>
        </head-top>
        <section class="input_container">
            <input type="search" name="address" placeholder="输入学校，商务楼，地址" />
            <input type="submit" @click="post_msg"  />
        </section>
        <section class="history_container">
            <h4 v-if="historyTitle">搜索历史</h4>
            <section class="history">
                <ul v-if="!historyTitle" class="history_group">
                    <li class="history_li" v-for="i in 26" :key="i">
                        {{i}}
                    </li>
                </ul>
                <p v-if="!historyTitle&&!has_result" class="no_result">很抱歉！无搜索结果</p>
            </section>
        </section>

    </div>
</template>

<script>
import headTop from "../components/header/head.vue";
export default {
    name: "city",
    components: {
        headTop
    },
    data:function(){
        return {
            historyTitle:true,
            placeList:[],
            has_result:true
        }
    },
    methods:{
            post_msg(){
                this.historyTitle=false;
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
           .history_group{
               padding: 0 0.5rem;
               .history_li{
                   @include wh(100%,2.5rem);
                   border-bottom: 1px solid $bc;
               }
           }
    }


}
</style>