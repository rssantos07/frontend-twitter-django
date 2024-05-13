import { ButtonContainer } from '../Button/styles'
import { Container, InputGroup, ButtonGroup, TextGroup } from './styles'
import logo from '../../assets/images/icons8-twitter-48.svg'

import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth'
import { auth } from '../../services/firebase'
import { useState } from 'react'

const SignUp = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth)

  function handleSignUp(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    createUserWithEmailAndPassword(email, password)
  }

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
        <p>Registered User: {user.user.email}</p>
      </div>
    )
  }
  return (
    <div className="App">
      <label>usuario</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label>senha</label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={() => createUserWithEmailAndPassword(email, password)}>
        Cadastre-se
      </button>
    </div>
  )
}
export default SignUp
