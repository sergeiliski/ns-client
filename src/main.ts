import Vue from 'vue';
import router from './router';
import App from './App.vue';
import Buefy from 'buefy';
import '../node_modules/buefy/dist/buefy.css';

Vue.use(Buefy);

new Vue({
  router,
  el: '#app',
  template: '<App/>',
  components: { App }
});
