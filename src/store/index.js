import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    email: '',
    password: ''
  },
  mutations: {
    STORE_EMAIL(state, email) {
      state.email = email
    },
    STORE_PASS(state, password) {
      state.password = password
    }
  },
  actions: {
  },
  modules: {
  },
  getters: {
    getEmail: state => state.email
  }
})
