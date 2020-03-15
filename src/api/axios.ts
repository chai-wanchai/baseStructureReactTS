import axios from 'axios'

export default (function () {
    axios.defaults.timeout = 60000 // 60 sec     
    axios.defaults.headers['Access-Control-Allow-Origin'] = '*' 
    return axios
})()