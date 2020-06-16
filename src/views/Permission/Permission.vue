<template>
  <div class="roles-page">
    <el-card>
      <el-button type="primary" @click="addRole">添加权限</el-button>
      <el-table class="table-top" :data="userList" stripe border style="width: 100%;">
        <el-table-column prop="name" label="姓名" align="center" width="150px"></el-table-column>
        <el-table-column prop="role" label="身份" align="center" width="150px"></el-table-column>
        <el-table-column prop="desc" label="说明" align="center"></el-table-column>
        <el-table-column label="操作" align="center" width="300px">
          <template slot-scope="scope">
            <el-button type="primary" @click="editRole(scope.row, scope.$index)">编辑</el-button>
            <el-button type="warning" @click="deleteRole(scope.$index)" :disabled="scope.row.role === 'admin'">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>

    <el-dialog title="权限编辑" :visible.sync="dialogShow" class="diaForm">
      <el-form ref="rolesForm" :model="formData" :rules="rules" label-width="140px">
        <el-form-item label="姓名" prop="name">
          <el-input type="text" placeholder="请输入要添加的身份类别" v-model="formData.name"></el-input>
        </el-form-item>
        <el-form-item label="身份" prop="role">
          <el-select v-model="formData.role" placeholder="请选择活动区域">
            <el-option v-for="item in roleSel" :key="item.id" :label="item.name" :value="item.name"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="说明" prop="desc">
          <el-input type="text" placeholder="请输入相关说明" v-model="formData.desc"></el-input>
        </el-form-item>
        <el-form-item label="菜单">
          <el-tree :data="treeData" ref="tree" node-key="name" :props="defaultProps" show-checkbox :check-strictly="false"></el-tree>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="confirmRole">确认</el-button>
          <el-button @click="dialogShow = false">取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
import { getRolesListApi } from "@/api";
import { routes, asyncRoutes } from "@/router";
import { hasOnlyChild } from "@/utils/common.js";

export default {
  name: "SetRole",
  data() {
    return {
      routesList: [...routes, ...asyncRoutes],
      userList: [],
      dialogShow: false,
      rules: {
        name: [
          {
            required: true,
            message: "请输入姓名",
            trigger: "blur"
          }
        ],
        role: [
          {
            required: true,
            message: "请选择身份",
            trigger: "blur"
          }
        ]
      },
      formData: {},
      treeData: [],
      defaultProps: {
        label: "label",
        children: "children"
      },
      roleSel: [
        {
          name: "admin",
          id: 1
        },
        {
          name: "user",
          id: 2
        }
      ],
      editType: "",
      editIndex: null
    };
  },
  created() {
    this.getRolesList();
    this.treeData = this.handleTreeData(this.routesList);
  },
  methods: {
    async getRolesList() {
      let res = await getRolesListApi();

      res.code === 0 && (this.userList = res.data.list);
    },
    addRole() {
      this.editType = "add";
      this.formData = {};
      this.dialogShow = true;
      this.$nextTick(() => {
        this.$refs.rolesForm.clearValidate();
        this.$refs.tree.setCheckedKeys([]);
      });
    },
    editRole(row, index) {
      this.editIndex = index;
      this.editType = "edit";
      this.formData = Object.assign({}, this.formData, {
        name: row.name,
        role: row.role,
        desc: row.desc
      });
      this.dialogShow = true;
      this.$nextTick(() => {
        this.$refs.rolesForm.clearValidate();
        this.$refs.tree.setCheckedKeys(row.pages);
      });
    },
    deleteRole(index) {
      this.$confirm("此操作将永久删除相关数据, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.userList.splice(index, 1);
          this.$message({
            type: "success",
            message: "删除成功!"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    confirmRole() {
      this.$refs.rolesForm.validate(valid => {
        if (valid) {
          let _aTreeCheck = this.$refs.tree.getCheckedKeys();

          if (this.editType === "edit") {
            let nIndex = this.editIndex;

            for (let key in this.formData) {
              this.userList[nIndex][key] = this.formData[key];
            }
            this.userList[nIndex].pages = _aTreeCheck;
            this.$notify({
              title: "成功",
              message: "修改成功",
              type: "success"
            });
          } else {
            let oNewItem = Object.assign({}, this.formData);

            oNewItem.pages = _aTreeCheck;
            this.userList.push(oNewItem);
            this.$notify({
              title: "成功",
              message: "添加成功",
              type: "success"
            });
          }

          this.dialogShow = false;
          this.formData = {};
        }
      });
    },
    handleTreeData(routes) {
      let aCur = [];
      for (let item of routes) {
        if (item.hidden) continue;

        let oHasOnlyChild = hasOnlyChild(item.children, item);

        oHasOnlyChild && (item = oHasOnlyChild);

        let oData = {
          label: item.meta.title,
          name: item.name
        };

        item.children && (oData.children = this.handleTreeData(item.children));
        aCur.push(oData);
      }

      return aCur;
    }
  }
};
</script>

<style lang="less">
.roles-page {
  .table-top {
    margin-top: 10px;
    .el-button {
      padding: 8px 18px;
      font-size: 12px;
    }
  }

  .diaForm {
    .el-input {
      width: 350px;
    }

    .el-form-item__label {
      padding-right: 12px;
    }
  }
}
</style>
