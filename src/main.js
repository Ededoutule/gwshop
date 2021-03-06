import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
// import { Button } from 'mint-ui'
import './mock/mockServer' //加载mock即可

Vue.config.productionTip = false
    // Vue.component(Button.naem, Button)
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')