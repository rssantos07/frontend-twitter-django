import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes
} from 'react-router-dom'
import LoginPage from './pages/Login'
import { Container, GlobalCss } from './styles'
import Layout from './pages/Layout'
import { ProtectedLayout } from './components/ProtectedLayout'
import Login from './components/Login'
import SignUp from './components/Signup'
import { AuthProvider } from './Context'
import Tweets from './components/Tweets'
import ProfilePage from './components/ProfilePage'
import store from './store'
import { Provider } from 'react-redux'
import { IUser } from './Context/types'

function App() {
  return (
    <Provider store={store}>
      <GlobalCss />
      <Container>
        <AuthProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route
                path="/layout"
                element={
                  // <ProtectedLayout>
                  <Layout />
                  // </ProtectedLayout>
                }
              />
            </Routes>
          </BrowserRouter>
        </AuthProvider>
      </Container>
    </Provider>
  )
}

export default App
