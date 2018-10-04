<template>
  <div>
<mt-header fixed title="手术订单">
  <mt-button slot="right">新订单</mt-button>
  <mt-button slot="left" icon="back" @click="back">返回</mt-button>
</mt-header>
    <br/>
    <br/>
    <div>
      <mt-navbar v-model="selected">
        <mt-tab-item id="1">@我</mt-tab-item>
        <mt-tab-item id="2">已提交</mt-tab-item>
        <mt-tab-item id="3">已审核</mt-tab-item>
        <mt-tab-item id="4">已退货</mt-tab-item>
      </mt-navbar>

      <!-- tab-container -->
      <mt-tab-container v-model="selected">
        <mt-tab-container-item id="1">
          <br/>
          <mt-cell title="订单号" value="1234567"/>
        </mt-tab-container-item>
        <mt-tab-container-item id="2">
          <br/>
          <mt-cell title="订单号" value="12345678"></mt-cell>
        </mt-tab-container-item>
        <mt-tab-container-item id="3">
          <br/>
          <mt-cell title="订单号" value="12345679"></mt-cell>
        </mt-tab-container-item>
        <mt-tab-container-item id="4">
          <br/>
          <mt-cell title="订单号" value="12345670"></mt-cell>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SugeryOrder',
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
