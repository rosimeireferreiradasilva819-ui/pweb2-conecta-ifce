
import { http } from '@/infra/http/http-client'
import { setAccessToken } from '../storage/auth.stoage'
import type{UserResponseDTO} from '@/features/auth/type/dto/auth-dto'

export async function login(
  email: string,
  password: string,
):Promise<UserResponseDTO> {
  const responseData = await http.post<UserResponseDTO>('auth/login', {
    email,
    password,
  })
  setAccessToken(responseData.token)
  return responseData
}
