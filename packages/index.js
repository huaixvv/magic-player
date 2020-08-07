//packages 的入口

import MagicPlayer from './musicPlayer'
import './fonts/font.scss'
import './css/animate.css@3.5.1.css'

const components = [
  MagicPlayer,
]

const install = function (Vue) {
  //全局注册所有组件
  components.forEach((item) => {
    Vue.component(item.name, item)
  })
}

//判断是否是直接引入文件，如果是，就不要调用vue.use
if (typeof window !== 'undefined' && window.Vue){
  install(window.Vue)
}

export default {
  install
}
