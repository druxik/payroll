import Vue from 'vue'
import Vuex from 'vuex';
import 'es6-promise/auto';
Vue.use(Vuex);
import {store} from './store/';
import App from './App.vue'

/*import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue);
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';*/
import icons from 'glyphicons';
Vue.use(icons);
console.info('I' + icons.wrench + ' Glyphicons!')

new Vue({
  el: '#app',
  store : store,
  render: h => h(App)
});
