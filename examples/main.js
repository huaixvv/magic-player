import Vue from 'vue'
import App from './App.vue'
import './assets/fonts/font.scss'
// import animated from 'animate.css'
import MusicPlayer from "./components/musicPlayer"
import './assets/css/animate.css@3.5.1.css'

// Vue.use(animated)
Vue.config.productionTip = false
Vue.component(MusicPlayer.name, MusicPlayer);

new Vue({
  render: h => h(App),
}).$mount('#app')
