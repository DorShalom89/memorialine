import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './router/routes'
import VModal from 'vue-js-modal'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faShareAlt,faEnvelope,faPencilAlt,faEllipsisH,faSearch} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


library.add(faShareAlt,faEnvelope,faPencilAlt,faEllipsisH,faSearch)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(VueRouter)
Vue.use(VModal)

const router = new VueRouter({
  routes: routes
})

new Vue({
  el:'#app',
  render: h => h(App),
  router: router
})
