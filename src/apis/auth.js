import http from '../utils/http'

export default class Auth {

  static getAuth (data) {
      if (data) {
        return http.post('oauth2/token', data)
      }
  }
}
