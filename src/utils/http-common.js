import axios from 'axios'
export const API_BASE_URL = 'https://csg-cyber.my.salesforce.com/services/'
console.log(localStorage.getItem('user-token'))
export const http = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    // 'Content-Type': 'application/json'
    Authorization: 'Bearer ' + localStorage.getItem('user-token')
  }
})

export default http
