import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import './mock/mockServer' //加载mock即可
import { Button, Cell, MessageBox } from 'mint-ui'
import 'mint-ui/lib/style.css'
import VueLazyload from 'vue-lazyload'
import loading from './assets/imgs/loading.gif'
import './filiters/index'
// or with options

Vue.use(VueLazyload, {
    loading
})

Vue.component(Button.name, Button)
Vue.component(Cell.name, Cell)
Vue.component(MessageBox.name, MessageBox)

Vue.config.productionTip = false
    // Vue.component(Button.naem, Button)
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')