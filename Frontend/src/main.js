import Vue from 'vue';
import vueAxios from 'vue-axios';
import axios from 'axios';
import App from './App';
import router from './router';

Vue.use(vueAxios, axios);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
