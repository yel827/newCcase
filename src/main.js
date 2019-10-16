// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//引入element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
//axios
import Axios from 'axios';
import qs from 'qs';
// 给Vue的原型挂载 $axios属性
Vue.prototype.$axios = Axios;
Vue.prototype.$qs=qs;


//echarts图表
import echarts from "echarts"
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,

  components: { App },
  template: '<App/>'
})
