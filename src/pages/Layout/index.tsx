import Aside from '../../components/Aside'

import { Container, Principal } from './styles'
import MenuBar from '../../components/MenuBar'

import Feed from '../../components/Feed'
import Profile from '../../components/Profile'
import { useGetTokenDataQuery } from '../../services/api'

const Layout = () => {
  const { data: profile } = useGetTokenDataQuery()

  return (
    <Container>
      {profile && <MenuBar profile={profile} />}

      <Principal>
        {profile && <Profile profile={profile} />}
        <Feed />
      </Principal>

      <Aside />
    </Container>
  )
}

export default Layout
