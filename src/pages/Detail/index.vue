<template>
  <div class="detail" :model="productMessage">
    <section class="con">
      <div class="mainCon">
        <div class="previewWrap">
          <div class="spec-preview">
            <img :src="productMessage.image" />
            <div class="event"></div>
          </div>
        </div>

        <!-- 右侧 -->
        <div class="InfoWrap">
          <div class="goodsDetail">
            <h3 class="InfoName">{{ productMessage.pname }}</h3>
            <h4 class="InfoDetails">{{ productMessage.pdetails }}</h4>
            <h4 class="InfoDetails">ZP自营</h4>
            <div class="priceArea">
              <div class="priceArea1">
                <div class="title">
                  价&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;格
                </div>
                <div class="price">
                  <i>¥</i>
                  <em>{{ productMessage.price }}</em>
                </div>
              </div>
              <div class="priceArea2">
                <div class="title">
                  活&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;动
                </div>
                <div class="fixWidth">
                  <div class="smalltitle">七夕特惠，满300减30</div>
                </div>
              </div>
            </div>
            <div class="support">
              <div class="supportArea">
                <div class="title">商品类型</div>
                <div class="fixWidth">{{ productMessage.type_name }}</div>
              </div>
              <div class="supportArea">
                <div class="title">收货地址</div>
                <div class="fixWidth">翻斗二街</div>
              </div>
            </div>
          </div>

          <div class="choose">
            <div class="chooseArea">
              <div class="choosed"></div>
              <dl>
                <dt class="title">选择颜色</dt>
                <dd changepirce="0" class="active">经典黑</dd>
                <dd changepirce="40">冷杉绿</dd>
              </dl>
              <dl>
                <dt class="title">选择版本</dt>
                <dd changepirce="0" class="active">8GB+256GB</dd>
                <dd changepirce="300">12GB+256GB</dd>
                <dd changepirce="900">12GB+512GB</dd>
              </dl>
              <dl>
                <dt class="title">意外保护</dt>
                <dd changepirce="0" class="active">
                  意外保障服务（意外损免费修）
                </dd>
                <dd changepirce="-1000">碎屏保障服务（碎屏免费修）</dd>
              </dl>
            </div>
            <div class="cartWrap">
              <div class="controls">
                <el-input-number
                  v-model="productdata.num"
                  @change="handleChange"
                  :min="1"
                  :max="10"
                  label="描述文字"
                  size="small"
                ></el-input-number>
              </div>
              <button class="add" @click="addcart">
                <a>加入购物车</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 内容详情页 -->
    <section class="product-detail">
      <aside class="aside">
        <div class="tabWraped">
          <h4>其 他 推 荐</h4>
        </div>
        <div class="tabContent">
          <div class="tab-pane active">
            <ul class="goodsList">
              <li>
                <div class="list-wrap">
                  <div class="p-img">
                    <img
                      src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/82ff5ea76730fdf6f91aba5d3b2e5739.jpg?thumb=1&w=250&h=250&f=webp&q=90"
                    />
                  </div>
                  <div class="operate">
                    <a href="javascript:void(0);">查看商品详情</a>
                  </div>
                </div>
              </li>
              <li>
                <div class="list-wrap">
                  <div class="p-img">
                    <img
                      src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c7c15101f2c8a652a4a0d069501d1e53.jpg?thumb=1&w=250&h=250&f=webp&q=90"
                    />
                  </div>
                  <div class="operate">
                    <a href="javascript:void(0);">查看商品详情</a>
                  </div>
                </div>
              </li>
              <li>
                <div class="list-wrap">
                  <div class="p-img">
                    <img
                      src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/db032eeb9e8efe9551161ee18bf70d3f.jpg?thumb=1&w=250&h=250&f=webp&q=90"
                    />
                  </div>
                  <div class="operate">
                    <a href="javascript:void(0);">查看商品详情</a>
                  </div>
                </div>
              </li>
              <li>
                <div class="list-wrap">
                  <div class="p-img">
                    <img
                      src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-miapp-a1/T1r_x_BgLT1RXrhCrK.jpg?thumb=1&w=250&h=250"
                    />
                  </div>

                  <div class="operate">
                    <a href="javascript:void(0);">查看商品详情</a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div class="tab-pane">
            <p>推荐品牌</p>
          </div>
        </div>
      </aside>

      <div class="detail">
        <div class="intro">
          <ul class="tab-wraped">
            <li class="active">
              <a href="###"> 商品介绍 </a>
            </li>
            <li>
              <a href="###"> 规格与包装 </a>
            </li>
            <li>
              <a href="###"> 售后保障 </a>
            </li>
            <li>
              <a href="###"> 商品评价 </a>
            </li>
            <li>
              <a href="###"> 手机社区 </a>
            </li>
          </ul>
          <div class="tab-content">
            <div id="one" class="tab-pane active">
              <ul class="goods-intro">
                <li>7天无理由退货</li>
                <li>15天免费换货</li>
                <li>Care保障服务</li>
                <li>ZP自营意外保护</li>
                <li>品牌： ZP电商</li>
                <li>最伟大的电商平台</li>
                <li>
                  详情：5G小金刚｜旗舰长续航｜双5G待机｜5000mAh充电宝级大容量｜4800万高清相机｜天玑700八核高性能处理器
                </li>
              </ul>
              <div class="intro-detail">
                <img
                  src="https://cdn.cnbj1.fds.api.mi-img.com/product-images/mi12s-provuejwm/sw_bs.jpg"
                />
                <img
                  src="https://cdn.cnbj1.fds.api.mi-img.com/product-images/mi12s-provuejwm/spc_sj2.png"
                />
              </div>
            </div>
            <div id="two" class="tab-pane">
              <p>规格与包装</p>
            </div>
            <div id="three" class="tab-pane">
              <p>售后保障</p>
            </div>
            <div id="four" class="tab-pane">
              <p>商品评价</p>
            </div>
            <div id="five" class="tab-pane">
              <p>手机社区</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Detail",
  data() {
    return {
      productMessage: [],
      productdata: [
        {
          pid: this.$route.params.pid,
          num: 1,
        },
      ],
    };
  },
  mounted() {
    this.reqProduct();
    console.log(this.$route.params.pid);
  },
  methods: {
    handleChange(value) {
      this.productdata[0].num = value;
    },
    reqProduct() {
      axios.post("product", { pid: this.$route.params.pid }).then(
        (res) => {
          console.log("123");
          console.log(res);
          this.productMessage = res.data;
        },
        (error) => {
          console.log(error.message);
        }
      );
    },
    addcart() {
      axios.post("shopcart/add", this.productdata).then(
        (res) => {
          console.log(res);
          if (res.data.update !== "success") {
            this.$message.error("添加购物车失败");
          } else {
            this.$message.success("添加购物车成功");
            this.$router.push("/shopcart");
            console.log(456);
          }
        },
        (error) => {
          console.log(error.mesage);
        }
      );
    },
  },
  components: {},
};
</script>

<style lang="less" scoped>
.detail {
  .con {
    width: 1200px;
    margin: 15px auto 0;

    .conPoin {
      padding: 9px 15px 9px 0;

      & > span + span:before {
        content: "/\00a0";
        padding: 0 5px;
        color: #ccc;
      }
    }

    .mainCon {
      overflow: hidden;
      margin: 5px 0 15px;
      margin-bottom: 30px;
      width: 1200px;

      .previewWrap {
        float: left;
        width: 400px;
        height: 500px;
        position: relative;
      }

      .InfoWrap {
        width: 700px;
        float: right;

        .InfoName {
          font-size: 32px;
          line-height: 32px;
          margin-top: 15px;
        }

        .InfoDetails {
          color: brown;
          font-size: 13px;
          margin-top: 18px;
        }

        .priceArea {
          padding: 7px;
          margin: 13px 0;

          .priceArea1 {
            overflow: hidden;
            line-height: 28px;
            margin-top: 10px;

            .title {
              float: left;
              margin-right: 15px;
            }

            .price {
              float: left;

              i {
                font-size: 16px;
              }

              em {
                font-size: 24px;
                font-weight: 700;
              }

              span {
                font-size: 12px;
              }
            }

            .remark {
              float: right;
            }
          }

          .priceArea2 {
            overflow: hidden;
            line-height: 28px;
            margin-top: 10px;

            .title {
              margin-right: 15px;
              float: left;
            }

            .fixWidth {
              width: 520px;
              float: left;

              .smalltitle {
                font-size: 15px;
              }

              .red-bg {
                background: #c81623;
                color: #fff;
                padding: 3px;
              }

              .t-gray {
                color: #999;
              }
            }
          }
        }

        .support {
          border-bottom: 1px solid #ededed;
          padding-bottom: 5px;

          .supportArea {
            overflow: hidden;
            line-height: 28px;
            margin-top: 10px;

            .title {
              margin-right: 15px;
              float: left;
            }

            .fixWidth {
              width: 520px;
              float: left;
              color: rgb(94, 74, 74);
              font-size: 16px;
            }
          }
        }

        .choose {
          .chooseArea {
            overflow: hidden;
            line-height: 28px;
            margin-top: 10px;

            dl {
              overflow: hidden;
              margin: 13px 0;

              dt {
                margin-right: 15px;
                float: left;
              }

              dd {
                float: left;
                margin-right: 5px;
                color: #666;
                line-height: 24px;
                padding: 2px 14px;
                border-top: 1px solid #eee;
                border-right: 1px solid #bbb;
                border-bottom: 1px solid #bbb;
                border-left: 1px solid #eee;

                &.active {
                  color: green;
                  border: 1px solid green;
                }
              }
            }
          }

          .cartWrap {
            .controls {
              width: 48px;
              position: relative;
              float: left;
              margin-right: 15px;

              .itxt {
                width: 38px;
                height: 37px;
                border: 1px solid #ddd;
                color: #555;
                float: left;
                border-right: 0;
                text-align: center;
              }

              .plus,
              .mins {
                width: 15px;
                text-align: center;
                height: 17px;
                line-height: 17px;
                background: #f1f1f1;
                color: #666;
                position: absolute;
                right: -8px;
                border: 1px solid #ccc;
              }

              .mins {
                right: -8px;
                top: 19px;
                border-top: 0;
              }

              .plus {
                right: -8px;
              }
            }

            .add {
              float: left;
              border: none;

              a {
                background-color: rgb(46, 88, 40);
                padding: 0 25px;
                font-size: 16px;
                color: #fff;
                height: 36px;
                line-height: 36px;
                display: block;
              }

              a:hover {
                color: #333;
              }
            }
          }
        }
      }
    }
  }

  .product-detail {
    width: 1200px;
    margin: 30px auto 0;
    overflow: hidden;

    .aside {
      width: 210px;
      float: left;
      border: 1px solid #ccc;

      .tabWraped {
        height: 40px;

        h4 {
          border-top: 3px solid #fff;
          float: left;
          line-height: 37px;
          width: 105px;
          text-align: center;
          border-bottom: 1px solid #ccc;
          font-size: 18px;

          &.active {
            border-top: 3px solid #e1251b;
            border-bottom: 0;
            font-weight: normal;
          }
        }
      }

      .tabContent {
        padding: 10px;

        .tab-pane {
          display: none;

          &.active {
            display: block;
          }

          &:nth-child(1) {
            .partList {
              overflow: hidden;

              li {
                width: 50%;
                float: left;
                border-bottom: 1px dashed #ededed;
                line-height: 28px;
              }
            }

            .goodsList {
              & > li {
                margin: 5px 0 15px;
                border-bottom: 1px solid #ededed;
                padding-bottom: 5px;

                .list-wrap {
                  height: 300px;

                  .p-img {
                    text-align: center;

                    img {
                      height: 220px;
                      width: 182px;
                    }
                  }

                  .price {
                    font-size: 16px;
                    color: #c81623;
                  }

                  .operate {
                    text-align: center;
                    margin: 5px 0;

                    a {
                      background-color: transparent;
                      border: 1px solid #8c8c8c;
                      color: #8c8c8c;
                      display: inline-block;
                      padding: 2px 14px;
                      line-height: 18px;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }

    .detail {
      width: 980px;
      float: right;

      .fitting {
        border: 1px solid #ddd;
        margin-bottom: 15px;

        .kt {
          border-bottom: 1px solid #ddd;
          background: #f1f1f1;
          color: #333;
          padding: 5px 0 5px 15px;
        }

        .good-suits {
          height: 170px;
          padding-top: 10px;

          .master {
            width: 127px;
            height: 165px;
            text-align: center;
            position: relative;
            float: left;

            img {
              width: 87px;
            }

            p {
              color: #c81623;
              font-size: 16px;
              font-weight: 700;
            }

            i {
              position: absolute;
              top: 48px;
              right: -25px;
              font-size: 16px;
            }
          }

          .suits {
            width: 668px;
            height: 165px;
            float: left;

            .suitsItem {
              float: left;
              width: 127px;
              padding: 0 20px;
              text-align: center;

              img {
                width: 120px;
                height: 130px;
              }

              p {
                font-size: 12px;
              }

              label {
                display: block;
                position: relative;

                input {
                  vertical-align: middle;
                }

                span {
                  vertical-align: middle;
                }
              }
            }
          }

          .result {
            border-left: 1px solid #ddd;
            width: 153px;
            height: 165px;
            padding-left: 20px;
            float: left;

            .num {
              font-size: 14px;
              margin-bottom: 10px;
              margin-top: 10px;
            }

            .price-tit {
              font-weight: bold;
              margin-bottom: 10px;
            }

            .price {
              color: #b1191a;
              font-size: 16px;
              margin-bottom: 10px;
            }

            .addshopcar {
              background-color: #e1251b;
              border: 1px solid #e1251b;
              padding: 10px 25px;
              font-size: 16px;
              color: #fff;
              display: inline-block;
              box-sizing: border-box;
            }
          }
        }
      }

      .intro {
        .tab-wraped {
          background: #ededed;
          // border: 1px solid #ddd;
          overflow: hidden;

          li {
            float: left;

            & + li > a {
              border-left: 1px solid #ddd;
            }

            &.active {
              a {
                width: 100px;
                background: #244a23;
                color: #fff;
              }
            }

            a {
              width: 100px;
              display: block;
              height: 40px;
              line-height: 40px;
              padding: 0 11px;
              text-align: center;
              color: #666;
              background: #fcfcfc;
              border-top: 1px solid #ddd;
              border-bottom: 1px solid #ddd;
            }
          }
        }

        .tab-content {
          .tab-pane {
            display: none;

            &.active {
              display: block;
            }

            &:nth-child(1) {
              .goods-intro {
                padding-left: 10px;

                li {
                  margin: 10px 0;
                }
              }

              .intro-detail {
                img {
                  width: 100%;
                }
              }
            }
          }
        }
      }
    }
  }
}

.spec-preview {
  position: relative;
  width: 400px;
  height: 500px;
  border: 2px solid #ccc;

  img {
    width: 100%;
    height: 100%;
  }

  .event {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 998;
  }

  .mask {
    width: 50%;
    height: 50%;
    background-color: rgba(0, 255, 0, 0.3);
    position: absolute;
    left: 0;
    top: 0;
    display: none;
  }

  .big {
    width: 100%;
    height: 100%;
    position: absolute;
    top: -1px;
    left: 100%;
    border: 1px solid #aaa;
    overflow: hidden;
    z-index: 998;
    display: none;
    background: white;

    img {
      width: 200%;
      max-width: 200%;
      height: 200%;
      position: absolute;
      left: 0;
      top: 0;
    }
  }

  .event:hover ~ .mask,
  .event:hover ~ .big {
    display: block;
  }
}

.title {
  font-size: 17px;
}

.choose .controls {
  margin: 10px;
}

.choose .add {
  margin-top: 8px;
  margin-left: 100px;
}
</style>