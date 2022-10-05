<template>
  <div>
    <div>
      <ul class="container" :model="productList">
        <li
          class="productbox"
          v-for="(item, index) in productList"
          :key="index"
        >
          <div class="imgbox">
            <img :src="item.image" alt="" />
          </div>
          <div class="title">
            <h3>{{ item.pname }}</h3>
          </div>
          <el-form>
            <div class="buttonStyle">
              <el-form-item class="btns">
                <el-button type="">
                  <a @click="getproductdetails(item)">查看商品详情</a>
                </el-button>
              </el-form-item>
            </div>
          </el-form>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      productList: [],
      p: {
        ptype: "家电",
      },
      aproductlist: [],
    };
  },
  mounted() {
    this.reqCategoryList();
  },
  computed: {},
  created() {
    this.saveallproductpid = this.$store.state.saveallproductpid;
  },
  methods: {
    reqCategoryList() {
      axios.post("allsorts", { ...this.p }).then(
        (res) => {
          console.log("123");
          console.log(res);
          this.productList = res.data;
        },
        (error) => {
          console.log(error.message);
        }
      );
    },
    getproductdetails(item) {
      axios.post("product", { pid: item.pid }).then(
        (res) => {
          console.log(res);
          this.aproductlist = res.data;
          this.$router.push({
            path: `/product/details/${item.pid}`,
          });
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
.container {
  width: 1450px;
  margin: 0 auto;
  margin-top: 20px;
  //background-color: red;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 100px;
}
.productbox {
  width: 270px;
  height: 380px;
  margin: 10px;
  background-color: rgb(155, 74, 74);
  border-width: 3px;
  border-color: rgb(155, 74, 74);
  border-radius: 3%;
  display: block;
}

.imgbox {
  background-color: white;
  height: 260px;
  width: 255px;
  margin: 5px auto;
}

.imgbox img {
  width: 100%;
  height: 100%;
}

.productbox .title h3 {
  text-align: center;
  font-size: 18px;
  padding-bottom: 5px;
}

.buttonstyle {
  position: relative;
  left: 10px;
}

.btns {
  display: flex;
  justify-content: flex-end;
}

.productbox {
  position: relative;
}

.imgbox {
  position: relative;
}

.el-button {
  position: relative;
  top: 10px;
  left: -65px;
}
</style>