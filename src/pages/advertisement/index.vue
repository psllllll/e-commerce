<template>
  <div class="ad w">
    <ul class="shortcut">
      <li>
        <a href="#">
          <i class="el-icon-success"></i>
          商品秒杀
        </a>
      </li>

      <li>
        <a href="#">
          <i class="el-icon-s-help"></i>
          企业团购
        </a>
      </li>

      <li>
        <a href="#">
          <i class="el-icon-s-unfold"></i>
          F码通道
        </a>
      </li>

      <li>
        <a href="#">
          <i class="el-icon-s-check"></i>
          学生通道
        </a>
      </li>

      <li>
        <a href="#">
          <i class="el-icon-s-finance"></i>
          以旧换新
        </a>
      </li>

      <li>
        <a href="#">
          <i class="el-icon-s-claim"></i>
          话费充值
        </a>
      </li>
    </ul>

    <ul class="imgs">
      <li v-for="(item, index) in images" :key="'i' + index">
        <a href="#">
          <img :src="item.url" alt="" />
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        {
          url: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/290270b6fc499fc5fcb653417e99fe91.jpg?w=632&h=340",
        },
        {
          url: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/5d1892854c8bb165e755d68bde287d71.jpg?w=632&h=340",
        },
        {
          url: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/28c13d0d11b38ec17fa5d83bc6ba5912.jpg?w=632&h=340",
        },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
.ad {
  height: 270px;
  padding-top: 40px;
  margin-left: 95px;
}

.ad .shortcut {
  background-color: #162418;
  margin-top: 14px;
  width: 260px;
  height: 195px;
  margin-right: 15px;
}

.ad .shortcut li::before {
  content: "";
  position: absolute;
  width: 65px;
  height: 1px;
}

.ad .shortcut li::after {
  content: "";
  position: absolute;
  height: 70px;
  width: 1px;
  top: 665px;
}

.ad .shortcut a {
  display: block;
  color: #cfccca;
  height: 80px;
  width: 76px;
  text-align: center;
  font-size: 13px;
}

.ad .shortcut i {
  display: block;
  padding-top: 20px;
  margin-bottom: 6px;
  font-size: 20px;
}

.ad .shortcut a:hover {
  color: #fff;
}

.ad .imgs {
  padding-top: 15px;
}

.ad .imgs li {
  width: 360px;
  margin-right: 15px;
}

.ad .imgs li:last-child {
  margin: 0;
}

.ad .imgs img {
  width: 100%;
  vertical-align: top;
}

.ad .shortcut,
.ad .imgs,
.ad li {
  float: left;
}
</style>