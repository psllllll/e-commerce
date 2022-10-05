<template>
  <div class="cart">
    <div class="title">
      <i class="e-icon-files"></i>
      <h4>我的 购物车</h4>
    </div>
    <div class="cart-main">
      <div class="cart-th">
        <div class="cart-th1">全部</div>
        <div class="cart-th2">商品名称</div>
        <div class="cart-th3">单价</div>
        <div class="cart-th4">数量</div>
        <div class="cart-th5">小计</div>
        <div class="cart-th6">操作</div>
      </div>

      <div class="cart-body" :model="shopcartList">
        <ul
          class="cart-list"
          v-for="(item, index) in shopcartList"
          :key="index"
        >
          <li class="cart-list-con1">
            <el-checkbox :checked="checked" size="medium"></el-checkbox>
          </li>
          <li class="cart-list-con2">
            <img :src="item.image" />
          </li>
          <li class="cart-list-con3">
            <div class="txt">{{ item.pname }}</div>
            <div class="item-txt">{{ item.pdetails }}</div>
          </li>
          <li class="cart-list-con4">
            <span class="price">￥{{ item.price }}</span>
          </li>
          <li class="cart-list-con5">
            <el-input-number
              v-model="item.num"
              @change="handleChange"
              :min="1"
              :step="1"
              label="描述文字"
              size="small"
            ></el-input-number>
          </li>
          <li class="cart-list-con6">
            <span class="sum">￥{{ item.price * item.num }}</span>
          </li>
          <li class="cart-list-con7">
            <a href="#none" class="sindelet" @click="deleteproduct(item)"
              >删除商品</a
            >
          </li>
        </ul>
      </div>
    </div>

    <div class="cart-tool">
      <div class="select-all">
        <el-checkbox v-model="checked" size="medium">全选</el-checkbox>
      </div>

      <div class="option">
        <a href="#none" @click="clear">清空购物车</a>
        <a href="#none">清除下柜商品</a>
      </div>
      <div class="money-box">
        <div class="sumprice">
          <em>总价（不含运费） ：</em>
          <i class="summoney">{{ price }}</i>
        </div>

        <div class="sumbtn" :model="shopcartList">
          <button class="sum-btn" href="###" target="_blank">
            <a @click="preorder(shopcartList)">立即下单</a>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  inject: ["reload"],
  name: "ShopCart",
  data() {
    return {
      num: 1,
      checked: true,
      shopcartList: [],
      preorderList: [],
      price: 1,
    };
  },
  created() {
    this.getshopcart();
  },
  mounted() {
    
    setTimeout(() => {
      this.gettotalprice();
      console.log(this.price, 222);
    }, 500);
    
  },
  
  computed: {
    //判断底部复选框是否勾选
    // gettotalprice: function (){
    //   console.log('abc',this.shopcartList);
    //   // //总计
    //   let price = 0;
    //   this.shopcartList.forEach(item=>{
    //      console.log(item);
    //      price += item.num*item.price
    //      console.log(item.price);
    //    })
    //    this.totalrice = price.toFixed(2)
    // }
  },
  methods: {
    gettotalprice() {
      console.log("abc", this.shopcartList);
      // //总计
      let price = 0;
      this.shopcartList.forEach((item) => {
        console.log(item);
        price += item.num * item.price;
        console.log(item.price);
      });
      this.price = price.toFixed(2);
      // console.log(this.price, 333);
    },
    handleChange() {
      axios.post("shopcart/num", this.shopcartList).then(
        (res) => {
          console.log(this.shopcartList);
          console.log(res);
          this.reload();
        },
        (error) => {
          console.log(error.message);
        }
      );
    },
    getshopcart() {
      axios.post("shopcart/info").then(
        (res) => {
          console.log(res);
          this.shopcartList = res.data;
          this.getpreorderList(res.data);
          console.log(res.data, 1111);
        },
        (error) => {
          console.log(error.message);
        }
      );
    },
    deleteproduct(item) {
      axios.post("shopcart/delete", [{ pid: item.pid }]).then(
        (res) => {
          console.log(res);
          window.alert("您已将该商品删除");
          this.reload();
        },
        (error) => {
          console.log(error.message);
        }
      );
    },
    preorder(shopcartList) {
      axios.post("order/apply", this.preorderList).then(
        (res) => {
          console.log(shopcartList[1].pid);
          console.log(shopcartList[1].num);
          console.log(res);
        },
        (error) => {
          console.log(error.message);
        }
      );
      axios.post("shopcart/clear").then(
        (res) => {
          console.log(res);
          this.$router.push("/ordersuccess");
        },
        (error) => {
          console.log(error.message);
        }
      );
    },
    //计算商品总价
    /*
      gettotalprice(shopcartList){
        console.log('abc',shopcartList);
        console.log('f',this.totalprice);
        console.log('1',this);
        //总计
        let price = 0;
        this.shopcartList.forEach(item=>{
          console.log(item);
          price += item.num*item.price
          console.log(item.price);
        })
        this.totalprice = price.toFixed(2)
        console.log('price',this.totalprice);
        console.log(this);
      }
      */
    getpreorderList(shopcartList) {
      console.log("888", shopcartList);
      this.shopcartList.forEach((item) => {
        console.log(this.preorderList, 999);
        var str = [];
        for (let index = 0; index < this.shopcartList.length; index++) {
          var obj = {
            pid: this.shopcartList[index].pid,
            pnum: this.shopcartList[index].num,
          };
          str.push(obj);
        }
        this.preorderList = str;
        console.log(this.preorderList, 666);
      });
    },
    clear() {
      axios.post("shopcart/clear").then(
        (res) => {
          console.log(res);
          window.alret("成功清除购物车！");
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
.cart {
  width: 1200px;
  margin: 0 auto;
  margin-top: 170px;

  .title .el-icon-files {
    height: 40px;
    width: 40px;
  }

  .title h4 {
    margin-bottom: 25px;
    font-size: 25px;
    color: rgb(57, 75, 61);
    line-height: 25px;
    font-weight: 30;
  }

  .cart-main {
    .cart-th {
      background: #bfd6c2;
      border: 1px solid #c8f5d4;
      padding: 10px;
      font-size: 17px;
      line-height: 26px;
      overflow: hidden;
      text-align: center;
      height: 30px;

      & > div {
        float: left;
      }

      .cart-th1 {
        width: 35%;

        input {
          vertical-align: middle;
        }

        span {
          vertical-align: middle;
        }
      }

      .cart-th2 {
        width: 8%;
      }

      .cart-th3 {
        width: 17%;
      }
      .cart-th4 {
        width: 13%;
      }
      .cart-th5 {
        width: 7%;
      }
      .cart-th6 {
        width: 18%;
      }
    }

    .cart-body {
      margin: 15px 0;
      border: 1px solid #22552f;
      display: flex;
      flex-direction: column-reverse;

      .cart-list {
        height: 300px;
        padding: 10px;
        border-bottom: 1px solid #22552f;
        overflow: hidden;

        & > li {
          float: left;
        }

        .cart-list-con1 {
          width: 4.1667%;
          text-align: center;
          margin-top: 90px;
        }

        .cart-list-con2 {
          width: 23%;

          img {
            width: 250px;
            height: 250px;
            float: left;
          }

          .item-msg {
            float: left;
            width: 150px;
            margin: 0 10px;
            line-height: 18px;
          }
        }

        .cart-list-con3 {
          width: 19%;

          .item-txt {
            margin: auto;
            margin-top: 30px;
            font-size: 17px;
          }

          .txt {
            margin: auto;
            color: #22552f;
            margin-top: 60px;
            font-size: 20px;
          }
        }

        .cart-list-con4 {
          width: 12%;
          text-align: center;
          margin-top: 95px;
          font-size: 15px;

          .price {
            text-align: center;
            margin: 0 auto;
          }
        }

        .cart-list-con5 {
          width: 16%;
          text-align: center;
          margin-top: 90px;
        }

        .cart-list-con6 {
          width: 7%;
          text-align: center;
          margin-top: 90px;

          .sum {
            font-size: 16px;
          }
        }

        .cart-list-con7 {
          width: 16%;
          font-size: 17px;
          text-align: center;
          margin-top: 90px;

          a {
            color: #666;
          }
        }
      }
    }
  }

  .cart-tool {
    overflow: hidden;
    border: 1px solid rgb(27, 49, 31);
    height: 90px;
    font-size: 17px;
    margin-top: 40px;

    .select-all {
      padding: 10px;
      overflow: hidden;
      float: left;
      font-size: 16px;
      margin-top: 20px;

      span {
        vertical-align: middle;
      }
    }

    .option {
      padding: 10px;
      overflow: hidden;
      float: left;
      margin-top: 20px;

      a {
        float: left;
        padding: 0 10px;
        color: #666;
      }
    }

    .money-box {
      float: right;

      .chosed {
        line-height: 85px;
        float: left;
        padding: 0 10px;
      }

      .sumprice {
        width: 280px;
        line-height: 85px;
        float: left;
        padding: 0 10px;

        .summoney {
          color: #c81623;
          font-size: 16px;
        }
      }

      .sumbtn {
        float: right;

        .sum-btn {
          margin-top: 0;
          display: block;
          position: relative;
          width: 96px;
          height: 90px;
          line-height: 80px;
          color: #fff;
          text-align: center;
          font-size: 18px;
          font-family: "Microsoft YaHei";
          background: #22552f;
          overflow: hidden;
        }
      }
    }
  }
}
</style>