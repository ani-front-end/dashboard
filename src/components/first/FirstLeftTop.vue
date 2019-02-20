<template>
  <div class="content">
    <el-carousel :interval="5000" arrow="never" id="el-carousel" height="1.45rem">
      <el-carousel-item>
        <div class="charts-content">123</div>
      </el-carousel-item>
      <el-carousel-item>
        <div class="charts-content">456</div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
    export default {
        data () {
            return {
                msg: 'LeftTop',

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

  .el-carousel__container {
    height: 100% !important;
  }

  .content{
    padding-left: 35%;
    height: 30%;
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
