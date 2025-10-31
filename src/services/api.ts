import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'https://api.radar.example',
})

api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API error', error)
    return Promise.reject(error)
  },
)

export default api
