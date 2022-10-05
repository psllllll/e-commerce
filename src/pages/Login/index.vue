<template>
  <div class="box">
    <ul class="bg-bubbles">
      <li v-for="i in 10" :key="i"></li>
    </ul>
    <div class="big-box">
      <el-form
        ref="loginFormRef"
        :model="loginForm"
        :rules="loginFormRules"
        label-width="0px"
        class="login-form"
      >
        <h2>登 录</h2>
        <el-form-item prop="account">
          <el-input
            class="entrpriseName"
            v-model="loginForm.account"
            prefix-icon="el-icon-user-solid"
            placeholder="请输入账号邮箱"
            auto-complete="on"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            class="entrpriseName"
            v-model="loginForm.password"
            prefix-icon="iconfont icon-3702mima"
            type="password"
            name="password"
            placeholder="密码 "
          />
        </el-form-item>
        <el-form-item>
          <el-button type="submit" @click="login">登 录</el-button>
        </el-form-item>
        <router-link to="/user/register">
          <span>新用户注册</span>
        </router-link>
        <router-link to="/home">
          <span>返回首页</span>
        </router-link>
      </el-form>
      
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      loginForm: {
        account: "",
        password: "",
      },
      loginFormRules: {
        account: [
          { required: true, message: "请输入邮箱地址", trigger: "blur" },
          {
            type: "email",
            message: "请输入正确的邮箱地址",
            trigger: ["blur", "change"],
          },
        ],
        password: [
          { required: true, message: "请输入登录密码", trigger: "blur" },
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
    ...mapMutations(["setstate"]),
    login() {
      axios.post("user/login", this.loginForm).then(
        (res) => {
          console.log(res.data);
          if (res.data.login !== "success") {
            this.$router.push("/user/login");
            this.$message.error("登录失败");
          } else {
            window.localStorage.setItem("token", res.data.token);
            window.localStorage.setItem("login", res.data.login);
            this.setstate(res.data);
            this.$message.success("登陆成功！");
            this.$router.push("/home");
          }
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
* {
  margin: 0;
  padding: 0;
}

.box {
  display: flex;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
  background-size: cover;
}

.bg-bubbles {

  background: linear-gradient(
    to bottom right,
    rgb(68, 104, 73),
    #ffffff
  );

  position: absolute;
  top: -100;
  left: 0;
  width: 100%;
  height: 100%;
  margin: 0;
  overflow: hidden;
  box-sizing: border-box;
  li {
    border-radius: 50%;
    position: absolute;
    bottom: -160px;
    width: 40px;
    height: 40px;

    background-color: rgba(255, 255, 255, 0.2);
    //rgb(0, 47, 167);
    //rgba(255, 255, 255, 0.15);
    list-style: none;
    animation: square 15s infinite;
    transition-timing-function: linear;
    &:nth-child(1) {
      left: 10%;
    }
    &:nth-child(2) {
      left: 20%;
      width: 90px;
      height: 90px;
      animation-delay: 2s;
      animation-duration: 7s;
    }
    &:nth-child(3) {
      left: 25%;
      animation-delay: 4s;
    }
    &:nth-child(4) {
      left: 40%;
      width: 60px;
      height: 60px;
      animation-duration: 8s;
      background-color: rgba(255, 255, 255, 0.2);
    }
    &:nth-child(5) {
      left: 70%;
    }
    &:nth-child(6) {
      left: 80%;
      width: 120px;
      height: 120px;
      animation-delay: 3s;
      background-color: rgba(255, 255, 255, 0.2);
    }
    &:nth-child(7) {
      left: 32%;
      width: 160px;
      height: 160px;
      animation-delay: 2s;
    }
    &:nth-child(8) {
      left: 55%;
      width: 20px;
      height: 20px;
      animation-delay: 4s;
      animation-duration: 15s;
    }
    &:nth-child(9) {
      left: 25%;
      width: 10px;
      height: 10px;
      animation-delay: 2s;
      animation-duration: 12s;
      background-color: rgba(255, 255, 255, 0.2);
    }
    &:nth-child(10) {
      left: 85%;
      width: 160px;
      height: 160px;
      animation-delay: 5s;
    }
  }

  @keyframes square {
    0% {
      opacity: 0;
      transform: translateY(0px) rotate(0deg);
    }
    100% {
      opacity: 1;
      transform: translateY(-120vh) rotate(360deg);
    }
  }
}

.login-form {
  display: flex;
  position: relative;
  width: 300px;
  height: 390px;
  flex-direction: column;
  padding: 40px;
  text-align: center;
  z-index: 1;
  background: inherit;
  border-radius: 18px;
  overflow: hidden;
}

.login-form::before {
  content: "";
  position: absolute;
  top: -10px;
  left: -10px;
  width: calc(100% + 40px);
  /* + 两边各有一个空格  否则 无效*/
  height: calc(100% + 100px);
  background: inherit;
  box-shadow: 0 0 0 200px rgba(255, 255, 255, 0.2) inset;
  z-index: -1;
  filter: blur(6px);
  overflow: hidden;
}

.login-form h2 {
  font-size: 22px;
  font-weight: 400;
  color: #3d5245;
  margin-bottom: 30px;
}

.login-form input {
  text-decoration: none;
  margin: 0px 0;
  height: 47px;
  width: 305px;
  background-color: rgba(255, 255, 255, 0.3);
  border: none;
  border-radius: 4px;
  padding: 0 14px;
  color: #3d5345;
}

.login-form input:placeholder {
  color: #3d5245;
}

.el-button {
  margin: -10px 0;
  height: 43px;
  background-color: rgba(255, 255, 255, 0.3);
  border: none;
  border-radius: 4px;
  padding: 0 14px;
  color: #3d5345;
}

.el-button {
  position: relative;
  margin-top: 20px;
  width: 290px;
  background-color: rgba(57, 88, 69, 0.4);
  color: #ffffff;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.4s;
}

.el-button:hover {
  background-color: rgba(28, 71, 181, 0.67);
}

.el-button::before,
.el-button::after {
  content: "";
  display: block;
  width: 80px;
  height: 100%;
  background-color: rgba(0, 47, 167, 0.5);
  opacity: 0.5s;
  position: absolute;
  left: 0;
  top: 0;
  transform: skewX(-15deg);
  filter: blur(30px);
  overflow: hidden;
  transform: translateX(-100px);
}

.el-button::after {
  width: 40px;
  background-color: rgba(0, 47, 167, 0.3);
  left: 60px;
  filter: blur(5px);
  opacity: 0;
}

.el-button:hover::before {
  transition: all 1s;
  transform: translateX(320px);
  opacity: 0.7;
}

.el-button:hover::after {
  transition: all 1s;
  transform: translateX(320px);
  opacity: 1;
}

.el-button:focus {
  background-color: rgba(0, 47, 167, 0.5);
}

span {
  position: relative;
  padding: 0px 5px;
  //margin: 0px 0px 10px 0px;
  float: right;
  border-radius: 3px;
  font-size: 16px;
  font-weight: 540;
  color: rgb(98, 111, 143);
  text-decoration: none;
}

span:hover,
span:active {
  color: rgb(22, 34, 62);
}

.big-box span{
  padding-bottom: 10px;
}
</style>