<template>
    <div id="app">
        <div class="app-header">
            <div class="app-header-left">
                <span class="left-title">安全管理状态中心</span>
            </div>
            <div class="app-header-nav">
                <router-link to="/" class="banner-title">首页</router-link>
                <router-link to="/second" class="banner-title">环比情况</router-link>
                <router-link to="/third" class="banner-title">一级问题管理</router-link>
            </div>
            <div class="app-header-right">
                <span class="right-title">{{nowTime}}</span>
            </div>
        </div>
        <router-view/>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                nowTime:'',
            }
        },
        mounted(){
            this.getTimeInterval()
        },
        methods:{
            getTimeInterval(){
                setInterval(() => {
                    let date = new Date();
                    var reg = new RegExp( '/' , "g" )
                    this.nowTime=date.toLocaleString('chinese',{hour12:false}).replace(reg,'.');
                },1000)
            }
        },
        computed:{
            getTime(){
            }
        }
    }
</script>
<style lang="less">
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #ffffff !important;
        background: #101d3c;
        width: 100%;
        height: 100%;
    }
    .app-header {
        width: 100%;
        height: 15%;
        background: none;
        display: flex;
        flex-direction: row;
        .app-header-left{
            height: 100%;
            width: 33.3%;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            .left-title{
                font-size: 0.25rem;
                font-weight: bold;
                color: #5fd8e8;
            }
        }
        .app-header-nav {
            height: 100%;
            width: 33.3%;
            display: flex;
            justify-content: space-around;
            align-items: center;
            /*padding: 30px;*/
            a {
                font-size: 0.15rem;
                font-weight: normal;
                text-decoration: none;
                color: #fff;
                &.router-link-exact-active {
                    font-weight: bold;
                    color: #5fd8e8;
                }
            }
        }
        .app-header-right{
            height: 100%;
            width: 33.3%;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            .right-title{
                font-size: 0.15rem;
                color: #5fd8e8;
                font-family: "Courier New";
                font-weight: bold;
            }
        }
    }

    .banner-title {
        font-size: 0.3rem;
        color: #ffffff;
    }
</style>
