import Vue from 'vue'
import FlagIcon from 'vue-flag-icon'
import App from './App.vue'
import store from './vuex/store'
import { i18n } from './plugins/i18n'

Vue.config.productionTip = false
Vue.use(FlagIcon)

new Vue({
  i18n,
  store,
  render: h => h(App),
}).$mount('#app')
