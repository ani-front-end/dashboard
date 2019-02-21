<template>
    <div class="content">
        <div class="container">
            <div class="div-item"
                 v-for="(item,index) in divs"
            >
                <div class="div-main" v-if="item.isShow"
                     :key="index"
                     :style="item.styleObject"></div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                msg: 'CenterBottomCenter',
                privacy:8,
                num: 0,
                divs: [
                    {isShow: false, classObject: {active: true}, styleObject: {background: '#87c6ed'}},
                    {isShow: false, classObject: {active: true}, styleObject: {background: '#87c6ed'}},
                    {isShow: false, classObject: {active: true}, styleObject: {background: '#87c6ed'}},
                    {isShow: false, classObject: {active: true}, styleObject: {background: '#d3bd0a'}},
                    {isShow: false, classObject: {active: true}, styleObject: {background: '#d3bd0a'}},
                    {isShow: false, classObject: {active: true}, styleObject: {background: '#d3bd0a'}},
                    {isShow: false, classObject: {active: true}, styleObject: {background: '#d3bd0a'}},
                    {isShow: false, classObject: {active: true}, styleObject: {background: '#9d041e'}},
                    {isShow: false, classObject: {active: true}, styleObject: {background: '#9d041e'}},
                    {isShow: false, classObject: {active: true}, styleObject: {background: '#9d041e'}}
                ]
            }
        },
        props: [
            'title',
        ],
        watch: {
            num(val) {
                for (let i = 0; i < val; i++) {
                    this.divs[9 - i].isShow = true;
                }
            }
        },
        mounted() {
            let interval = setInterval(() => {
                this.num++;
                if(this.num>this.privacy){
                    clearInterval(interval);
//                    this.divs.forEach(p => {
//                        p.isShow = false;
//                    })
//                    this.num = 0;
                }
            }, 150)
        },
        computed: {
            getColorClass () {
                return {
                    'title-color': this.isBlue,
                }
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
    .content {
        height: 90%;
        width: 98%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        .container {
            width: 40%;
            height: 60%;
            border: 4px solid #222541;
            border-radius: 6%;
            padding: 0 0 3% 0;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;
            .div-item {
                margin-top: 12%;
                width: 90%;
                /*height: 0.07rem;*/
                height: 13%;
                .div-main {
                    width: 100%;
                    height: 100%;
                }
            }
        }
    }
</style>
