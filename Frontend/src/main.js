// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuetify from 'vuetify'
import './stylus/main.styl'
import App from './App'
import { router } from './router'
import Toolbar from '@/components/template/Toolbar'
import Footer from '@/components/template/Footer'

Vue.use(Vuetify)
Vue.config.productionTip = false

/* Global components */
Vue.component(Toolbar.name, Toolbar)
Vue.component(Footer.name, Footer)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
