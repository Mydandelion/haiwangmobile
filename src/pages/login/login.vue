<template>
  <div>
    <mt-header align="center" fixed title="海王运和医疗器械管理系统"></mt-header>
    <div class="login-box" id="app">
      <el-row>
          <el-input id="name" align="center" v-model="userName" placeholder="请输入帐号">
            <!--<template slot="prepend">帐号</template>-->
          </el-input>
      </el-row>
      <el-row>
          <el-input id="password" align="center" v-model="password" type="password" placeholder="请输入密码" @keyup.enter.native="check">
            <!--<template slot="prepend">密码</template>-->
          </el-input>
      </el-row>
      <el-row>
        <br/>
          <mt-button id="login" v-on:click="check" type="primary" size="normal">登录</mt-button>
      </el-row>
    </div>
  </div>
</template>

<script>
import {Indicator, Toast} from 'mint-ui'
export default {
  name: 'login',
  data () {
    return {
      userName: '',
      password: '',
      result: ''
    }
  },
  methods: {
    check () {
      Indicator.open('登录中')
      this.$ajax.get('http://localhost:8080/user/login/' + this.userName + '/' + this.password)
        .then(response => {
          if (response.data === '') {
            this.result = 0
          } else {
            Indicator.close()
            this.result = response.data
          }
        })
    }
  },
  watch: {
    result: function () {
      console.log(this.result)
      if (this.result !== null && this.result !== -1 && this.result) {
        localStorage.setItem('User', this.userName)
        localStorage.setItem('MenuId', this.result.menuId)
        if (this.result.company !== null) {
          localStorage.setItem('Company', this.result.company)
        } else {
          localStorage.setItem('Company', '海王')
        }
        Toast('欢迎您，' + this.userName)
        this.$router.push('/menu')
      } else {
        Indicator.close()
        Toast('密码错误！')
        this.userName = ''
        this.password = ''
        this.result = -1
      }
    }
  }
}
</script>

<style scoped>

</style>
