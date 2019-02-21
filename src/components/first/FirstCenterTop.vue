<template>
  <div class="content">
    <chart  ref="chart1"
            style="height: 3.5rem;width: 7.7rem"
            :options="orgOptions"
            :autoresize=true
    ></chart>
  </div>
</template>
<script>
    export default {
        data () {
            return {
                orgOptions: {
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
                },
            }
        },
        props: [
            'title',
        ],
        mounted() {
//            this.queryData();

        },
        methods:{
          queryData(){
              setInterval(() => {
                  this.orgOptions.series[0].data[0]= this.orgOptions.series[0].data[0]+100;
                  let newOptions = Object.assign({},this.orgOptions);
                  this.orgOptions = newOptions;
              },1000)
          }
        },
        computed: {
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

</style>
