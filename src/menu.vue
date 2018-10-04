<template>
  <div>
    <mt-header fixed title="海王运和医疗器械管理系统">
      <mt-button slot="right" @click="logOut">注销</mt-button>
      <mt-button slot="left" icon="more">
      </mt-button>
    </mt-header>
    <div>
      <br/>
      <br/>
    <!--欢迎您,{{User}}-->
    </div>
    <div class="menu content">
      <router-link to="/SurgeryOrder">
        <mt-cell title="手术订单">
          <img slot="icon" src="assets/choices.png">
        </mt-cell></router-link>
        <mt-cell title="订单审核" icon="more"></mt-cell>
        <mt-cell title="术后回收"></mt-cell>
        <mt-cell title="物流分配"></mt-cell>
        <mt-cell title="合作伙伴"></mt-cell>
    </div>

  </div>

</template>

<script>
import {Toast} from 'mint-ui'
export default {
  name: 'menu',
  data () {
    return {
      User: '',
      isCollapse: true,
      currentMenu: '',
      loginIP: '',
      company: '海王后台管理系统',
      watcher: false
    }
  },
  methods: {
    logOut () {
      localStorage.removeItem('User')
      localStorage.removeItem('Company')
      localStorage.removeItem('MenuId')
      this.$router.push('/')
    }
  },
  mounted () {
    if (localStorage.getItem('User') !== null) {
      this.company = localStorage.getItem('Company')
      this.User = localStorage.getItem('User')
    } else {
      Toast('您未登录，请返回登录')
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>

</style>
