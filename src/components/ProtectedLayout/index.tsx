import { useAuth } from '../../Context/useAuth'

export const ProtectedLayout = ({ children }: { children: JSX.Element }) => {
  const auth = useAuth()
  if (!auth.email) {
    return <h1>Vc não tem acesso</h1>
  }
  return children
}
