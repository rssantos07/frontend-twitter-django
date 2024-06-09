import * as S from './styles'

interface TokenData {
  id: number
  username: string
  email: string
  full_name: string
  bio: string
  image: string
  verified: boolean
}

const ProfilePage = ({ username, full_name, bio, image }: TokenData) => {
  // const [tokenData, setTokenData] = useState<TokenData | null>(null)

  // useEffect(() => {
  //   const fetchTokenData = async () => {
  //     const token = localStorage.getItem('access_token')

  //     if (!token) {
  //       console.log('No token found')
  //       return
  //     }

  //     try {
  //       const response = await fetch('http://127.0.0.1:8000/api/user/', {
  //         headers: {
  //           'Content-Type': 'application/json',
  //           Authorization: `Bearer ${token}`
  //         }
  //       })

  //       if (!response.ok) {
  //         console.log(`Error: ${response.status} ${response.statusText}`)
  //         return
  //       }

  //       const data = await response.json()
  //       console.log('Fetched data:', data)

  //       if (Array.isArray(data) && data.length > 0) {
  //         setTokenData(data[0].token_data)
  //         console.log('Token Data:', data[0].token_data)
  //       }
  //     } catch (error) {
  //       console.error('Error fetching user data:', error)
  //     }
  //   }

  //   fetchTokenData()
  // }, []) código exibir conteudo direto na página sem uso de createApi

  return (
    <>
      <S.Container>
        <S.Banner>
          <S.Avatar>
            <img
              src={'https://rssantos07.pythonanywhere.com/media/' + image}
              alt={'Imagem de ' + username}
            />
          </S.Avatar>
        </S.Banner>

        <S.ProfileData>
          <S.EditButton type="button" title="Editar">
            Editar perfil
          </S.EditButton>
          <h1>{full_name}</h1>
          <h2>@{username}</h2>
          <p>{bio}</p>
          <ul>
            <li>
              <S.LocationIcon />
              São Paulo, Brasil
            </li>

            <li>
              <S.CakeIcon />
              Nascido em 17 de Julho de 1987
            </li>
          </ul>

          <S.Followage>
            <span>
              seguidores <strong>0</strong>
            </span>
            <span>
              {' '}
              seguindo <strong>0 </strong>
            </span>
          </S.Followage>
        </S.ProfileData>
      </S.Container>
    </>
  )
}

export default ProfilePage
