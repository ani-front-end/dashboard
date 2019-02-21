<template>
  <div class="content">
    <div class="container"></div>
  </div>
</template>
<script>
    export default {
        data () {
            return {
                msg: 'CenterBottomCenter',
            }
        },
        props: [
            'title',
        ],
        mounted() {
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
  .content{
    height:80%;
    .container{
      width: 30%;
      height: 80%;
      border: 2px solid black;
    }
  }
</style>
