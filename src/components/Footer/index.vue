<template>
  <!-- 底部 -->
  <div class="footer">
    <div class="footer-container">
      <div class="footerList">
        <div class="footerItem">
          <h4>购物指南</h4>
          <ul class="footerItemCon">
            <li>测试数据 1</li>
            <li>测试数据 2</li>
            <li>测试数据 3</li>
            <li>测试数据 4</li>
            <li>测试数据 5</li>
          </ul>
        </div>
        <div class="footerItem">
          <h4>配送方式</h4>
          <ul class="footerItemCon">
            <li>测试数据 1</li>
            <li>测试数据 2</li>
            <li>测试数据 3</li>
            <li>测试数据 4</li>
            <li>测试数据 5</li>
          </ul>
        </div>
        <div class="footerItem">
          <h4>支付方式</h4>
          <ul class="footerItemCon">
            <li>测试数据 1</li>
            <li>测试数据 2</li>
            <li>测试数据 3</li>
            <li>测试数据 4</li>
            <li>测试数据 5</li>
          </ul>
        </div>
        <div class="footerItem">
          <h4>售后服务</h4>
          <ul class="footerItemCon">
            <li>测试数据 1</li>
            <li>测试数据 2</li>
            <li>测试数据 3</li>
            <li>测试数据 4</li>
            <li>测试数据 5</li>
          </ul>
        </div>
        <div class="footerItem">
          <h4>特色服务</h4>
          <ul class="footerItemCon">
            <li>测试数据 1</li>
            <li>测试数据 2</li>
            <li>测试数据 3</li>
            <li>测试数据 4</li>
            <li>测试数据 5</li>
          </ul>
        </div>
        <div class="footerItem">
          <h4>帮助中心</h4>
          <ul class="footerItemCon">
            <li>测试数据 1</li>
            <li>测试数据 2</li>
            <li>测试数据 3</li>
            <li>测试数据 4</li>
            <li>测试数据 5</li>
          </ul>
        </div>
      </div>
      <div class="copyright">
        <ul class="helpLink">
          <li>
            关于我们
            <span class="space"></span>
          </li>
          <li>
            联系我们
            <span class="space"></span>
          </li>
          <li>
            关于我们
            <span class="space"></span>
          </li>
          <li>
            商家入驻
            <span class="space"></span>
          </li>
          <li>
            营销中心
            <span class="space"></span>
          </li>
          <li>
            友情链接
            <span class="space"></span>
          </li>
          <li>
            关于我们
            <span class="space"></span>
          </li>
          <li>
            营销中心
            <span class="space"></span>
          </li>
          <li>
            友情链接
            <span class="space"></span>
          </li>
          <li>关于我们</li>
        </ul>
        <p>地址：沸点工作室ZP</p>
        <p>123456789</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.footer {
  background-color: #162418;
  width: 100%;
  position: relative;
  bottom: 0;
  margin-top: 150px;

  .footer-container {
    width: 100%;
    margin: 0 auto;
    padding: 0 15px;

    .footerList {
      padding: 20px;
      border-bottom: 1px solid #3b573d;
      border-top: 1px solid #3b573d;
      overflow: hidden;
      padding-left: 40px;

      .footerItem {
        width: 16.6666667%;
        float: left;

        h4 {
          font-size: 18px;
          line-height: 50px;
          color: #fff;
        }

        .footerItemCon {
          li {
            font-size: 15px;
            line-height: 25px;
            color: #fff;
          }
        }

        &:last-child img {
          width: 121px;
        }
      }
    }

    .copyright {
      padding: 20px;

      .helpLink {
        text-align: center;

        li {
          display: inline;
          font-size: 14px;
          color: #fff;

          .space {
            border-left: 1px solid #3b573d;
            width: 1px;
            height: 13px;
            background: #3b573d;
            margin: 8px 10px;
          }
        }
      }

      p {
        margin: 10px 0;
        text-align: center;
        color: #fff;
      }
    }
  }
}
</style>