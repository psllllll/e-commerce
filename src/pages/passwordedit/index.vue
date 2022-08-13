<template>
  <div class="edit_container">
    <div class="edit_box">
      <!--头像区-->
      <div class="avatar_box">
        <img src="./images/logo.png" alt="" />
      </div>
      <!--登录表单区-->
      <el-form
        ref="passwordFormRef"
        :model="passwordForm"
        :rules="passwordFormRules"
        label-width="0px"
        class="edit_form"
      >
        <el-form-item prop="passwordold">
          <el-input
            class="entrpriseName"
            v-model="passwordForm.passwordold"
            prefix-icon="iconfont icon-3702mima"
            type="password"
            name="password"
            placeholder="请输入旧密码 "
          />
        </el-form-item>
        <el-form-item prop="passwordnew">
          <el-input
            class="entrpriseName"
            type="password"
            v-model="passwordForm.passwordnew"
            prefix-icon="iconfont icon-3702mima"
            name="password"
            placeholder="请输入新密码 "
          ></el-input>
        </el-form-item>
        <el-form-item prop="checkpasswordnew">
          <el-input
            class="entrpriseName"
            type="password"
            v-model="passwordForm.checkpasswordnew"
            prefix-icon="iconfont icon-3702mima"
            name="password"
            placeholder="再次确定新密码 "
          ></el-input>
        </el-form-item>

        <!--按钮-->
        <div class="buttonStyle">
          <el-form-item class="btns">
            <el-button type="primary" @click="edit(passwordForm)"
              >确定修改</el-button
            >
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
    // 密码验证
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.passwordForm.checkpasswordnew !== "") {
          this.$refs.register.validateField("checkpasswordnew");
        }
        callback();
      }
    };
    // 再次确认密码验证
    var validateCheckPass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.passwordForm.passwordnew) {
        callback(new Error("两次输入密码不一致!"));
        this.$message.error("两次输入的密码不一致");
      } else {
        callback();
      }
    };
    return {
      passwordForm: {
        passwordold: "",
        passwordnew: "",
        checkpasswordnew: "",
      },
      passwordFormRules: {
        passwordold: [
          { required: true, message: "请输入旧密码", trigger: "blur" },
          {
            min: 6,
            max: 15,
            message: "长度在 6 到 15 个字符",
            trigger: "blur",
          },
        ],
        passwordnew: [
          { validator: validatePass, trigger: "blur" },
          {
            min: 6,
            max: 15,
            message: "长度在 6 到 15 个字符",
            trigger: "blur",
          },
        ],
        checkpasswordnew: [
          { validator: validateCheckPass, trigger: "blur" },
          {
            min: 6,
            max: 15,
            message: "长度在 6 到 15 个字符",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    resetEditForm() {
      this.$refs.passwordFormRef.resetFields();
    },
    edit(passwordForm) {
      if (passwordForm.passwordnew === passwordForm.checkpasswordnew) {
        axios.post("user/password", this.passwordForm).then(
          (res) => {
            console.log(res.data, 666);
            if (res.data.update !== "failed") {
              this.$message.success("修改成功！");
              this.$router.push("/home");
            } else {
              this.$message.error("修改失败！旧密码错误");
            }
          },
          (error) => {
            this.$message.error("修改失败！");
            console.log(error.message);
          }
        );
      }
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
  height: 350px;
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