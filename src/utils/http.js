import axios from 'axios'
import qs from 'qs'
export const API_BASE_URL = 'https://csg-cyber.my.salesforce.com/services/'

export const http = axios.create({
  baseURL: API_BASE_URL,
  data: qs.stringify({
    grant_type: 'password',
    client_id: '3MVG9Nk1FpUrSQHeLkBUh5k6Rv1yBzQBJrAMx9me7xnT4Zm2tBojknR8ob.sWc8HS18HiLuKaz67J8b7_x2SD',
    client_secret: 'F8C3B6B6BF714D4F264D5F7545BDF9746F909843D894CF6DFB87A0E783CB491E',
    username: 'csgprotect@gmail.com',
    password: '21SC4sansrUWOMqRjbF2JQ4TR7kWGxHv3I'
  }),
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
    // Authorization: 'Bearer ' + localStorage.getItem('user-token')
  }
})

export default http
