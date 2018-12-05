import axios from 'axios'

//
let SHOP_CFG = {
  userServer: '/user',
  goodsServer: '/goods',
  shopcarServer: '/shopcar',
  orderServer: '/order'
}

// 登录验证
export const requestLogin = params => {
  return axios.get(`${SHOP_CFG.userServer}/login`, params).then(res => res.data)
}

// 获取商品详情列表
