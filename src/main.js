import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import router from './routes'

import './assets/scss/main.scss'

Vue.config.productionTip = false

Vue.use(Vuelidate)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

