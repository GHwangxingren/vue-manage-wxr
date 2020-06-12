<template>
  <div class="home-page">
    <el-row :gutter="20">
      <el-col :span="8">
        <el-card class="info-card">
          <div class="role-info">
            <img src="../../assets/images/avator.jpeg" alt="头像" />
            <div class="ri">
              <p class="ri-name">{{ userName }}</p>
              <p class="ri-role">{{ roleDesc }}</p>
            </div>
          </div>
          <div class="role-login-info">
            <p>上次登录时间：</p>
            <p class="ri-third">{{ loginTime }}</p>
          </div>
          <div class="role-login-info">
            <p>上次登录地点：</p>
            <p class="ri-third">北京</p>
          </div>
        </el-card>
        <lang-agree />
      </el-col>
      <el-col :span="16">
        <data-view />
        <to-do-list />
      </el-col>
    </el-row>
    <el-row :gutter="20" style="margin-top: 20px;">
      <el-col :span="12">
        <el-card shadow="hover">
          <schart ref="bar" class="schart" canvas-id="bar" :options="options1" />
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card shadow="hover">
          <schart ref="line" class="schart" canvas-id="line" :options="options2" />
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import DataView from "./component/DataView";
import ToDoList from "./component/ToDoList";
import LangAgree from "./component/LangAgree";
import Schart from "vue-schart";
import { mapGetters } from "vuex";
import { options1, options2 } from "@/utils/schartOptions";

export default {
  name: "HomePage",
  components: {
    DataView,
    ToDoList,
    LangAgree,
    Schart
  },
  data() {
    return {
      options1,
      options2
    };
  },
  computed: {
    ...mapGetters(["userName", "role", "loginTime"]),
    roleDesc() {
      return this.role === "admin" ? "超级管理员" : "游客";
    }
  }
};
</script>

<style lang="less" scoped>
.home-page {
  .info-card {
    height: 252px;

    .role-info {
      &:extend(.flex-align-center);
      padding-bottom: 30px;
      margin-bottom: 20px;
      border-bottom: 2px solid #222;

      img {
        width: 120px;
        height: 120px;
        border-radius: 50%;
      }

      .ri {
        padding-left: 30px;
        .ri-name {
          font-size: 30px;
          font-weight: bold;
          color: #222;
        }

        .ri-role {
          font-size: 16px;
          color: var(--grey-color);
        }
      }
    }

    .role-login-info {
      &:extend(.flex-align-center);
      font-size: 14px;
      color: var(--grey-color);

      .ri-third {
        margin-left: 50px;
      }
    }
  }

  .schart {
    width: 100%;
    height: 300px;
  }
}
</style>
