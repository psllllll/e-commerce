<template>
  <div class="order-main">
    <div class="container">
      <div class="order-body">
        <div class="order-left">
          <dl>
            <dt>订单中心</dt>
            <dd>我的订单</dd>
            <dd>评价晒单</dd>
            <dd>话费充值订单</dd>
            <dd>以旧换新订单</dd>
          </dl>
          <dl>
            <dt>个人中心</dt>
            <dd>我的个人中心</dd>
            <dd>消息通知</dd>
            <dd>购买资格</dd>
            <dd>现金账户</dd>
            <dd>礼品卡</dd>
            <dd>现金券</dd>
            <dd>喜欢的商品</dd>
            <dd>优惠券</dd>
            <dd>收货地址</dd>
            <dd>红包</dd>
          </dl>
          <dl>
            <dt>售后服务</dt>
            <dd>服务记录</dd>
            <dd>申请服务</dd>
            <dd>领取快递报销</dd>
          </dl>
          <dl>
            <dt>账户管理</dt>
            <dd>个人信息</dd>
            <dd>修改密码</dd>
            <dd>注销服务</dd>
            <dd>邮箱地址</dd>
          </dl>
        </div>

        <!--订单页面-->
        <div class="order-right">
          <div class="container">
            <div class="title">
              <h3>我的订单</h3>
            </div>
            <div class="choosewrapper">
              <div class="choose">
                <a class="active">全部有效订单</a>| 
                <a>待支付</a>|
                <a>待收货</a>
              </div>
            </div>
            <div>
              <!--订单具体信息-->
              <div class="orderwrapper" :model="orderlistdata">
                <div
                  class="somedetails"
                  v-for="item in orderlistdata"
                  :key="item.order.order_id"
                >
                  <div class="titlecontainer">
                    <div class="ordertitle">
                      <h3 v-if="item.order.status === false">等待付款</h3>
                      <h3 v-if="item.order.status === true">已完成</h3>
                      <h4>
                        订单号：{{
                          item.order.order_id
                        }}  &nbsp; &nbsp;  |   &nbsp;  &nbsp; 在线支付
                      </h4>
                    </div>
                  </div>
                  <div class="productwrapper">
                    <div class="productcontainer">
                      <ul
                        v-for="(po, index) in item.order.products"
                        :key="index"
                      >
                        <li>
                          <div class="productdetails">
                            <div class="imgbox">
                              <img :src="po.image" alt="" />
                            </div>
                            <div class="details">
                              <h4>{{ po.pname }}</h4>
                              <div class="price">
                                <span>{{ po.price }} x {{ po.pnum }}</span>
                              </div>
                              <div class="pricenum">
                                <h5>金额：￥{{ po.price * po.pnum }}</h5>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                      <div class="buttons">
                        <el-button
                          type="success"
                          v-if="item.order.status === false"
                          @click="pay(item.order.order_id)"
                          >立即付款</el-button
                        >
                        <el-button>订单详情</el-button>
                        <el-button>联系客服</el-button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  inject: ["reload"],
  name: "",
  data() {
    return {
      orderlistdata: [],
    };
  },
  created() {
    this.getorderlist();
  },
  methods: {
    getorderlist() {
      axios.post("order/check").then(
        (res) => {
          console.log(res);
          this.orderlistdata = res.data;
        },
        (error) => {
          console.log(error.message);
        }
      );
    },
    pay(value) {
      axios.post("order/ok", { orderId: value }).then(
        (res) => {
          console.log(value);
          console.log(res);
          window.alert("购买成功");
          this.reload();
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
.order-main {
  .container {
    margin: 0 auto;
    width: 1300px;

    .order-body {
      padding: 10px;
      color: #333;
      margin-top: 200px;

      &:after {
        content: "";
        display: block;
        clear: both;
      }

      .order-left {
        float: left;
        width: 16.67%;
        font-size: 18px;
        background-color: #fff;
        margin-left: 10px;
        margin-top: 10px;
        border-right: 15px solid #fff;

        dl {
          line-height: 28px;

          dt {
            font-weight: 700;
            padding: 6px;
            color: #566c3e;

            i {
              color: #77b72c;
            }
          }

          dd {
            margin: 0 0 6px;
            margin-top: 6px;
            border-bottom: 1px solid #ededed;
            text-align: center;
            color: #666;
          }
        }
      }

      //订单页面
      .order-right {
        //background-color: rgb(240, 247, 234);
        background-color: #fff;
        float: left;
        width: 81%;

        .container {
          width: 100%;

          .title {
            height: 90px;
            margin-left: 30px;
            margin-top: 0px;

            h3 {
              font-size: 40px;
              line-height: 90px;
              width: 350px;
            }

            span {
              font-size: 16px;
              float: left;
            }
          }

          .choosewrapper {
            height: 90px;
            margin-left: 15px;
            margin-top: 12px;

            .choose {
              line-height: 80px;
              font-size: 23px;

              a {
                padding: 15px;
              }
            }
          }

          .orderwrapper {
            background-color: rgb(243, 247, 244);
            margin-left: 30px;
            margin-right: 30px;
            margin-top: 12px;
            margin-bottom: 40px;
            border: 1px solid #566c3e;
            display: flex;
            flex-direction: column-reverse;

            .somedetails {
              .titlecontainer {
                border-bottom: 1px solid #61635f;
                background-color: #ecf3e5;

                .ordertitle {
                  margin-left: 40px;

                  h3 {
                    font-size: 36px;
                    font-weight: 20;
                    line-height: 80px;
                    color: #303c23;
                  }

                  h4 {
                    font-size: 14px;
                    line-height: 50px;
                  }

                  .price {
                    position: relative;
                    left: 600px;
                    top: -25px;

                    span {
                      font-size: 24px;
                      color: #303c23;
                    }
                  }
                }
              }
            }

            .productwrapper {
              .productcontainer {
                margin-left: 40px;
                li {
                  border-bottom: 1px solid rgb(58, 82, 66);
                }

                .productdetails {
                  display: flex;
                  padding: 10px;
                  height: 200px;

                  .imgbox {
                    width: 190px;
                    height: 190px;

                    img {
                      margin: auto;
                      width: 100%;
                      height: 100%;
                    }
                  }
                  .details {
                    margin-top: 40px;
                    margin-left: 30px;

                    h4 {
                      text-align: center;
                      font-size: 25px;
                      padding: 5px;
                      padding-bottom: 10px;
                    }

                    span {
                      padding: 5px;
                      font-size: 16px;
                    }

                    .pricenum {
                      h5 {
                        font-size: 18px;
                        line-height: 100px;
                      }
                    }
                  }
                }
                .buttons {
                  display: flex;
                  flex-direction: column;
                  position: relative;
                  left: 760px;
                  margin-bottom: 10px;

                  .el-button {
                    margin: 5px;
                    width: 130px;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}

.active {
  color: red;
}
</style>