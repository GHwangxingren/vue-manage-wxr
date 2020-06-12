<template>
  <div class="icons-page">
    <el-card>
      <p class="card-icon">
        <i class="el-icon-s-opportunity"></i>
        字体图标的使用
      </p>
      <el-tabs type="border-card">
        <el-tab-pane>
          <span slot="label"><i class="el-icon-picture-outline-round"></i> Element icons</span>
          <p class="icon-title">
            直接通过设置类名为
            <code>el-icon-iconName</code> 来使用即可，例如：<code>{{ elExp }}</code>
          </p>
          <ul class="icon-list">
            <li v-for="(item, index) in elIcon" :key="index">
              <i :class="item"></i>
              <p>{{ item }}</p>
            </li>
          </ul>
        </el-tab-pane>
        <el-tab-pane>
          <span slot="label"><i class="el-icon-s-promotion"></i> 阿里iconfont</span>
          <p class="icon-title">
            这里是通过使用阿里iconfont在项目中生成字体图标，直接通过设置类名为
            <code>el-icon-iconName iconfont</code> 来使用即可，例如：<code>{{ fontExp }}</code
            >（如果需要添加更多图标就去iconfont官方添加图标，资源很多）
          </p>
          <ul class="icon-list">
            <li v-for="(item, index) in iconFont.glyphs" :key="index">
              <i class="iconfont" :class="`${iconFont.css_prefix_text}${item.font_class}`"></i>
              <p>{{ item.font_class }}</p>
            </li>
          </ul>
        </el-tab-pane>
      </el-tabs>
    </el-card>
  </div>
</template>

<script>
import { iconFont, elIcon } from "@/utils/icon.js";

export default {
  name: "Icons",
  data() {
    return {
      iconFont,
      elIcon,
      elExp: "<i class='el-icon-delete'></i>",
      fontExp: "<i class='iconfont xxx-1_music69'></i>"
    };
  }
};
</script>

<style lang="less" scoped>
.icons-page {
  .icon-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, 130px);
    margin-top: 30px;

    li {
      display: grid;
      justify-items: center;
      align-items: center;
      height: 130px;
      border: 1px solid #ccc;

      i {
        font-size: 50px;
      }

      p {
        font-size: 12px;
        text-align: center;
      }
    }
  }
}
</style>
