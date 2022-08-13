<template>
  <div>
    <div>
      <ul class="container" :model="productList">
        <li
          class="productbox"
          v-for="(item, index) in productList.slice(0, 10)"
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
    };
  },
  mounted() {
    this.reqCategoryList();
    //通知vuex发数据，获取数据，存储于仓库当中
    //this.store.dispatch('categoryList')
  },
  computed: {
    /*
    ...mapState({
        //右侧需要一个函数，当使用这个计算属性的时候，右侧函数会立即执行以此
        //注入一个参数state，其实即为大仓库的数据
        categoryList:(state)=>{
            console.log(state);
            return state.home.categoryList;
        }
    })
    */
  },
  methods: {
    reqCategoryList() {
      axios.post("allproducts").then(
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
  height: 750px;
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
  font-size: 22px;
  padding-bottom: 10px;
}

/*
.el-button{
  margin: -10px 0;
  height: 43px;
  background-color: rgba(255, 255, 255, 0.3);
  border: none;
  border-radius: 4px;
  padding: 0 14px;
  color: #3d5345;
}
*/

.buttonstyle {
  position: relative;
  left: 0;
}

.btns {
  display: flex;
  justify-content: flex-end;
}

.el-button {
  position: relative;
  top: 10px;
  left: -65px;
}
</style>