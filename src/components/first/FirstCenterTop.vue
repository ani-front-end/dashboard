<template>
  <div class="content">
    <!--<h1>{{ msg }}</h1>-->
    <chart ref="chart1" :options="orgOptions" :auto-resize="true"></chart>
  </div>
</template>
<script>
    export default {
        data () {
            return {
                orgOptions: {},
                msg: 'CenterTop',
            }
        },
        props: [
            'title',
        ],
        mounted() {
            this.orgOptions = {
                xAxis: {
                    type: 'category',
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                },
                yAxis: {
                    type: 'value'
                },
                series: [{
                    data: [820, 932, 901, 934, 1290, 1330, 1320],
                    type: 'line',
                    smooth: true
                }]
            }
        },
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

</style>
