<template>
  <div>
  <mt-header fixed title="订单审核">
    <mt-button slot="left" icon="back" @click="back">返回</mt-button>
  </mt-header>
  <br/>
  <br/>
  <div>
    <mt-navbar v-model="selected">
      <mt-tab-item id="1">@我</mt-tab-item>
      <mt-tab-item id="2">待审核</mt-tab-item>
      <mt-tab-item id="3">已审核</mt-tab-item>
      <mt-tab-item id="4">已退回</mt-tab-item>
      <mt-tab-item id="5">已转单</mt-tab-item>
    </mt-navbar>
    <router-link id="OrderReviewDetail" to="/OrderReviewDetail">OrderReviewDetail</router-link>
  </div>
  </div>
</template>

<script>
export default {
  name: 'review',
  data () {
    return {
      selected: '1'
    }
  },
  methods: {
    back () {
      this.$router.back(-1)
    }
  }
}
</script>

<style scoped>

</style>
