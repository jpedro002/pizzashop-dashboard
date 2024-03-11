import { api } from '@/lib/axios'

interface GetRestaurantInformationsResponse {
  id: string
  name: string
  createdAt: Date | null
  updatedAt: Date | null
  description: string | null
  managerId: string | null
}

export async function getRestaurantInformations(): Promise<GetRestaurantInformationsResponse> {
  const response = await api.get('managed-restaurant')

  return response.data
}
