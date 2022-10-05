import Vue, { del } from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store'
import './plugins/element.js'
//导入全局样式表
import './assets/css/global.css'
//导入字体图标
import './assets/fonts/iconfont.css'

import axios from 'axios'

//配置请求的根路径
axios.defaults.baseURL = 'http://101.43.181.13:8080'

Vue.prototype.$axios = axios

Vue.config.productionTip = false

// 添加请求拦截器，在请求头中加token
//在连接端口之前，通过axios拦截器添加token，保证拥有获取数据的权限.


axios.interceptors.request.use(config => {
  config.headers.token = window.localStorage.getItem('token')
  console.log(config.headers.token);
  return config
})


/*
//响应拦截器
axios.interceptors.response.use((res)=>{
   if(res.data.login === 'failed'){
      window.alert('登录过期，请重新登陆')
      this.$router.push("/user/login")
   }else{
    console.log(res.data);
   }
  },(error)=>{
    console.log(error.message);
  });
*/


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

