declare interface User {
  id: number
  username: string
  email: string
}

declare interface TokenData {
  full_name: string
  username: string
  email: string
  bio: string
  image: string
  verified: boolean
}

declare interface Data {
  users: User
  token_data: TokenData
}

declare interface Post {
  id: number
  user: number
  username: string
  full_name: string
  image: string
  mensagem: string
  imagem: string
  created_at: string
  formatted_created_at: string
}

declare interface LoginRequest {
  email: string
  password: string
}

declare interface LoginResponse {
  access_token: string
  refresh_token: string
}
