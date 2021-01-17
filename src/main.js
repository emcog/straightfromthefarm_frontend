import Vue from 'vue'
import App from './App.vue'
// const postcodes = require('node-postcodes.io')
// import postData from './js/postData.js' 
import 'leaflet/dist/leaflet.css';


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
