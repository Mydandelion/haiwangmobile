<template>
<div>
  <mt-header fixed title="订单详情">
    <mt-button slot="left" icon="back" @click="back">返回</mt-button>
  </mt-header>
</div>
</template>

<script>
export default {
  name: 'OrderDetail',
  methods: {
    back () {
      this.$router.back(-1)
    }
  }
}
</script>

<style scoped>

</style>
