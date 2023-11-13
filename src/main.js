/* eslint-disable */
import Vue from 'vue'
import App from './App.vue'
import { router } from '@/router'
import { Lazyload, Toast, Icon, Popover, Skeleton, List} from 'vant'
import noData from '@/components/noData'
// ------------------------------
import 'amfe-flexible'
const DS = require('dsbridge')
if (process.env.NODE_ENV === 'development') {
    const VConsole = require('vconsole')
    new VConsole()
}

Vue.prototype.DS = DS


Vue.use(Toast).use(Icon).use(Popover).use(Skeleton).use(List)
Vue.component('noData', noData)

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
