import Vue from 'vue';
import App from './App.vue';
import myplugin from "@/myplugin";
Vue.config.productionTip = false;
Vue.use(myplugin);
new Vue({
  render: h => h(App),
}).$mount('#app')

