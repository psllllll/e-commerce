<template>
  <div class="big_wrapper">
    <div class="navigation">
      <div class="container">
        <el-row>
          <el-col :span="12">
            <el-menu
              default-active="2"
              class="el-menu-vertical-demo"
              @open="handleOpen"
              @close="handleClose"
              background-color="#162418"
              text-color="#fff"
              active-text-color="#ffd04b"
            >
              <el-menu-item index="1">
                <i class="el-icon-s-platform"></i>
                <span slot="title">
                  <router-link to="/product/show"
                    >手机 &nbsp; 笔记本</router-link
                  >
                </span>
              </el-menu-item>
              <el-menu-item index="2">
                <i class="el-icon-cpu"></i>
                <span slot="title">
                  <router-link to="/productclass2"> 家电</router-link>
                </span>
              </el-menu-item>
              <el-menu-item index="3">
                <i class="el-icon-shopping-bag-2"></i>
                <span slot="title">日用百货</span>
              </el-menu-item>
              <el-menu-item index="4">
                <i class="el-icon-s-custom"></i>
                <span slot="title">出行 &nbsp; 穿戴</span>
              </el-menu-item>
              <el-menu-item index="5">
                <i class="el-icon-receiving"></i>
                <span slot="title">电源 配件</span>
              </el-menu-item>
              <el-menu-item index="6">
                <i class="el-icon-service"></i>
                <span slot="title">耳机 音箱</span>
              </el-menu-item>
              <el-menu-item index="7">
                <i class="el-icon-box"></i>
                <span slot="title">智能 路由器</span>
              </el-menu-item>
              <el-menu-item index="8">
                <i class="el-icon-shopping-bag-1"></i>
                <span slot="title">生活 箱包</span>
              </el-menu-item>
              <el-menu-item index="9">
                <i class="el-icon-place"></i>
                <span slot="title">运动户外</span>
              </el-menu-item>
              <el-menu-item index="10">
                <i class="el-icon-food"></i>
                <span slot="title">营养保健</span>
              </el-menu-item>
              <el-menu-item index="11">
                <i class="el-icon-star-off"></i>
                <span slot="title">热卖商品</span>
              </el-menu-item>
            </el-menu>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="swiper">
      <div class="block">
        <el-carousel height="616px" width="600px">
          <el-carousel-item v-for="(item, index) in images" :key="'i' + index">
            <img :src="item.url" />
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      images: [
        {
          url: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/36b45c624f42fa81732457e3f9773dbd.jpg?thumb=1&w=1533&h=575&f=webp&q=90",
        },
        {
          url: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/4c2ccbd65f5325796a6c2d8c984ca6b5.jpeg?thumb=1&w=1533&h=575&f=webp&q=90",
        },
        {
          url: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7b99a81d935902ae7db629032327c97d.jpeg?w=2452&h=920",
        },
      ],
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style lang="less" scoped>
.container {
  width: 600px;
  height: 500px;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

.el-carousel img {
  height: 100%;
  width: 100%;
}

.el-carousel {
  width: 1000px;
}
.navigation {
  height: 185px;
}

.el-row {
  width: 550px;
  height: 600px;
}

.el-row {
  position: relative;
  top: 185px;
  left: -100px;
}

.big_wrapper {
  margin-left: 60px;
}
.block {
  position: relative;
  left: -100px;
}
</style>