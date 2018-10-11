<template>
  <div id="detail">
    <mt-header title="订单详情">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <h1>手术订单详情信息等</h1>
  </div>
</template>

<script>
    export default {
        name: "OrderCard"
    }
</script>

<style scoped>
  h1{
    font-weight:normal;
    color: #a9a9aa;
  }
</style>
