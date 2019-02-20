<template>
  <div class="first">
    <div class="left">
      <div class="left-top">
        <CardHeaderTitle title="机关产生问题统计"></CardHeaderTitle>
        <FirstLeftTop></FirstLeftTop>
        <!--<div id="myChart"></div>-->
      </div>
      <div class="left-middle">
        <CardHeaderTitle title="机关发现问题统计"></CardHeaderTitle>
        <FirstLeftMiddle></FirstLeftMiddle>
      </div>
      <div class="left-bottom">
        <CardHeaderTitle title="机关人员履职情况"></CardHeaderTitle>
        <FirstLeftBottom></FirstLeftBottom>
      </div>
    </div>
    <div class="center">
      <div class="center-top">
        <FirstCenterTop></FirstCenterTop>
      </div>
      <div class="center-bottom">
        <div class="center-bottom-left">
          <LittleCardHeaderTitle title="报警处置情况"></LittleCardHeaderTitle>
          <FirstCenterBottomLeft></FirstCenterBottomLeft>
        </div>
        <div class="center-bottom-center">
          <LittleCardHeaderTitle title="安全2等级"></LittleCardHeaderTitle>
          <FirstCenterBottomCenter></FirstCenterBottomCenter>
        </div>
        <div class="center-bottom-right">
          <LittleCardHeaderTitle title="安防设备故障"></LittleCardHeaderTitle>
          <FirstCenterBottomRight></FirstCenterBottomRight>
        </div>
      </div>
    </div>
    <div class="right">
      <div class="right-top">
        <CardHeaderTitle title="机关检查基层问题统计"></CardHeaderTitle>
        <FirstRightTop></FirstRightTop>
      </div>
      <div class="right-middle">
        <CardHeaderTitle title="基层发现问题统计"></CardHeaderTitle>
        <FirstRightMiddle></FirstRightMiddle>
      </div>
      <div class="right-bottom">
        <CardHeaderTitle title="基层人员履职情况"></CardHeaderTitle>
        <FirstRightBottom></FirstRightBottom>
      </div>
    </div>
  </div>
</template>
<script>
  import CardHeaderTitle from '../components/CardHeaderTitle'
  import LittleCardHeaderTitle from '../components/LittleCardHeaderTitle'
  import FirstLeftTop from '../components/first/FirstLeftTop'
  import FirstLeftMiddle from '../components/first/FirstLeftMiddle'
  import FirstLeftBottom from '../components/first/FirstLeftBottom'
  import FirstCenterTop from '../components/first/FirstCenterTop'
  import FirstCenterBottomLeft from '../components/first/FirstCenterBottomLeft'
  import FirstCenterBottomCenter from '../components/first/FirstCenterBottomCenter'
  import FirstCenterBottomRight from '../components/first/FirstCenterBottomRight'
  import FirstRightTop from '../components/first/FirstRightTop'
  import FirstRightMiddle from '../components/first/FirstRightMiddle'
  import FirstRightBottom from '../components/first/FirstRightBottom'
    export default {
        name: 'hello',
        data () {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        },
        components:{
            'CardHeaderTitle':CardHeaderTitle,
            'LittleCardHeaderTitle':LittleCardHeaderTitle,
            'FirstLeftTop':FirstLeftTop,
            'FirstLeftMiddle':FirstLeftMiddle,
            'FirstLeftBottom':FirstLeftBottom,
            'FirstCenterTop':FirstCenterTop,
            'FirstCenterBottomLeft':FirstCenterBottomLeft,
            'FirstCenterBottomCenter':FirstCenterBottomCenter,
            'FirstCenterBottomRight':FirstCenterBottomRight,
            'FirstRightTop':FirstRightTop,
            'FirstRightMiddle':FirstRightMiddle,
            'FirstRightBottom':FirstRightBottom,


        },
        mounted(){
//            this.drawLine();
        },
        methods: {
//            drawLine(){
//                // 基于准备好的dom，初始化echarts实例
//                let myChart = this.$echarts.init(document.getElementById('myChart'))
//                // 绘制图表
//                myChart.setOption({
//                    title: { text: 'test' },
//                    tooltip: {},
//                    xAxis: {
//                        data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
//                    },
//                    yAxis: {},
//                    series: [{
//                        name: '销量',
//                        type: 'bar',
//                        data: [5, 20, 36, 10, 10, 20]
//                    }]
//                });
//            }
        }
    }
</script>
<style lang="less">
  .first{
    width: 100%;
    height: 91%;
    font-size: 0.25rem;
    display: flex;
    .left{
      width: 25%;
      padding: 0.1rem 0.1rem 0.2rem 0.1rem;
      .left-top{
        margin: 0 0 0.1rem 0;
        background: #142248;
        height: 1.8rem;
      }
      .left-middle{
        margin: 0 0 0.1rem 0;
        background: #142248;
        height: 26%;
      }
      .left-bottom{
        background: #142248;
        height: 46%;
      }
    }
    .center{
      border: 1px solid #696d8d;
      margin: 0.1rem 0.1rem 0.05rem 0.1rem;
      padding: 0.08rem 0.1rem 0.08rem 0.1rem;
      width: 50%;
      .center-top{
        margin-bottom: 0.1rem;
        background: none;
        border: 0.1px solid #0e3367;
        height: 53.2%;
        box-shadow: 3px 3px 15px #0e3367 inset,
                    -3px -3px 15px #0e3367 inset;
      }
      .center-bottom{
        background: none;
        border: 0.1px solid #0e3367;
        box-shadow: 2px 2px 15px #0e3367 inset,
                    -2px -2px 15px #0e3367 inset;
        height: 45.6%;
        display: flex;
        align-items: flex-end;
        /*padding-top: 0.2rem;*/
        .center-bottom-left{
          background: #142248;
          height: 88%;
          width: 32%;
          /*border: 0.1px solid pink;*/
          margin: 0 0.5% 0.5% 1%;
        }
        .center-bottom-center{
          background: #142248;
          height: 88%;
          width: 22%;
          /*border: 0.1px solid pink;*/
          margin: 0 0.5% 0.5% 0.5%;
        }
        .center-bottom-right{
          background: #142248;
          height: 88%;
          width: 42%;
          margin: 0 1% 0.5% 0.5%;
          /*border: 0.1px solid pink;*/
        }
      }
    }
    .right{
      width: 25%;
      padding: 0.1rem 0.1rem 0.2rem 0.1rem;
      .right-top{
        margin: 0 0 0.1rem 0;
        background: #142248;
        height: 1.8rem;
      }
      .right-middle{
        margin: 0 0 0.1rem 0;
        background: #142248;
        height: 26%;
      }
      .right-bottom{
        background: #142248;
        height: 46%;
      }
    }
  }
  .first-header{
    font-size: 0.2rem;
  }
</style>