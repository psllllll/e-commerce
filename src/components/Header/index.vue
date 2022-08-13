<template>
  <div>
    <div class="daohang">
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#162418"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <el-menu-item index="1">
          <router-link to="/home">ZP商城</router-link>
        </el-menu-item>

        <!--关于我们-->
        <el-submenu index="3">
          <template slot="title">关于我们</template>
          <el-menu-item index="3-1">前端：彭霜凌</el-menu-item>
          <el-menu-item index="3-2">后端：张宸玮</el-menu-item>
        </el-submenu>

        <!--商品分类-->
        <el-submenu index="2">
          <template slot="title"> 商品分类 </template>
          <el-menu-item index="2-1">
            <router-link to="/product/show">手机 笔记本</router-link>
          </el-menu-item>
          <el-menu-item index="2-2">
            <router-link to="/productclass2">家电</router-link>
          </el-menu-item>
          <el-menu-item index="2-3">日用百货</el-menu-item>
          <el-submenu index="2-4">
            <template slot="title">出行 穿戴</template>
            <el-menu-item index="2-4-1">生活 箱包</el-menu-item>
            <el-menu-item index="2-4-2">运动户外</el-menu-item>
          </el-submenu>
          <el-menu-item index="2-5">电源 配件</el-menu-item>
          <el-menu-item index="2-6">耳机 音箱</el-menu-item>
          <el-menu-item index="2-7">热卖商品</el-menu-item>
        </el-submenu>

        <el-menu-item index="4" text-color="#565252" disabled
          >&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        </el-menu-item>

        <!--登录-->
        <el-menu-item index="5">
          <router-link to="/user/login">登录</router-link>
        </el-menu-item>

        <el-menu-item index="6">
          <router-link to="/user/register">注册</router-link>
        </el-menu-item>

        <el-menu-item index="13">
          <router-link to="/user/info">个人信息</router-link>
        </el-menu-item>

        <el-menu-item index="7"> 消息通知 </el-menu-item>

        <el-submenu index="8">
          <template slot="title">我的商城</template>
          <el-menu-item index="8-1">
            <router-link to="/shopcart">我的购物车</router-link>
          </el-menu-item>
          <el-menu-item index="8-2">
            <router-link to="/preorder">我的订单</router-link>
          </el-menu-item>
          <el-menu-item index="8-3">我的关注</el-menu-item>
          <el-menu-item index="8-4">返修退换货</el-menu-item>
        </el-submenu>

        <el-submenu index="9">
          <template slot="title">客户服务</template>
          <el-menu-item index="9-1">帮助中心</el-menu-item>
          <el-menu-item index="9-2">售后服务</el-menu-item>
          <el-menu-item index="9-3">在线客服</el-menu-item>
          <el-menu-item index="9-4">意见建议</el-menu-item>
        </el-submenu>

        <!--我的订单-->
        <el-menu-item index="10" >
          <router-link to="/preorder" target="_blank"> 我的订单 </router-link>
        </el-menu-item>

        <!--我的购物车-->
        <el-menu-item index="11">
          <router-link
            to="/shopcart"
            target="_blank"
            prefix-icon="el-icon-tickets"
          >
            <i class="el-icon-shopping-cart-full"></i>
            我的购物车
          </router-link>
        </el-menu-item>

        <el-submenu index="13">
          <template slot="title">设置</template>
          <el-menu-item index="13-1">
            <a @click="logout">退出登录</a>
          </el-menu-item>
        </el-submenu>

        <el-menu-item index="14">
          <router-link to="/passwordedit">修改密码</router-link>
        </el-menu-item>
      </el-menu>
    </div>
    <div class="logo">
      <img src="./images/logo.png" alt="" />
    </div>
    <div class="title">
      <img src="./images/logotitle.jpg" alt="" />
    </div>

    <!--搜索框-->
    <div class="searchArea">
      <form action="###" class="searchForm">
        <input
          type="text"
          id="autocomplete"
          class="input-error input-xxlarge"
        />
        <button class="sui-btn btn-xlarge btn-danger" type="button">
          搜索
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default { 
  data() {
    return {
      activeIndex: "1",
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    logout() {
      window.localStorage.clear();
      window.alert("退出成功！");
      this.$router.push("/home");
    },
  },
};
</script>

<style lang="less" scoped>
.logo {
  margin-left: 40px;
  margin-top: -15px;
  float: left;
}
.logo img {
  width: 200px;
}

.title {
  margin-top: 40px;
  position: absolute;
  left: 200px;
}

.title img {
  width: 250px;
}

.searchArea {
  float: right;
  margin-top: 72px;
  margin-right: 100px;

  .searchForm {
    overflow: hidden;

    input {
      box-sizing: border-box;
      width: 400px;
      height: 50px;
      padding: 0px 4px;
      border: 2px solid #1c482e;
      float: left;

      &:focus {
        outline: none;
      }
    }

    button {
      height: 50px;
      width: 68px;
      background-color: #1c482e;
      border: none;
      color: #fff;
      float: left;
      cursor: pointer;

      &:focus {
        outline: none;
      }
    }
  }
}
</style>