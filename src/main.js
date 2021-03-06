import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App.vue'
import split from './components/split/split.vue'
import router from './router'
import store from './store'
import './filters'

import './mock/mockServer'  // 加载这个模块即可
import './common/stylus/fonts.styl'

Vue.use(VueResource) // 所有组件对象都多了一个属性: $http(发送ajax请求)

// 注册全局组件(映射成标签)
Vue.component('split', split)

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
