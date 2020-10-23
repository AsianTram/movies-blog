import axios from 'axios'

const setTokenToHeader = (token: string) => {
  if (token) {
    axios.defaults.headers.common['x-auth-token'] = token
  } else {
    delete axios.defaults.headers.common['x-auth-token']
  }
}
export default setTokenToHeader