<template>
    <div class="third">
        <div class="top">
            <div class="top-left">
                <div class="card-header">
                    <span>基层人员情况</span>
                </div>
                <div class="top-left-content">
                    <div class="top-left-left">
                        <div class="top-left-left-top">
                            <div class="card-header">
                                <span>主官在位情况</span>
                            </div>
                        </div>
                        <div class="top-left-left-bottom">
                            <div class="card-header">
                                <span>各单位人员外出情况</span>
                            </div>
                        </div>
                    </div>
                    <div class="top-left-right">
                        <div class="top-left-right-top">
                            <div class="card-header">
                                <span>主官在位情况</span>
                            </div>
                        </div>
                        <div class="top-left-right-bottom">
                            <div class="card-header">
                                <span>各单位人员外出情况</span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div class="top-right">
                <div class="card-header">
                    <span>枪支弹药情况</span>
                </div>
                <div class="top-right-content">
                    <div class="top-right-left">
                        <div class="card-header">
                            <span>枪支情况</span>
                        </div>
                    </div>
                    <div class="top-right-right">
                        <div class="card-header">
                            <span>弹药消耗情况</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="bottom">
            <div class="bottom-left">
                <div class="bottom-left-left">
                    <div class="card-header">
                        <span>涉密载体情况</span>
                    </div>
                    bottom-left-left
                </div>
                <div class="bottom-left-right">
                    <div class="card-header">
                        <span>手机违规使用情况</span>
                    </div>
                    bottom-left-right
                </div>
            </div>
            <div class="bottom-right">
                <div class="card-header">
                    <span>涉密载体情况</span>
                </div>
                <div class="bottom-right-content">
                    <div class="bottom-right-left">
                        <div class="card-header">
                            <span>涉密载体情况</span>
                        </div>
                        bottom-right-left
                    </div>
                    <div class="bottom-right-right">
                        <div class="card-header">
                            <span>手机违规使用情况</span>
                        </div>
                        bottom-right-right
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        },
        components: {},
        mounted(){
        },
        methods: {}
    }
</script>
<style lang="less">
    .third {
        width: 100%;
        height: 91%;
        font-size: 0.25rem;
        display: flex;
        flex-direction: column;
        .top {
            display: flex;
            height: 54%;
            .top-left {
                margin: 0.1rem 0.05rem 0rem 0.1rem;
                box-shadow: 1px 1px 5px #0e3367 inset,
                    -1px -1px 5px #0e3367 inset;
                width: 50%;
                .top-left-content {
                    height: 90%;
                    display: flex;
                    .top-left-left {
                        width: 49%;
                        height: 97%;
                        padding: 0.03rem;
                        margin: 0.05rem 0.05rem 0.05rem 0.1rem;
                        border: 0.1px solid #696d8d;
                        .top-left-left-top {
                            width: 98%;
                            height: 42%;
                            margin: 0.02rem 0.03rem 0.02rem 0.03rem;
                            /*border: 0.1px solid pink;*/
                        }
                        .top-left-left-bottom {
                            width: 98%;
                            height: 56%;
                            margin: 0.02rem 0.03rem 0.02rem 0.03rem;
                            /*border: 0.1px solid pink;*/
                        }
                    }
                    .top-left-right {
                        width: 49%;
                        height: 97%;
                        padding: 0.03rem;
                        margin: 0.05rem 0.1rem 0.05rem 0rem;
                        border: 0.1px solid #696d8d;
                        .top-left-right-top {
                            width: 98%;
                            height: 42%;
                            margin: 0.02rem 0.03rem 0.02rem 0.03rem;
                            /*border: 0.1px solid pink;*/
                        }
                        .top-left-right-bottom {
                            width: 98%;
                            height: 56%;
                            margin: 0.02rem 0.03rem 0.02rem 0.03rem;
                            /*border: 0.1px solid pink;*/
                        }
                    }
                }
            }
            .top-right {
                margin: 0.1rem 0.05rem 0rem 0.1rem;
                border: 0.1px solid #0e3367;
                box-shadow: 1px 1px 5px #0e3367 inset,
                    -1px -1px 5px #0e3367 inset;
                width: 50%;
                .top-right-content {
                    display: flex;
                    height: 91%;
                    .top-right-left {
                        padding: 0.03rem;
                        border: 0.1px solid #696d8d;
                        width: 49%;
                        height: 96%;
                        margin: 0.05rem 0.05rem 0.05rem 0.1rem;
                    }
                    .top-right-right {
                        width: 49%;
                        height: 96%;
                        padding: 0.03rem;
                        margin: 0.05rem 0.1rem 0.05rem 0rem;
                        border: 0.1px solid #696d8d;
                    }
                }
            }
        }
        .bottom {
            display: flex;
            height: 46%;
            .bottom-left {
                display: flex;
                width: 51.6%;
                .bottom-left-left {
                    width: 50%;
                    padding: 0.03rem;
                    height: 93.7%;
                    margin: 0.05rem 0.05rem 0.05rem 0.1rem;
                    border: 0.1px solid #0e3367;
                    box-shadow: 1px 1px 5px #0e3367 inset,
                        -1px -1px 5px #0e3367 inset;
                }
                .bottom-left-right {
                    padding: 0.03rem;
                    width: 50%;
                    height: 93.7%;
                    margin: 0.05rem 0.1rem 0.05rem 0rem;
                    border: 0.1px solid #0e3367;
                    box-shadow: 1px 1px 5px #0e3367 inset,
                        -1px -1px 5px #0e3367 inset;
                }
            }
            .bottom-right {
                margin: 0.05rem 0.05rem 0.1rem 0.05rem;
                border: 0.1px solid #0e3367;
                box-shadow: 1px 1px 5px #0e3367 inset,
                    -1px -1px 5px #0e3367 inset;
                width: 50.35%;
                .bottom-right-content {
                    height: 91%;
                    display: flex;
                    .bottom-right-left {
                        padding: 0.03rem;
                        width: 49%;
                        height: 94%;
                        margin: 0.05rem 0.05rem 0.05rem 0.1rem;
                        border: 0.1px solid #696d8d;
                    }
                    .bottom-right-right {
                        padding: 0.03rem;
                        width: 49%;
                        height: 94%;
                        margin: 0.05rem 0.1rem 0.05rem 0rem;
                        border: 0.1px solid #696d8d;
                    }
                }
            }
            .bottom-header {
                display: flex;
                align-items: center;
                width: 100%;
                height: 0.34rem;
                background: #102c62;
                font-size: 0.1rem;
            }
        }
    }

    .card-header {
        display: flex;
        align-items: center;
        width: 100%;
        height: 0.3rem;
        background: #102c62;
        font-size: 0.1rem;
    }
</style>