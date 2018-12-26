import Vue from 'vue';
import Vuelidate from 'vuelidate';
import App from './App.vue';
import VueRouter from 'vue-router';
import { routes } from './routes';
import Toast from './Toast.vue';

Vue.use(VueRouter);
Vue.use(Vuelidate);

Vue.component('toast', Toast);

const router = new VueRouter({
  mode: 'history',
  routes,
});

new Vue({
  el: '#app',
  router,
  render: h => h(App),
});
