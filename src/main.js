// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import jquery from 'jquery'
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/js/global'
import "./assets/css/index.css"

Vue.config.productionTip = false

window.$ = window.jQuery = jquery

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  data:{
    eventHub: new Vue()
  }
})
