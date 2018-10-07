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
          <mt-cell title="回收单号" v-for="item in user" :key="item.user" v-bind:value="item.orderId"/>
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
      user: '',
      title: 'hhh',
      list: ['1', '2', '3'],
      selected: '1',
      show: true,
      name: '12345789'
    }
  },
  methods: {
    getPost () {
      this.$ajax.get('http://localhost:8080/surgery/findAll?enterpriseName=海王&pageNumber=1&pageSize=15')
        .then(response => {
          this.user = response.data.content
        }).catch(function (err) {
          console.log(err)
        })
    },
    back () {
      this.$router.back(-1)
    }},

  mounted () {
    this.getPost()
  }

}
</script>

<style scoped>

</style>
