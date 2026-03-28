import { http } from '@/infra/http/http-client'
import { setAccessToken } from '../storages/token.stoage'
import type {
  UserRequesTDO,
  UserResponseDTO,
} from '@/features/auth/type/dto/auth-dto'

type CampusType = {
  id: string
  name: string
}

export async function getCampuses(): Promise<Array<CampusType>> {
  const campuses = await http.get<Array<CampusType>>('campuses')
  return campuses
}

export async function registerUser(
  user: UserRequesTDO,
): Promise<UserResponseDTO> {
  const responseData = await http.post<UserResponseDTO>('auth/register', user)
  setAccessToken(responseData.token)
  return responseData
}
