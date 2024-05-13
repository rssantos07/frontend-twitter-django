import { useSignOut } from 'react-firebase-hooks/auth'
import { Button, Container, Line, Moment, Sign, Subject, Title } from './styles'
import { auth } from '../../services/firebase'

const Aside = () => {
  return (
    <Container>
      <Sign>
        <h3>Assine o Premium</h3>
        <p>
          Assine para desbloquear novos recursos e, se elegível, receba uma
          parte da receita dos anúncios.
        </p>
        <Button type="button" title="em breve" variant="primary">
          Em breve
        </Button>
      </Sign>
      <Moment>
        <Title>O que está acontecendo</Title>
        <Line></Line>
        <Subject>
          <h3>Assuntos do momento no Brasil</h3>
          <p>Ebac projeto Final</p>
        </Subject>
        <Line></Line>
        <Subject>
          <h3>Assuntos do momento no Brasil</h3>
          <p>Ebac projeto Final</p>
        </Subject>
        <Line></Line>
        <Subject>
          <h3>Assuntos do momento no Brasil</h3>
          <p>Ebac Projeto Final</p>
        </Subject>
      </Moment>
    </Container>
  )
}

export default Aside
