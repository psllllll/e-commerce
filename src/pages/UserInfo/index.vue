<template>
  <div class="edit_container">
    <div class="edit_box">
      <!--头像区-->
      <div class="avatar_box">
        <img src="./images/logo.png" alt="" />
      </div>
      <!--登录表单区-->
      <el-form label-width="0px" class="edit_form" :model="userInfo">
        <el-form-item prop="account">
          <el-input
            v-model="userInfo.account"
            prefix-icon="el-icon-message"
          ></el-input>
        </el-form-item>

        <!--电话-->
        <el-form-item prop="mobile">
          <el-input
            v-model="userInfo.mobile"
            prefix-icon="el-icon-phone"
            auto-complete="on"
          ></el-input>
        </el-form-item>

        <!--用户名-->
        <el-form-item prop="username">
          <el-input
            v-model="userInfo.username"
            prefix-icon="el-icon-user-solid"
          />
        </el-form-item>
        <!--收件地址-->
        <el-form-item prop="address">
          <el-input v-model="userInfo.address" prefix-icon="el-icon-position" />
        </el-form-item>
        <!--性别-->
        <el-form-item prop="sex">
          <el-input v-model="userInfo.sex" prefix-icon="el-icon-user" />
        </el-form-item>

        <!--按钮-->
        <div class="buttonStyle">
          <el-form-item class="btns">
            <el-button type="primary">
              <router-link to="/user/edit">修改个人信息</router-link>
            </el-button>
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
      userInfo: {},
    };
  },
  created() {
    this.getUser();
    console.log(123);
  },
  methods: {
    getUser() {
      axios.post("user/info").then(
        (res) => {
          console.log(res);
          console.log("123");
          this.userInfo = res.data;
        },
        (error) => {
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
  height: 490px;
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