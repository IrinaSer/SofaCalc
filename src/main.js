import Vue from 'vue'
import App from './App.vue'
import store from '../store'
import vueCustomScrollbar from 'vue-custom-scrollbar';

Vue.config.productionTip = false
Vue.component('vue-custom-scrollbar',vueCustomScrollbar)

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
