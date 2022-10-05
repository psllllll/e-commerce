<template>
  <div class="edit_container">
    <div class="edit_box">
      <!--头像区-->
      <div class="avatar_box">
        <img src="./images/logo.png" alt="" />
      </div>
      <!--登录表单区-->
      <el-form
        ref="editFormRef"
        :model="editForm"
        :rules="editFormRules"
        label-width="0px"
        class="edit_form"
      >
        <!--电话-->
        <el-form-item prop="mobile">
          <el-input
            v-model="editForm.mobile"
            prefix-icon="el-icon-phone"
            placeholder="请输入电话号码"
            auto-complete="on"
          ></el-input>
        </el-form-item>
        <!--用户名-->
        <el-form-item prop="username">
          <el-input
            v-model="editForm.username"
            prefix-icon="el-icon-user-solid"
            placeholder="请输入用户名称"
          />
        </el-form-item>
        <!--收件地址-->
        <el-form-item prop="address">
          <el-input
            v-model="editForm.address"
            prefix-icon="el-icon-position"
            placeholder="请输入收件地址"
          />
        </el-form-item>
        <!--性别-->
        <el-select v-model="editForm.sex" placeholder="请选择性别" prop="sex">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>

        <!--按钮-->
        <div class="buttonStyle">
          <el-form-item class="btns">
            <el-button type="primary" @click="edit">确定修改</el-button>
            <el-button type="info" @click="resetEditForm">重置</el-button>
            <el-button type="">
              <router-link to="/home">返回首页</router-link>
            </el-button>
          </el-form-item>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      editForm: {
        username: "",
        mobile: "",
        address: "",
        sex: "",
      },
      editFormRules: {
        mobile: [
          { required: true, message: "请输入电话号码", trigger: "blur" },
          {
            min: 11,
            max: 11,
            message: "长度在 6 到 15 个字符",
            trigger: "blur",
          },
        ],
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          {
            min: 1,
            max: 10,
            message: "长度在 6 到 15 个字符",
            trigger: "blur",
          },
        ],
        address: [
          { required: true, message: "请输入收件地址", trigger: "blur" },
          { min: 4, max: 40, message: "请输入正确的收件地址", trigger: "blur" },
        ],
      },

      options: [
        {
          value: "男",
          label: "男",
        },
        {
          value: "女",
          label: "女",
        },
      ],
    };
  },
  methods: {
    resetEditForm() {
      this.$refs.editFormRef.resetFields();
    },
    edit() {
      axios.post("/user/update", this.editForm).then(
        (res) => {
          console.log(res.data);
          this.$router.push("/home");
          this.$message.success("修改成功！");
        },
        (error) => {
          this.$message.error("修改失败！");
          console.log(error.message);
        }
      );
    },
  },
};
</script>

<style lang="less" scoped>
.edit_container {
  background-color: #2a3d30;
  height: 100%;
}

.edit_box {
  width: 450px;
  height: 430px;
  background-color: #fff;
  border-radius: 3px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.avatar_box {
  height: 130px;
  width: 130px;
  border: 1px solid #eee;
  border-radius: 50%;
  padding: 10px;
  box-shadow: 0 0 10px #ddd;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: #eee;
  }
}
.edit_form {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
}

.btns {
  display: flex;
  justify-content: flex-end;
}

.el-select {
  width: 410px;
}

.buttonStyle {
  margin-top: 30px;
}
</style>