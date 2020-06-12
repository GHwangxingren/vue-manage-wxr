<template>
  <div class="driver">
    <el-card>
      <p class="card-icon">
        <i class="el-icon-s-opportunity"></i>
        点击按钮可查看本管理系统的基本操作
      </p>
      <el-button type="primary" @click.stop="guide">引导</el-button>
    </el-card>
  </div>
</template>

<script>
import driver from "@/mixins/driver";

export default {
  name: "Driver",
  mixins: [driver],
  methods: {
    guide() {
      this.startDriver();
    }
  }
};
</script>
