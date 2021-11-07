import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import JsonCSV from 'vue-json-csv'
import vSelect from 'vue-select'
import Vuex from 'vuex'

Vue.use(Vuex)
Vue.component('v-select', vSelect)
Vue.component('downloadCsv', JsonCSV)
Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
