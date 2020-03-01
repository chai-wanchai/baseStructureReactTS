import axios from './axios'
class AuthApi {
  async loginWithLine(accessToken: string): Promise<any> {
    const data = await axios.post(`${process.env.REACT_APP_API_URL}/api/v1/login/line`, { access_token: accessToken })
    return data.data
  }
}

export default new AuthApi()