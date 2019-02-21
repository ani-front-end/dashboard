<template>
  <div class="content">
    <Carousel v-model="value1"
              autoplay="true"
              autoplay-speed="5000"
              height="1.4rem"
              arrow="false"
              radius-dot="true"
              loop>
    <CarouselItem>
      <div class="demo-carousel">123</div>
    </CarouselItem>
    <CarouselItem>
      <div class="demo-carousel">45</div>
    </CarouselItem>
    </Carousel>
  </div>
</template>
<script>
    export default {
        data () {
            return {
                value1: 0

            }
        },
        props: [
            'title',
        ],
        mounted() {

        },
        methods:{
        },
        computed: {
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

  .el-carousel__container {
    height: 100% !important;
  }

  .content{
    padding-left: 35%;
    height: 80%;
  }
  .charts-content {
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #142248;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #142248;
  }
</style>
