import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin, LayoutPlugin, NavbarPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import vueHeadful from 'vue-headful';

Vue.config.productionTip = false

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue components plugin
Vue.use(IconsPlugin)
Vue.use(LayoutPlugin)
Vue.use(NavbarPlugin )
Vue.component('vue-headful', vueHeadful);

new Vue({
  render: h => h(App),
}).$mount('#app')
