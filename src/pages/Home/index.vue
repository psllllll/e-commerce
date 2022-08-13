<template>
  <div>
    <Show></Show>
    <Advertisement></Advertisement>
    <ProductShow></ProductShow>
  </div>
</template>

<script>
import Show from "../Show";
import Advertisement from "../advertisement";
import ProductShow from "../productShow";

export default {
  components: {
    Show,
    Advertisement,
    ProductShow,
  },
};
</script>

<style lang="less" scoped>
*{
    margin: 0;
    padding: 0;
}
</style>