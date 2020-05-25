<template>
  <div class="wrapper login-wrapper">
    <vue-particles
      color="#dedede"
      :particleOpacity="0.7"
      :particlesNumber="80"
      shapeType="circle"
      :particleSize="4"
      linesColor="#dedede"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="0.4"
      :linesDistance="150"
      :moveSpeed="3"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push"
    >
    </vue-particles>
    <div class="login">
      <p class="login-title">后台管理系统</p>
      <el-form :model="loginForm" :rules="rules" ref="loginForm" class="login-form">
        <el-form-item prop="username">
          <el-input v-model="loginForm.username" placeholder="请输入用户名">
            <el-button slot="prepend" icon="xing-denglu"></el-button>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="loginForm.password" placeholder="请输入登录密码" @keyup.enter.native="submitLogin">
            <el-button slot="prepend" icon="xing-mima"></el-button>
          </el-input>
        </el-form-item>
        <el-form-item class="login-btn">
          <el-button type="primary" @click="submitLogin" size="small">登 录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import formatDate from '../utils/formatDate'
export default {
  name: 'login',
  data() {
    return {
      loginForm: {
        username: 'admin',
        password: 'admin'
      },
      rules: {
        username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
      }
    }
  },
  created() {},
  methods: {
    submitLogin () {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.$message.success('登录成功')
          localStorage.setItem('MS_USERNAME', this.loginForm.username)
          localStorage.setItem('MS_LOGINTIME', formatDate('', 'YYYY-MM-DD'))
          this.$router.push('/')
        } else {
          return false
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.login-wrapper {
  position: relative;
  background: url('../assets/images/login_bg.jpg');
  background-size: cover;
  #particles-js {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;
  }
  .login {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    background: rgba(255, 255, 255, .8);
    width: 400px;
    border-radius: 15px;
    box-shadow: 0 8px 12px 0 rgba(0,0,0,.8);
    z-index: 2;
    .login-title {
      width: 100%;
      line-height: 50px;
      text-align: center;
      font-size: 20px;
      font-weight: bold;
      color: #000;
      border-bottom: 1px solid #ddd;
      }
    .login-form {
      padding: 30px;
      .login-btn {
        text-align: center;
      }
    }
  }
}
</style>
