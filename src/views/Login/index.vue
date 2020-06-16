<template>
  <div class="wrapper login-wrapper">
    <!-- 动画背景 -->
    <vue-particles
      color="#dedede"
      :particle-opacity="0.7"
      :particles-number="80"
      shape-type="circle"
      :particle-size="4"
      lines-color="#dedede"
      :lines-width="1"
      :line-linked="true"
      :line-opacity="0.4"
      :lines-distance="150"
      :move-speed="3"
      :hover-effect="true"
      hover-mode="grab"
      :click-effect="true"
      click-mode="push"
    >
    </vue-particles>
    <!-- 滑动验证码 -->
    <div class="slideShadow" v-show="showVerify">
      <transition>
        <div class="slideSty animated bounce">
          <slide-verify @success="onSuccess" @fail="onFail" slider-text="向右滑动" :w="350" :h="175" ref="slideVerify"></slide-verify>
          <div class="iconBtn"><i class="el-icon-circle-close" @click="showVerify = false"></i><i class="el-icon-refresh" @click="refresh"></i></div>
        </div>
      </transition>
    </div>
    <!-- 登录 -->
    <div class="login">
      <p class="login-title">后台管理系统</p>
      <el-form :model="loginForm" :rules="rules" ref="loginForm" class="login-form">
        <el-form-item prop="username" style="margin-bottom: 20px;">
          <el-input v-model="loginForm.username" placeholder="请输入用户名">
            <i slot="prepend" class="el-icon-user"></i>
          </el-input>
        </el-form-item>
        <el-form-item prop="password" style="margin-bottom: 20px;">
          <el-input v-model="loginForm.password" placeholder="请输入登录密码" @keyup.enter.native="submitLogin">
            <i slot="prepend" class="el-icon-lock"></i>
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
import SlideVerify from "@/components/SlideVerify";
import { mapActions } from "vuex";
export default {
  name: "login",
  components: {
    SlideVerify
  },
  data() {
    return {
      showVerify: false,
      loginForm: {
        username: "admin",
        password: "123456"
      },
      rules: {
        username: [{ required: true, message: "请输入用户名", trigger: "blur" }],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }]
      }
    };
  },
  methods: {
    ...mapActions({
      login: "user/_login"
    }),
    onSuccess() {
      this.showSlide = false;
      this.login(this.loginForm);
    },
    onFail() {
      this.$message.error("验证失败");
    },
    refresh() {
      this.$refs.slideVerify.reset();
    },
    submitLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.showVerify = true;
        } else {
          return false;
        }
      });
    }
  }
};
</script>

<style lang="less" scoped>
.login-wrapper {
  position: relative;
  background: url("../../assets/images/login_bg.jpg");
  background-size: cover;
  #particles-js {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;
  }
  .slideShadow {
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    .slideSty {
      position: absolute;
      width: 380px;
      height: 311px;
      background: #e8e8e8;
      border: 1px solid #dcdcdc;
      left: 50%;
      top: 50%;
      margin-left: -188px;
      margin-top: -176px;
      z-index: 99;
      border-radius: 5px;
      .slide-verify {
        margin: 13px auto 0 auto;
        width: 350px !important;
      }
      .iconBtn {
        padding: 9px 0 0 19px;
        color: #5f5f5f;
        border-top: 1px solid #d8d8d8;
        margin-top: 17px;
        i {
          font-size: 22px;
          cursor: pointer;
        }
        i:last-child {
          margin-left: 7px;
        }
      }
      .slide-verify-slider {
        width: 100% !important;
      }
    }
  }
  .login {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    background: rgba(255, 255, 255, 0.8);
    width: 400px;
    border-radius: 15px;
    box-shadow: 0 8px 12px 0 rgba(0, 0, 0, 0.8);
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
