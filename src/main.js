import Vue from 'vue'
import App from './App.vue'
import store from './vuex/store'
import { i18n } from './plugins/i18n'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  i18n,
  store,
  render: h => h(App)
}).$mount('#app')
