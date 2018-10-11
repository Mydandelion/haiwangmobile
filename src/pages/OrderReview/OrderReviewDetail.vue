<template>
  <div class="info">
    <div id="detail">
      <mt-header title="订单详情">
        <router-link to="/" slot="left">
          <mt-button icon="back">返回</mt-button>
        </router-link>
        <mt-button icon="more" slot="right"></mt-button>
      </mt-header>
      <table class="table">
      <tr>
        <td class="LK">订单编号</td>
    <!--   <td class="LKk">{{orderInfo.orderId}}</td>-->
        <td class="LK">订单类型</td>
     <!--   <td class="LKk" v-show="orderInfo != null">{{message}}</td> -->
     </tr>
      <tr>
        <td class="LK">销售类型</td>
       <!-- <td class="LKk">{{orderInfo.saleType}}</td> -->
        <td class="LK">就诊方式</td>
       <!-- <td class="LKk">{{orderInfo.treatmentMethod}}</td>-->
      </tr>
      <tr>
        <td class="LK">产品线</td>
       <!-- <td class="LKk">{{orderInfo.productLine}}</td>-->
        <td class="LK">产品类型</td>
      <!--  <td class="LKk">{{orderInfo.productType}}</td>-->
      </tr>
      <tr>
        <td class="LK">产品品牌</td>
       <!-- <td class="LKk">{{orderInfo.productBrand}}</td>-->
        <td class="LK">到货时间</td>
       <!-- <td class="LKk">{{orderInfo.arriveTime}}</td>-->
      </tr>
      <tr>
        <td class="LK">销售代表</td>
      <!--  <td class="LKk">{{orderInfo.salesDelegate}}</td>-->
        <td class="LK">联系方式</td>
      <!--  <td class="LKk">{{orderInfo.salesDelegateAddress}}</td>-->
      </tr>
      <tr>
        <td class="LK">开单员</td>
      <!--  <td class="LKk">{{orderInfo.orderApplicant}}</td>-->
        <td class="LK">开单时间</td>
      <!--  <td class="LKk">{{orderInfo.createTime}}</td>-->
      </tr>
      <tr>
        <td class="LK">备注</td>
     <!--   <td class="LKk">{{orderInfo.remark}}</td>-->
      </tr>
      </table>
    </div>
    <hr>
      <mt-header title="手术信息"></mt-header>
      <mt-field label="手术名称"></mt-field>
      <mt-field label="手术时间" ></mt-field>
      <mt-field label="手术部位" ></mt-field>
      <mt-field label="医院名称"></mt-field>
      <mt-field label="医生模板"></mt-field>
    <hr>
      <mt-header title="人员信息"></mt-header>
      <mt-field label="手术医生"></mt-field>
      <mt-field label="病人姓名"></mt-field>
      <mt-field label="性别"></mt-field>
      <mt-field label="住院号"></mt-field>
      <mt-field label="病人床位号"></mt-field>
    <hr>
      <mt-header title="商品清单"></mt-header>
      <mt-field label="商品品牌" ></mt-field>
      <mt-field label="商品类型"></mt-field>
      <mt-field label="分类名称"></mt-field>
      <mt-field label="商品规格"></mt-field>
      <mt-field label="注册证号"></mt-field>
      <mt-field label="规格单位"></mt-field>
      <mt-field label="数量"></mt-field>
      <mt-field label="备注"></mt-field>
  </div>
</template>

<script>
export default {
  name: 'OrderReviewDetail'
}
</script>

<style scoped>
  .table{
    background: ivory;
  }
  .LK{
    width:20%;
    font-size: 10px;
    font-weight:bold;
    text-align: left;
  }
  .LKk{
    width: 30%;
    font-size: 10px;
    text-align: left;
  }
</style>
