import Aside from '../../components/Aside'
import Main from '../../components/Main'
import MenuBar from '../../components/MenuBar'
import { Container } from './styles'

const Layout = () => {
  return (
    <Container>
      <MenuBar />
      <Main />
      <Aside />
    </Container>
  )
}

export default Layout
