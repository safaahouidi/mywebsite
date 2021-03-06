import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import Typewriter from 'vue-typewriter'
import * as VueAos from 'vue-aos'
Vue.use(VueAos)
Vue.use(Typewriter)
Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
