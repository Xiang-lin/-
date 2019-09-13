// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import store from './store'
// 重置css文件
import "styles/reset.css";
// iconfont css
import "styles/iconfont.css";
// 三秒延迟
import Fastclick from "fastclick";
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

Fastclick.attach(document.body);
Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  store,
  components: { App },
  template: "<App/>"
});
