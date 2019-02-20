<template>
  <div class="content">
    <!--<h1>{{ msg }}</h1>-->
  </div>
</template>
<script>
    export default {
        data () {
            return {
                msg: 'Right-Middle',
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

</style>
