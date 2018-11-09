
import Vue from 'vue'          /* 引入vue.js */
import App from './App'        /* 引入App组件 */
import router from './router'  /* 引入router路由 */

Vue.config.productionTip = false   /* 关闭生产环境下的提示 */

/* eslint-disable no-new */
// 实例化
new Vue({
  el: '#app',   //index.html
  router,       //注入路由功能
  components: { App },  
  template: '<App/>'
})
