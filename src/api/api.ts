import Axios,{ AxiosRequestConfig } from 'axios'

export function getJWTHeader(token: any): Record<string, string> {
    return { Authorization: `Bearer ${token}` }
}
  

const config:AxiosRequestConfig = { baseURL:"https://swapi.dev/api" }

const config2:AxiosRequestConfig = { baseURL:"https://jsonplaceholder.typicode.com/users" }
export const api = Axios.create(config)
export const api2 = Axios.create(config2)