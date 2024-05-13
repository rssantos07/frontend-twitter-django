import { ButtonContainer, ButtonLink } from './styles'

export type Props = {
  type: 'button' | 'link'
  title: string
  to?: string
  onClick?: () => void
  children: string
  variant?: 'primary' | 'secundary'
}

const Button = ({ type, title, to, children, onClick, variant }: Props) => {
  if (type === 'button') {
    return (
      <ButtonContainer
        type="button"
        onClick={onClick}
        title={title}
        variant={variant}
      >
        {children}
      </ButtonContainer>
    )
  }
  return (
    <ButtonLink to={to as string} title={title}>
      {children}
    </ButtonLink>
  )
}
export default Button
