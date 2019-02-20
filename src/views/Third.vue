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
            <div class="card-header">
              <span>外来人员情况</span>
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
        <div class="card-header">
          <span>车辆情况</span>
        </div>
        bottom-left
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
        components:{

        },
        mounted(){
        },
        methods: {
        }
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
        border: 0.1px solid pink;
        width: 50%;
        .top-left-content{
          height: 91%;
          display: flex;
          .top-left-left{
            width:49%;
            height: 97%;
            margin: 0.05rem 0.05rem 0.05rem 0.1rem;
            border: 0.1px solid pink;
            .top-left-left-top{
              width:98%;
              height: 42%;
              margin: 0.02rem 0.03rem 0.02rem 0.03rem;
              border: 0.1px solid pink;
            }
            .top-left-left-bottom{
              width:98%;
              height: 56%;
              margin: 0.02rem 0.03rem 0.02rem 0.03rem;
              border: 0.1px solid pink;
            }
          }
          .top-left-right{
            width:49%;
            height: 97%;
            margin: 0.05rem 0.1rem 0.05rem 0rem;
            border: 0.1px solid pink;
          }
        }
      }
      .top-right{
          margin: 0.1rem 0.05rem 0rem 0.1rem;
          border: 0.1px solid pink;
          width: 50%;
        .top-right-content{
          display: flex;
          height:91%;
          .top-right-left{
            width:49%;
            height: 97%;
            margin: 0.05rem 0.05rem 0.05rem 0.1rem;
            border: 0.1px solid pink;
          }
          .top-right-right{
            width:49%;
            height: 97%;
            margin: 0.05rem 0.1rem 0.05rem 0rem;
            border: 0.1px solid pink;
          }
        }
      }
    }
    .bottom{
      display: flex;
      height: 46%;
      .bottom-left{
        width: 50%;
        margin: 0.1rem 0.05rem 0.1rem 0.1rem;
        border: 0.1px solid pink;
      }
      .bottom-right{
        margin: 0.1rem 0.05rem 0.1rem 0.1rem;
        border: 0.1px solid pink;
        width: 50%;
        .bottom-right-content{
          height:91%;
          display: flex;
          .bottom-right-left{
            width:49%;
            height: 96.6%;
            margin: 0.05rem 0.05rem 0.05rem 0.1rem;
            border: 0.1px solid pink;
          }
          .bottom-right-right{
            width:49%;
            height: 96.6%;
            margin: 0.05rem 0.1rem 0.05rem 0rem;
            border: 0.1px solid pink;
          }
        }
      }
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
  .card-header{
    display: flex;
    align-items: center;
    width: 100%;
    height: 0.3rem;
    background: #102c62;
    font-size: 0.1rem;
  }
</style>