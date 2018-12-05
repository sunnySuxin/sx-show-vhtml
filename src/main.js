// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import routes from './router'
import ElementUI from 'element-ui'
import VueRouter from 'vue-router'
import 'element-ui/lib/theme-chalk/index.css'
import NProgress from 'nprogress' // Progress 进度条
import 'nprogress/nprogress.css' // Progress 进度条样式
// import Vuex from 'vuex'
import './assets/icon/iconfont.css'

// 设置为 false 以阻止 vue 在启动时生成生产提示
Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(VueRouter)
// Vue.use(Vuex)

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  NProgress.start() // 开始进度条
  // 判断是否登录
  if (to.path === '/login') {
    sessionStorage.removeItem('user')
  }
  let user = JSON.parse(sessionStorage.getItem('user'))
  if (!user && to.path !== '/login') {
    next({path: '/login'})
  } else {
    next()
  }
})

router.afterEach(() => {
  NProgress.done() // 结束Progress
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  // components: { App },
  render: h => h(App) // ES6写法
}).$mount('#app')
