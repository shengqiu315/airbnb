import axios from "axios";

const BASE_URL = "http://codercba.com:1888/airbnb/api"
const TIMEOUT = 5000

class Request {
    constructor(baseConfig) {
        this.instance = axios.create({ ...baseConfig, })
        this.instance.interceptors.response.use(response => {
            return response.data
        }, err => {
            return Promise.reject(err)
        })
    }

    request(config) {
        return this.instance.request(config)
    }

    get(config) {
        return this.request({ ...config, method: 'GET' })
    }
    post(config) {
        return this.request({ ...config, method: 'POST' })
    }
}

const request = new Request({ baseURL: BASE_URL, timeout: TIMEOUT })

export { request }