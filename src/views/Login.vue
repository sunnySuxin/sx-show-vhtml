<template>
  <el-form :model="loginData" :rules="verifyRule" ref="loginData" label-position="left" label-width="0px"
           class="login-container">
    <h2 class="title">网上商城</h2>
    <el-form-item prop="username">
      <el-input type="text" prefix-icon="my-icon-wodejuhuasuan" v-model="loginData.username" auto-complete="off"
                placeholder="用户名"></el-input>
    </el-form-item>
    <el-form-item prop="password">
      <el-input type="password" prefix-icon="my-icon-suo" v-model="loginData.password" auto-complete="off"
                placeholder="密码"></el-input>
    </el-form-item>
    <el-checkbox v-model="checked" checked class="remember">记住密码</el-checkbox>
    <el-form-item style="width:100%;">
      <el-button type="primary" style="width:100%;" @click.native.prevent="login" :loading="logining">登录</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import {requestLogin} from '../api/api'

export default {
  data () {
    return {
      logining: false, // 默认不显示加载中状态
      // 登录值
      loginData: {
        username: '',
        password: ''
      },
      // 校验规则
      verifyRule: {
        username: [
          {required: true, message: '用户名不能为空', trigger: 'blur'}
        ],
        password: [
          {required: true, message: '密码不能为空', trigger: 'blur'},
          {min: 6, max: 16, message: '密码长度只能是6-16位', trigger: 'blur'}
        ]
      },
      checked: true
    }
  },
  methods: {
    login (e) {
      // var _this = this
      this.$refs.loginData.validate((valid) => {
        if (valid) {
          this.logining = true // 显示加载中状态
          // NProgress.start()
          var loginParams = {username: this.loginData.username, password: this.loginData.password}
          // 发起登录请求
          requestLogin(loginParams).then(data => {
            this.logining = false
            // NProgress.done();
            let {msg, code, userInfo} = data
            if (code !== 200) {
              this.$message({
                message: msg,
                type: 'error'
              })
            } else {
              sessionStorage.setItem('userInfo', JSON.stringify(userInfo))
              this.$router.push({path: '/shopList'})
            }
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}

</script>

<style lang="scss" scoped>
  .login-container {
    -webkit-border-radius: 5px;
    border-radius: 5px;
    -moz-border-radius: 5px;
    background-clip: padding-box;
    margin: 145px auto;
    width: 340px;
    padding: 35px 35px 15px 35px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
    .title {
      margin: 0px auto 40px auto;
      text-align: center;
      color: #505458;
    }
    .remember {
      margin: 0px 0px 35px 0px;
    }
  }
</style>
