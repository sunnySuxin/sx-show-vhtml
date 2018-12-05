import Login from '@/views/Login.vue'
// import Home from './views/Home.vue'

let routes = [
  {
    path: '/login',
    component: Login,
    name: '',
    hidden: true
  }
  // {
  //   path: '/',
  //   component: Home,
  //   name: '商品',
  //   iconCls: 'el-icon-message', // 图标样式class
  //   children: [
  //     // { path: '/shopList', component: Commodity, name: '商品列表' },
  //     // { path: '/form', component: Form, name: 'Form' },
  //     // { path: '/user', component: user, name: '列表' }
  //   ]
  // }
]

export default routes
