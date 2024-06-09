import { Link, useNavigate } from 'react-router-dom'
import * as S from './styles'
import logo from '../../assets/images/icons8-twitter-480.svg'
import { SyntheticEvent, useState } from 'react'

const SignUp = () => {
  const [username, setUsername] = useState('[]')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [password2, setPassword2] = useState('')

  const navigate = useNavigate()

  const submit = async (e: SyntheticEvent) => {
    e.preventDefault()

    if (password !== password2) {
      alert('As senhas não coincidem!') // Ou exiba o erro de outra forma
      return // Impede o envio do formulário
    }

    try {
      const response = await fetch(
        'https://rssantos07.pythonanywhere.com/api/register/',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            username,
            email,
            password,
            password2
          })
        }
      )

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const content = await response.json()
      console.log(content)
      alert('Usuário criado com sucesso!')
      navigate('/')
    } catch (error) {
      console.error('Falha no fetch:', error)
      alert('Falha ao criar usuário. Verifique os dados e tente novamente.')
    }
  }

  return (
    <S.Container>
      <S.Logotype>
        <img src={logo} alt="" />
      </S.Logotype>
      <S.FormContainer onSubmit={submit}>
        <S.Label htmlFor="user">Usuário</S.Label>
        <S.Input type="text" onChange={(e) => setUsername(e.target.value)} />
        <S.Label htmlFor="email">Email</S.Label>
        <S.Input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="email"
        />
        <S.Label htmlFor="password">Senha</S.Label>
        <S.Input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="new-password"
        />
        <S.Label htmlFor="password">Confirme a Senha</S.Label>
        <S.Input
          type="password"
          onChange={(e) => setPassword2(e.target.value)}
          autoComplete="new-password"
        />
        <S.Button type="submit">Cadastre-se</S.Button>
        <p>
          Já é um escrito? <Link to="/">Entrar</Link>
        </p>
      </S.FormContainer>
    </S.Container>
  )
}
export default SignUp
