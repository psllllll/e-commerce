<template>
  <div class="major">
    <div class="productcarousel">
      <el-carousel :interval="4000" type="card" height="350px" arrow="always">
        <el-carousel-item v-for="(item, index) in images" :key="index">
          <img :src="item.url" />
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="title">
      <h3>手机 笔记本</h3>
    </div>
    <div>
      <AllProduct></AllProduct>
    </div>
  </div>
</template>

<script>
import AllProduct from "@/pages/allproduct";

export default {
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
  components: {
    AllProduct,
  },
};
</script>

<style scoped>
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

.productcarousel {
  width: 1400px;
  overflow: hidden;
  margin-left: 60px;
  margin-top: -10px;
  margin-bottom: 15px;
}

.el-carousel_container {
  position: relative;
  margin: 0 auto;
}

.productcarousel img {
  width: 100%;
  height: 100%;
}

/*卡片样式 */
.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}

.el-carousel {
  width: 1400px;
  margin-top: 0px;
}

.imgcard {
  width: 650px;
  margin: auto;
}

.title h3 {
  text-align: center;
  font-size: 32px;
  margin-top: 30px;
  margin-bottom: 20px;
}
</style>