import { request } from './request.js';

//主页网络请求
export function getHomeNetData() {
  return request({
    url: 'http://api.coindesk.com/v1/bpi/currentprice.json',
  });
}

//主页goods网络请求
//分类型和页码请求
export function getHomeGoods(type, page) {
  return request({
    url: '接口api',
    parms: {
      type,
      page,
    },
  });
}
