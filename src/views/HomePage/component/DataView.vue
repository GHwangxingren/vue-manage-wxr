<template>
  <div class="data-view">
    <el-row :gutter="20">
      <el-col :span="8">
        <el-card shadow="hover">
          <div class="grid-content grid-con-1">
            <i class="el-icon-user grid-con-icon"></i>
            <div class="grid-cont-right">
              <div class="grid-num">1234</div>
              <div>用户访问量</div>
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card shadow="hover">
          <div class="grid-content grid-con-2">
            <i class="el-icon-bell grid-con-icon"></i>
            <div class="grid-cont-right">
              <div class="grid-num">34</div>
              <div>系统消息</div>
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card shadow="hover">
          <div class="grid-content grid-con-3">
            <i class="el-icon-shopping-bag-1 grid-con-icon"></i>
            <div class="grid-cont-right">
              <div class="grid-num">9853</div>
              <div>商品数量</div>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<style lang="less" scoped>
.data-view {
  .grid-content {
    &:extend(.flex-align-center);
    height: 100px;

    .grid-con-icon {
      width: 100px;
      height: 100px;
      font-size: 50px;
      text-align: center;
      line-height: 100px;
      color: var(--white-color);
    }

    &.grid-con-1 {
      .grid-con-icon {
        background-color: rgb(45, 140, 240);
      }

      .grid-num {
        color: rgb(45, 140, 240);
      }
    }

    &.grid-con-2 {
      .grid-con-icon {
        background-color: rgb(100, 213, 114);
      }

      .grid-num {
        color: rgb(100, 213, 114);
      }
    }

    &.grid-con-3 {
      .grid-con-icon {
        background-color: rgb(242, 94, 67);
      }

      .grid-num {
        color: rgb(242, 94, 67);
      }
    }

    .grid-cont-right {
      flex: 1;
      text-align: center;
      font-size: 14px;
      color: var(--grey-color);

      .grid-num {
        font-size: 30px;
        font-weight: bold;
      }
    }
  }
}
</style>
