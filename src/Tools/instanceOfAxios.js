import axios from 'axios'

axios.defaults.headers.common['Content-Type'] = 'application/json'
axios.defaults.headers.common['Authorization'] = localStorage.getItem('token')
axios.defaults.baseURL = 'https://reqres.in/api'

const instanceOfAxios = axios.create()

export default instanceOfAxios

