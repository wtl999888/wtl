import axios from 'axios'
axios.defaults.headers.post['Content-Type'] = 'form-data';
export function wtl(data) {
    return axios({
      url: 'http://biz.turingos.cn/apirobot/dialog/homepage/chat', 
      method: 'post',
      data:data
    })
  }