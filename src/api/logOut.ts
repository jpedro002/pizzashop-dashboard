import { api } from '@/lib/axios'

export const logOut = async () => {
  await api.post('/sign-out')
}
