<template>
  <div class="first">
    <div class="left">
      <div class="left-top">
        <CardHeaderTitle title="机关发现的问题统计"></CardHeaderTitle>
        <div id="myChart"></div>
      </div>
      <div class="left-bottom">
        <CardHeaderTitle title="机关人员履职情况"></CardHeaderTitle>
        left-bottom
      </div>
    </div>
    <div class="center">
      <div class="center-top">
        center-top
      </div>
      <div class="center-bottom">
        center-bottom
      </div>
    </div>
    <div class="right">
      <div class="right-top">
        <CardHeaderTitle title="机关发现的问题统计"></CardHeaderTitle>
        right-top
      </div>
      <div class="right-bottom">
        <CardHeaderTitle title="机关人员履职情况"></CardHeaderTitle>
        right-bottom
      </div>
    </div>
  </div>
</template>
<script>
  import CardHeaderTitle from '../components/CardHeaderTitle'
    export default {
        name: 'hello',
        data () {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        },
        components:{
            'CardHeaderTitle':CardHeaderTitle,
        },
        mounted(){
            this.drawLine();
        },
        methods: {
            drawLine(){
                // 基于准备好的dom，初始化echarts实例
                let myChart = this.$echarts.init(document.getElementById('myChart'))
                // 绘制图表
                myChart.setOption({
                    title: { text: 'test' },
                    tooltip: {},
                    xAxis: {
                        data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
                    },
                    yAxis: {},
                    series: [{
                        name: '销量',
                        type: 'bar',
                        data: [5, 20, 36, 10, 10, 20]
                    }]
                });
            }
        }
    }
</script>
<style lang="less">
  #myChart{
    width: 50%;
    height: 100px;
  }
  .first{
    width: 100%;
    height: 85%;
    font-size: 0.25rem;
    display: flex;
    .left{
      width: 25%;
      padding: 0.1rem 0.1rem 0.1rem 0.1rem;
      .left-top{
        margin: 0 0 0.1rem 0;
        background: #142248;
        height: 49%;
      }
      .left-bottom{
        background: #222;
        height: 49%;
      }
    }
    .center{
      width: 50%;
      .center-top{
        background: #333;
        height: 60%;
      }
      .center-bottom{
        background: #444;
        height: 40%;
      }
    }
    .right{
      width: 25%;
      padding: 0.1rem 0.1rem 0.1rem 0.1rem;
      .right-top{
        margin: 0 0 0.1rem 0;
        background: #555;
        height: 40%;
      }
      .right-bottom{
        background: #666;
        height: 60%;
      }
    }
  }
  .first-header{
    font-size: 0.2rem;
  }
</style>