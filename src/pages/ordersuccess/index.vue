<template>
  <div>
    <div class="cart-complete-wrap">
      <div class="cart-complete">
        <h3>已生成订单！去付款咯~</h3>

        <div class="goods">
          <div class="left-good"></div>
          <div class="right-gocart">
            <a href="javascript:" class="sui-btn btn-xlarge">
              <router-link to="/home">返回首页</router-link>
            </a>
            <a href="javascript:">
              <router-link to="/preorder">去订单页面付款</router-link>
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="orderpaywrapper">
      <div class="orderpaycontainer">
        <div class="title">
          <h3>请选择以下支付方式付款</h3>
        </div>
        <div class="choose">
          <div class="wechat">
            <el-button type="success">微信支付</el-button>
            <div class="imgbox">
              <img src="./images/wechat.jpg" alt="" />
            </div>
          </div>
          <div class="allpay">
            <el-button type="success">支付宝</el-button>
            <div class="imgbox">
              <img src="./images/pay.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddCartSuccess",
};
</script>

<style lang="less" scoped>
.cart-complete-wrap {
  background-color: #b8ceb9;
  margin-bottom: 20px;

  .cart-complete {
    width: 1200px;
    margin: 0 auto;
    margin-top: 190px;
    height: 200px;

    h3 {
      font-weight: 400;
      font-size: 30px;
      color: #43690b;
      padding-top: 40px;
      padding-bottom: 0px;
      margin: 0;
    }

    .goods {
      overflow: hidden;
      padding: 10px 0;

      .left-good {
        float: left;

        .left-pic {
          border: 1px solid #dfdfdf;
          width: 100px;
          height: 100px;
          float: left;
          img {
            width: 100px;
            height: 100px;
          }
        }

        .right-info {
          color: #444;
          float: left;
          margin-left: 10px;

          .title {
            width: 100%;
            line-height: 40px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            font-size: 16px;
          }

          .attr {
            color: #aaa;
            font-size: 14px;
          }
        }
      }

      .right-gocart {
        float: right;
        margin-top: 80px;
        background-color: #43690b;

        a {
          padding: 7px 36px;
          font-size: 17px;
          line-height: 22px;
          color: #fff;
          background-color: #43690b;
          text-decoration: none;
          box-sizing: border-box;
          border: 1px solid #e1e1e1;
        }

        a:hover {
          background-color: #444;
          color: white;
          border: 1px solid #eaeaea;
        }

        a:active {
          background-color: #e1e1e1;
          border: 1px solid #d5d5d5;
        }

        .btn-danger {
          background-color: #e1251b;
          color: #fff;
        }

        .btn-danger:hover {
          background-color: #e1251b;
        }
      }
    }
  }
}

.orderpaywrapper {
  background-color: #b8ceb9;
  height: 900px;

  .orderpaycontainer {
    width: 1200px;
    margin: 0 auto;
    margin-top: 40px;

    .title {
      border-bottom: 1px solid #43690b;
      margin-bottom: 20px;

      h3 {
        font-weight: 400;
        font-size: 24px;
        padding-top: 15px;
        padding-bottom: 15px;
        margin: 0;
      }
    }

    .choose {
      display: flex;

      .wechat {
        padding: 10px;
        margin-right: 50px;

        .imgbox {
          margin-top: 20px;
          width: 500px;
          height: 600px;

          img {
            width: 100%;
            height: 100%;
          }
        }
      }

      .allpay {
        padding: 10px;

        .imgbox {
          margin-top: 20px;
          width: 500px;
          height: 600px;

          img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }
}
</style>