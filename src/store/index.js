import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    login: localStorage.getItem('login') ? localStorage.getItem('login') : '',
    token: localStorage.getItem('token') ? localStorage.getItem('token') : '',
    aproductList: []
  },
  mutations: {
    //修改state
    setstate(state, data) {
      state.login = data.login,
      state.token = data.token
      localStorage.setItem('login', data.login),
      localStorage.setItem('token', data.token)
    },

    updateData(state, data) {
      state.aproductList = data
    },

    //当前查看的商品数据
    /*
    setpid(state,data)
    {
      state.pid=data,
      localStorage.setItem('pid',Json.stringify(data))
    },
    */
  },
  actions: {

  },
})
