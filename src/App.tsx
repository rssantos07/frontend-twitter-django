import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Container, GlobalCss } from './styles'
import Layout from './pages/Layout'

import Login from './components/Login'
import SignUp from './components/Signup'

import store from './store'
import { Provider } from 'react-redux'

function App() {
  return (
    <Provider store={store}>
      <GlobalCss />
      <Container>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/layout" element={<Layout />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </Provider>
  )
}

export default App
