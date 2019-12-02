import axios from './axios'
class AuthApi {
  async loginAsync(user: object): Promise<any> {
    const data = await axios.post('/auth/login', user)
    return data.data
  }
}

export default AuthApi