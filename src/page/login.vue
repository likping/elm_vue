<template>
    <div class="login_container">
        <head-top :signUp="false" :goBack="true" :title="true" head_title="密码登录"></head-top>
        <section class="form_container">
            <form>
                <input type="text" placeholder="账号" v-model="account" required autocomplete />
                <section class="input_container">
                    <input
                        v-if="!show"
                        type="password"
                        placeholder="密码"
                        v-model="password"
                        required
                        autocomplete
                    />
                    <input v-else type="text" placeholder="密码" v-model="password" autocomplete />
                    <div class="button_switch" :class="{change_to_text:show}">
                        <div
                            class="circle_button"
                            @click="buttonSwitch"
                            :class="{translate_to_right:show}"
                        ></div>
                        <span>居中</span>
                        <span>...</span>
                    </div>
                </section>
                <section class="input_container_check">
                    <input
                        class="checkinfo"
                        type="text"
                        placeholder="验证码"
                        v-model="checkInfo"
                        required
                        autocomplete
                    />
                    <div class="img_change_png">
                        <img />
                        <div class="chang_img">
                            <p>看不清</p>
                            <p>换一张</p>
                        </div>
                    </div>
                </section>
                <p>
                    温馨提示：未注册过的账号，登录时将自动注册
                    注册过的用户可凭账号密码登录
                </p>
                <input type="submit" />
            </form>
            <p class="reset">重置密码？</p>
        </section>
    </div>
</template>

<script>
import headTop from "../components/header/head.vue";
export default {
    name: "login",
    components: {
        headTop
    },
    data: function() {
        return {
            show: false,
            account: "",
            password: "",
            checkInfo: ""
        };
    },
    methods: {
        buttonSwitch() {
            this.show = !this.show;
        }
    }
};
</script>

<style lang="scss" scoped>
@import "../style/mixin";
.form_container {
    padding-top: 2.5rem;
    input {
        @include wh(100%, 2.5rem);
        border-bottom: 1px solid $bc;
    }
    input[type="submit"] {
        background: #4cd964;
        @include wh(95%,2.5rem);
        border-radius: 0.5rem;
        @include re_jus_ct;
        @include sc(1rem, #fff);
    }
    p {
        @include sc(0.65rem, red);
        line-height: 1.5rem;
    }
    .input_container {
        @include wh(100%, 2.5rem);
        @include fj;
        background: white;
        border-bottom: 1px solid $bc;
        input {
            @include wh(80%, 100%);
            border-bottom: none;
        }
        .button_switch {
            @include wh(2.5rem, 1rem);
            background-color: #ccc;
            display: flex;
            top: 50%;
            transform: translateY(-50%);
            margin: 0 0.8rem;
            border: 1px;
            border-radius: 0.5rem;
            position: relative;
            .circle_button {
                transition: all 0.3s;
                position: absolute;
                top: -0.2rem;
                z-index: 1;
                left: -0.2rem;
                @include wh(1.5rem, 1.5rem);
                box-shadow: 0 0.02666rem 0.053333rem 0 rgba(0, 0, 0, 0.1);
                background-color: #f1f1f1;
                border-radius: 50%;
            }
            span {
                @include font(0.45rem, 1rem);
                // transform: translateY(-0.15rem);
            }
        }
        .change_to_text {
            background-color: #4cd964;
        }
        .translate_to_right {
            transform: translateX(1.25rem);
        }
    }
    .input_container_check {
        @include wh(100%, 2.5rem);
        @include fj;
        background:white;
        input {
            @include wh(60%, 2.5rem);
        }
        .img_change_png {
            @include wh(40%, 100%);
            @include fj;
            img{
                  @include wh(70%, 100%);
            }
            .chang_img {
                @include wh(30%, 100%);
                p {
                    font-size: 0.4rem;
                    @include wh(100%, 50%);
                }
                p:nth-of-type(1){
                   @include sc(0.3rem,#000);
                }
                p:nth-of-type(2){
                    @include sc(0.3rem,blue)
                }
            }
        }
    }
    .reset{
        text-align:right;
        @include sc(0.45rem,blue);
    }
}
</style>