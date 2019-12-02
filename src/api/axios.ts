import axios from 'axios'
export default (function () {
    axios.defaults.timeout = 60000 // 60 sec        
    return axios
})()