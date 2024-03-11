import { api } from '@/lib/axios'

interface GetUserInformationsResponse {
  email: string
  id: string
  name: string
  phone: string | null
  role: 'manager' | 'customer'
  createdAt: Date | null
  updatedAt: Date | null
}

export async function getUserInformations(): Promise<GetUserInformationsResponse> {
  const response = await api.get('me')

  return response.data
}
