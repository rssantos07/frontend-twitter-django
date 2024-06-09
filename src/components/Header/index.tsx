import {
  Container,
  ProfileInfo,
  BackIcon,
  HomeIcon,
  SearchIcon,
  BellIcon,
  EmailIcon,
  BottomMenu,
  Cabecalho
} from './styles'

type Props = {
  token_data: TokenData
}

const Header = () => {
  return (
    <>
      <Container>
        <Cabecalho>
          <button>
            <BackIcon />
          </button>

          <ProfileInfo>
            <strong>nomexxx</strong>
            <span> contador tweets</span>
          </ProfileInfo>
        </Cabecalho>

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

export default Header
