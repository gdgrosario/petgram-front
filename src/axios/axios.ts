import axios from 'axios'

export const petgramAPI = axios.create({
  baseURL: 'http://localhost:3000/'
})
