import { api } from '@/lib/axios'

interface LoginBody {
  email: string
}

export const logIn = async ({ email }: LoginBody) => {
  await api.post('/authenticate', { email })
}
