import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  beforeCreate() {
    Vue.prototype.$bus = this;
  },
  render: h => h(App),
}).$mount('#app')

// new Vue({
//   el:"#app",
//   template:`<App></App>`,
//   components:{
//     App
//   }
// })
