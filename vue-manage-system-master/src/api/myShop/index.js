import axios from 'axios'
//差轮播图
export function getswiperList() {
  return axios({
    url: 'http://localhost:3000/swiperList', //轮播图
    method: 'get',
  })
}
//增加轮播图
export function addswiperList(data) {
  return axios({
    headers: {
      'Content-Type': 'application/json'
    },
    transformRequest: [function(data) {
      data = JSON.stringify(data)
      return data
    }],
    url: ' http://localhost:3000/swiperList', //轮播图
    method: 'post',
    data:{
      "name":data.sName,
      "Price":data.sPrice,
      "newPrice":data.snewPrice,
      "img":"../../static/img/more1.jpg",
      "date":data.shopDate,
      "id":'7'
    }
  })
}
//修改
export function putswiperList(data) {
  return axios({
    headers: {
      'Content-Type': 'application/json'
    },
    transformRequest: [function(data) {
      data = JSON.stringify(data)
      return data
    }],
    url: `http://localhost:3000/swiperList/${data.id}` , //轮播图
    method: 'put',
    data:{
      "name":data.sName,
      "Price":data.sPrice,
      "newPrice":data.snewPrice,
      "img":"../../static/img/more1.jpg",
      "date":data.shopDate,
      "id":'7'
    }
  })
}
//删除
export function deleteswiperList(id) {
  return axios({
    method:"delete",
    url:  `http://localhost:3000/swiperList/${id}` , //轮播图
    method: 'delete',
  })
}
