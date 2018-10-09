<template>
  <div>
    <mt-header fixed title="术后回收汇总">
      <mt-button slot="left" icon="back" @click="back">返回</mt-button>
    </mt-header>
    <br/>
    <div>
      <mt-navbar v-model="selected" style="margin-top: 15px">
        <mt-tab-item id="1">@我</mt-tab-item>
        <mt-tab-item id="2">待回收</mt-tab-item>
        <mt-tab-item id="3">已回收</mt-tab-item>
      </mt-navbar>
      <div class="line" style="width: 100%;background-color: #f2f0f6;height: 15px;"></div>
      <!-- tab-container -->
      <mt-tab-container v-model="selected">
        <mt-tab-container-item id="1">
          <mt-cell title="回收单号" v-for="item in user" :key="item.user" v-bind:value="item.orderId"/>
        </mt-tab-container-item>
        <mt-tab-container-item id="2">
          <div class="wait_recycle_wrap">
            <div class="wrap_item" v-for="order in orders">
              <div class="item_top">
                <span class="hospital">{{order.hospitalName}}</span>
                <span class="status">待回收</span>
              </div>
              <div class="item_bottom">
                <div class="item_row"><div class="bottom_label">产品类型</div><span class="bottom_info">{{order.productType}}</span></div>
                <div class="item_row"><div class="bottom_label">手术名称</div><span class="bottom_info">{{order.surgeryName}}</span></div>
                <div class="item_row"><div class="bottom_label">单号</div><span class="bottom_info">{{order.orderId}}</span></div>
              </div>
              <div class="item_data">{{order.createTime}}</div>
            </div>
          </div>
        </mt-tab-container-item>
        <mt-tab-container-item id="3">
          <div class="wait_recycle_wrap">
            <div class="wrap_item" v-for="order in recycle" v-if="order.currentStatus!= 0 && order.currentStatus!= -1">
              <div class="item_top">
                <span class="hospital">{{order.hospitalName}}</span>
                <span class="status">已回收</span>
              </div>
              <div class="item_bottom">
                <div class="item_row"><div class="bottom_label">产品类型</div><span class="bottom_info">{{order.productType}}</span></div>
                <div class="item_row"><div class="bottom_label">手术名称</div><span class="bottom_info">{{order.surgeryName}}</span></div>
                <div class="item_row"><div class="bottom_label">单号</div><span class="bottom_info">{{order.orderId}}</span></div>
              </div>
              <div class="item_data">{{order.createTime}}</div>
            </div>
          </div>
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
      name: '12345789',
      orders: [],
      recycle: []
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
      this.$ajax.get('http://localhost:8080/surgery/findReturning?enterpriseName=海王&pageNumber=1&pageSize=10')
        .then(response => {
          this.orders = response.data.content
          console.log(this.orders)
        }).catch(function (err) {
          console.log(err)
        })
      this.$ajax.get('http://localhost:8080/surgery/findAllByStatus?enterpriseName=海王&status=6&pageNumber=1&pageSize=80')
        .then(response => {
          this.recycle = response.data.content
          console.log(this.recycle)
        }).catch(function (err) {
          console.log(err)
        })
    },
    back () {
      this.$router.back(-1)
    }
  },

  mounted () {
    this.getPost()
  }

}
</script>

<style scoped>
  .wait_recycle_wrap {
    background-color: #f2f0f6
  }

  .wrap_item {
    font-size: 12px;
    padding-left: 10px;
    padding-right: 10px;
    margin-bottom: 20px;
    background-color: white;
    position: relative;
  }

  .item_top {
    height: 35px;
    line-height: 35px;
    border-bottom: 2px solid #f2f0f6;
    position: relative;
  }

  .hospital {
 font-size: 14px;
  }

  .status {
    color: #009dff;
    font-size: 8px;
    position: absolute;
    right: 0px;
  }
  .item_row{
    height: 25px;line-height: 25px;
  }
  .bottom_label{
    color: #a9a9aa;
    width: 80px;
    display: inline-block;
  }
  .item_data{position: absolute;bottom: 2px;right: 10px;}
</style>
