import axios from '../node_modules/axios';
import Vue from 'vue';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;
Vue.prototype.$http = axios;

new Vue({
	router,
	render: (h) => h(App),
}).$mount('#app');
