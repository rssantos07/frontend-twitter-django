import { SyntheticEvent, useState } from 'react'

import { Container, InputGroup, Row, Logotype, Content } from './styles'
import logo from '../../assets/images/icons8-twitter-480.svg'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  const submit = async (e: SyntheticEvent) => {
    e.preventDefault()

    try {
      const response = await fetch(
        'https://rssantos07.pythonanywhere.com/api/token/',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          credentials: 'include',
          body: JSON.stringify({
            email,
            password
          })
        }
      )

      if (!response.ok) {
        alert('usuário ou senha incorretos')
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data = await response.json()
      localStorage.setItem('access_token', data.access)
      localStorage.setItem('refresh_token', data.refresh)
      console.log('Login successful')

      navigate('/layout')
    } catch (error) {
      console.error('Failed to login:', error)
    }
  }

  return (
    <Container>
      <Logotype>
        <img src={logo} alt="" />
      </Logotype>
      <Content>
        <h1>Acontecendo Agora</h1>
        <Row>
          <form onSubmit={submit}>
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

            <button type="submit">Sign In</button>
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
