import Vue from 'vue'
import Vuex from 'vuex';
import 'es6-promise/auto';
Vue.use(Vuex);
import {store} from './store/';
import App from './App.vue'

new Vue({
  el: '#app',
  store : store,
  render: h => h(App)
});
