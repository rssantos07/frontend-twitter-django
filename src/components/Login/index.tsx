import { auth } from '../../services/firebase'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth'
import { useState } from 'react'
import Layout from '../../pages/Layout'
import { useFormik } from 'formik'
import { Container, InputGroup, Row, Logotype, Content } from './styles'
import logo from '../../assets/images/icons8-twitter-480.svg'
import { Link } from 'react-router-dom'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth)

  async function handleSignIn(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    signInWithEmailAndPassword(email, password)
  }

  const form = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit: (values) => {
      console.log(values)
    }
  })

  if (error) {
    return (
      <div>
        <p>Error: {error.message}</p>
      </div>
    )
  }
  if (loading) {
    return <p>Loading...</p>
  }
  if (user) {
    return (
      <div>
        <Layout />
      </div>
    )
  }
  return (
    <Container>
      <Logotype>
        <img src={logo} alt="" />
      </Logotype>
      <Content>
        <h1>Acontecendo Agora</h1>
        <Row>
          <form onSubmit={form.handleSubmit}>
            <InputGroup>
              <label htmlFor="email">E-mail :</label>
              <input
                type="email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </InputGroup>
            <InputGroup>
              <label htmlFor="email">Senha :</label>
              <input
                type="password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </InputGroup>

            <button onClick={() => signInWithEmailAndPassword(email, password)}>
              Sign In
            </button>
            <p>
              Ainda não é um escrito? <Link to="/signup">Inscreva-se</Link>
            </p>
          </form>
        </Row>
      </Content>
    </Container>
  )
}

export default Login
