import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader
Vue.use(Vuetify)

var VueResource = require('vue-resource');
Vue.use(VueResource);


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
