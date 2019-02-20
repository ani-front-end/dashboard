<template>
    <div class="header">
        <span class="title-color">{{ title }}</span>
    </div>
</template>

<script>
    export default {
        data () {
            return {
//                isBlue: false,
            }
        },
        props: [
            'title',
        ],
        computed: {
            getColorClass: function () {
                return {
                    'title-color': this.isBlue,
                }
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
    .title-color{
        color:#68ebfa;
    }
    .header {
        width: 100%;
        height: 0.26rem;
        background: #102c62;
        font-size: 0.1rem;
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>
