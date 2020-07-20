<template>
    <header id="head-top">
        <slot name="logo"></slot>
        <slot name="search"></slot>
        <section class="head_goback" v-if="goBack" @click="$router.go(-1)">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" version="1.1">
                <polyline
                    points="12,18 4,9 12,0"
                    style="fill:none;stroke:rgb(255,255,255);stroke-width:2"
                />
            </svg>
        </section>
        <section class="head_title" v-if="title">
            <span>{{head_title}}</span>
        </section>
        <div v-if="signUp" class="head_login">
            <router-link to="/login">
                <span class="login_span">登录|注册</span>
            </router-link>
        </div>
        <slot name="changcity"></slot>
        <slot name="head_title"></slot>

    </header>
</template>

<script>
export default {
    name: "headTop",
    props: {
        signUp: Boolean,
        goBack: Boolean,
        title: Boolean,
        head_title: String
    }
};
</script>

<style lang="scss" scoped>
@import "../../style/mixin";
#head-top {
    background: $blue;
    position: fixed;//absolute;
    z-index: 100;
    left: 0;
    top: 0;
    // border:2px solid red;
  //  position: absolute;
    @include wh(100%, 1.95rem);
    .head_login {
        right: 0.55rem;
        @include sc(0.65rem, #fff);
        @include ct;
        .login_span {
            color: #fff;
        }
    }
    .head_goback {
          width:0.65rem;
          height:1rem;
          line-height: 2.2rem;
          // @include ct;
    }
    .head_title {
        @include wh("fit-content", 1.25rem);
        @include center;
        @include fj;
        overflow: hidden;
        span {
            @include sc(0.9rem, #fff);
            @include font(0.9rem, 1.25rem);
        }
    }
}
</style>