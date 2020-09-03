import Vue from 'vue'
import App from './App.vue'
import VueCarousel from 'vue-carousel';
import Slide from "vue-burger-menu";
Vue.use(VueCarousel);
Vue.use(Slide);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
