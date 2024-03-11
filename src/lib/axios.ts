import axios from 'axios'
import { env } from '@/ENV'
export const api = axios.create({
  baseURL: env.VITE_API_URL,
})
