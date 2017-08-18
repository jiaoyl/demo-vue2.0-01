// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// axios vue更新到2.0之后，作者就宣告不再对vue-resource更新，而是推荐的axios
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/css/reset.css'
import Common from '@/assets/js/utils.js'

Vue.use(Common)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
