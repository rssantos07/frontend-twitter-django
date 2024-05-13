import {
  Container,
  Header,
  ProfileInfo,
  BackIcon,
  HomeIcon,
  SearchIcon,
  BellIcon,
  EmailIcon,
  BottomMenu
} from './styles'
import ProfilePage from '../ProfilePage'
import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { useState } from 'react'

const Main = () => {
  const itens = useSelector((state: RootReducer) => state.tweet.itens)
  const primeiroItem = useSelector((state: RootReducer) => state.tweet.itens[0])
  const name = primeiroItem.name
  const contador = itens.length

  const [modalOn, setModalOn] = useState(false)

  return (
    <>
      <Container>
        <Header>
          <button>
            <BackIcon />
          </button>

          <ProfileInfo>
            <strong>{name}</strong>
            <span> {contador} tweets</span>
          </ProfileInfo>
        </Header>
        <ProfilePage />
        <BottomMenu>
          <HomeIcon className="active" />
          <SearchIcon />
          <BellIcon />
          <EmailIcon />
        </BottomMenu>
      </Container>
    </>
  )
}

export default Main
