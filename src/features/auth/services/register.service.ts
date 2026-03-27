import { http } from '@/infra/http/http-client'
import { setAccessToken } from '../storage/auth.stoage'
type CampusType = {
  id: string
  name: string
}

type UserRequestDTO ={
  firtName: string
  lastName: string
  handle: string
  email: string
  role: 'student'|'professor'|'technician'
  campus: string
  passoword: string
  course?: string|undefined
}

type UserResponseDTO = {
  token: string
  user: UserRequestDTO &{
    id: string
    name: string
    avatarUrl?: string
    campus:{
      id: string
      name: string
    }
  }
}

export async function registerUser(
  user: UserResponseDTO
): Promise<UserResponseDTO> {
  const responseData = await http.post<UserResponseDTO>(
    'auth/register',
    user)
  setAccessToken(responseData.token)
  return responseData
}

export async function getCampuses(): Promise<Array<CampusType>> {
  const campuses = await http.get<Array<CampusType>>('campuses')
  return campuses
}



