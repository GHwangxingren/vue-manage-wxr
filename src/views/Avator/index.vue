<template>
  <div class="components-container">
    <el-card>
      <p class="desc">
        This is based on <a class="link-type" href="//github.com/dai-siki/vue-image-crop-upload" target="_blank"> vue-image-crop-upload</a>
      </p>

      <avator-thumb :img="image" />

      <el-button type="primary" icon="el-icon-upload" style="position: absolute;bottom: 15px;margin-left: 40px;" @click="imagecropperShow = true">
        上传头像
      </el-button>
    </el-card>

    <avator-upload
      :key="imagecropperKey"
      :width="300"
      :height="300"
      v-model="imagecropperShow"
      url=""
      lang-type="en"
      @crop-upload-success="cropUploadSuccess"
      @crop-upload-fail="cropUploadFail"
      @src-file-set="srcFileSet"
      @crop-success="cropSuccess"
    />
  </div>
</template>

<script>
import AvatorUpload from "@/components/Upload";
import AvatorThumb from "@/components/AvatorThumb";

export default {
  name: "AvatarUploadDemo",
  components: { AvatorUpload, AvatorThumb },
  data() {
    return {
      imagecropperShow: false,
      imagecropperKey: 0,
      image: "https://wpimg.wallstcn.com/577965b9-bb9e-4e02-9f0c-095b41417191"
    };
  },
  methods: {
    // 图片截取完成事件（上传前), 参数( imageDataUrl, field )
    cropSuccess(resData) {
      console.log(resData);
      this.imagecropperShow = false;
      this.imagecropperKey = this.imagecropperKey + 1;
      this.image = resData;
    },
    // 上传失败
    cropUploadFail() {},
    // 用户选取文件之后, 参数( fileName, fileType, fileSize )
    srcFileSet(fileName) {
      console.log(fileName);
    },
    // 上传成功
    cropUploadSuccess() {}
  }
};
</script>

<style lang="less" scoped>
.components-container {
  position: relative;

  .desc {
    font-size: 16px;
    margin-bottom: 20px;
  }
}
</style>
