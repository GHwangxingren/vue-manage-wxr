<template>
  <div class="user-page">
    <el-card>
      <p class="card-icon">您的权限页面有：</p>
      <el-tag v-for="(item, index) in roles" :key="index" type="success">{{ item }}</el-tag>
    </el-card>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "PageUser",
  computed: {
    ...mapGetters(["roles"])
  }
};
</script>

<style lang="less" scoped>
.user-page {
  .el-tag {
    margin-right: 10px;
    margin-bottom: 10px;
    padding: 0 10px;
  }
}
</style>
