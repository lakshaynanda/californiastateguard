import axios from 'axios'
import qs from 'qs'
export const API_BASE_URL = 'https://csg-cyber.my.salesforce.com/services/'
axios({
  method: 'post',
  url: 'https://csg-cyber.my.salesforce.com/services/oauth2/token',
  headers: {
    'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
  },
  data: qs.stringify({
    grant_type: 'password',
    client_id: '3MVG9Nk1FpUrSQHeLkBUh5k6Rv1yBzQBJrAMx9me7xnT4Zm2tBojknR8ob.sWc8HS18HiLuKaz67J8b7_x2SD',
    client_secret: 'F8C3B6B6BF714D4F264D5F7545BDF9746F909843D894CF6DFB87A0E783CB491E',
    username: 'csgprotect@gmail.com',
    password: '21SC4sansMnR88Ttx8knYJ4j2h02Hc3Eg'
  })
})
.then((response) => {
  localStorage.setItem('user-token', response.data.access_token)
  console.log(localStorage.getItem('user-token'))
});
export const http = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    // 'Content-Type': 'application/json'
    
    Authorization: 'Bearer ' + localStorage.getItem('user-token')
  }
})

export default http
