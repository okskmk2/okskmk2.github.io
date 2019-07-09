import Vue from 'vue'
import App from './views/App.vue'
import router from './router'
import store from './store'
import i18n from './i18n'
import './assets/base.scss';
import axios from 'axios'

axios.defaults.withCredentials = false;

Vue.config.productionTip = false;
Vue.prototype.axios = axios;

new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
