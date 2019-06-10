import Vue from 'vue'
import App from './App.vue'
import router from './routers'
import store from './stores'
import axios from 'axios'


Vue.config.productionTip = false
Vue.prototype.axios = axios
Vue.filter('setWH',(url,arg)=>{
  return url.replace('/w\.h/',arg);//全局过滤器显示图片
})
import Scroller from "@/components/Scroller"
Vue.component('Scroller',Scroller)//注册全局Scroller组件
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
