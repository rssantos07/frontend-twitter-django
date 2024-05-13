import Feed from '../Feed'
import * as S from './styles'

import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'

const ProfilePage = () => {
  const itens = useSelector((state: RootReducer) => state.tweet.itens)
  const primeiroItem = useSelector((state: RootReducer) => state.tweet.itens[0])
  const avatarUrl = itens.length > 0 ? itens[0].avatar : ''
  const name = primeiroItem.name
  const user = primeiroItem.user
  return (
    <>
      <S.Container>
        <S.Banner>
          <S.Avatar>
            <img src={avatarUrl} alt="imagem profile" />
          </S.Avatar>
        </S.Banner>

        <S.ProfileData>
          <S.EditButton type="button" title="Editar">
            Editar perfil
          </S.EditButton>
          <h1>{name}</h1>
          <h2>@{user}</h2>
          <p>
            Developer at <a href="#">@{user}</a>
          </p>
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
              <strong>34 </strong>seguidores
            </span>
          </S.Followage>
        </S.ProfileData>
        <Feed></Feed>
      </S.Container>
    </>
  )
}

export default ProfilePage
