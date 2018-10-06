<template>
  <div>
    <mt-header fixed title="术后回收汇总">
      <mt-button slot="left" icon="back" @click="back">返回</mt-button>
    </mt-header>
    <br/>
    <br/>
    <div>
      <mt-navbar v-model="selected">
        <mt-tab-item id="1">@我</mt-tab-item>
        <mt-tab-item id="2">待回收</mt-tab-item>
        <mt-tab-item id="3">已回收</mt-tab-item>
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
      </mt-tab-container>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SurgeryRecycle',
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
