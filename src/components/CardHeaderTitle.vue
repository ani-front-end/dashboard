<template>
  <div class="header">
    <span>{{ title }}</span>
  </div>
</template>

<script>
export default {
  props: [
    'title',
  ]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .header{
    width: 100%;
    height: 0.3rem;
    background: #102e5d;
    font-size: 0.1rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
