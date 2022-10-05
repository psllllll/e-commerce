<template>
  <div id="app">
    <Header v-show="$route.meta.header"></Header>
    <router-view v-if="isRouterAlive" :key="$route.fullPath"></router-view>
    <!--在Home，Search显示-->
    <div class="footer">
      <Footer v-show="$route.meta.show"></Footer>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";

export default {
  name: "app",
  provide() {
    return {
      reload: this.reload,
    };
  },
  data() {
    return {
      isRouterAlive: true,
    };
  },
  components: {
    Header,
    Footer,
  },
  methods: {
    //页面数据改变时刷新
    reload() {
      this.isRouterAlive = false;
      this.$nextTick(() => (this.isRouterAlive = true));
    },
  },
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  text-decoration: none;
  list-style: none;
}
</style>
