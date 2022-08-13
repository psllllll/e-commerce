<template>
  <div class="out_wrapper">
    <div class="title">
      <h3>新 品 推 荐</h3>
    </div>
    <div class="productWrapper">
      <ProductList></ProductList>
    </div>
    <div class="title">
      <h3>手机 笔记本</h3>
    </div>
    <div class="productWrapper">
      <ProductList></ProductList>
    </div>
  </div>
</template>

<script>
import ProductList from "../productList";
export default {
  components: {
    ProductList,
  },
};
</script>

<style lang="less" scoped>
.title h3 {
  text-align: center;
  font-size: 32px;
}
</style>