import Vue from 'vue';
import DesignSystem from '@/main';
import App from './App.vue';

Vue.config.productionTip = false;

Vue.use(DesignSystem);

new Vue({
  render: (h) => h(App),
}).$mount('#app');
