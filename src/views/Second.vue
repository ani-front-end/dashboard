<template>
  <div class="second">
    <div class="top">
      <div class="top-left">
        <div class="top-left-header">
          <span>同期各问题类型间数量对比</span>
        </div>
        top-left
      </div>
      <div class="top-right">
        <div class="top-right-header">
          <span>同期各问题类型间数量对比</span>
        </div>
        top-right
      </div>
    </div>
    <div class="bottom">
      <div class="bottom-header">
        <span>同期各问题类型间数量对比</span>
      </div>
      bottom
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
        components:{

        },
        mounted(){
        },
        methods: {
        }
    }
</script>
<style lang="less">
  .second {
    width: 100%;
    height: 91%;
    font-size: 0.25rem;
    display: flex;
    flex-direction: column;
    .top {
      display: flex;
      height: 45%;
      .top-left {
        margin: 0.1rem 0.05rem 0rem 0.1rem;
        border: 0.1px solid #0e3367;
        box-shadow: 3px 3px 15px #0e3367 inset,
          -3px -3px 15px #0e3367 inset;
        width: 60%;
        .top-left-header{
          display: flex;
          align-items: center;
          width: 100%;
          height: 0.34rem;
          background: #102c62;
          font-size: 0.1rem;
        }
      }
      .top-right{
        margin: 0.1rem 0.1rem 0rem 0.05rem;
        border: 0.1px solid #0e3367;
        box-shadow: 3px 3px 15px #0e3367 inset,
          -3px -3px 15px #0e3367 inset;
        width: 40%;
        .top-right-header{
          display: flex;
          align-items: center;
          width: 100%;
          height: 0.34rem;
          background: #102c62;
          font-size: 0.1rem;
        }
      }
    }
    .bottom{
      margin: 0.1rem 0.1rem 0.1rem 0.1rem;
      border: 0.1px solid pink;
      height: 53%;
      .bottom-header{
        display: flex;
        align-items: center;
        width: 100%;
        height: 0.34rem;
        background: #102c62;
        font-size: 0.1rem;
      }
    }
  }
</style>