import styled from 'styled-components'
import { cores } from '../../styles'
import { Link } from 'react-router-dom'
import { Props } from '.'

export const ButtonContainer = styled.button<Props>`
  color: ${(props) =>
    props.variant === 'primary' ? cores.branca : cores.azul};
  background-color: ${(props) =>
    props.variant === 'primary' ? cores.azul : 'transparent'};
  border: ${(props) =>
    props.variant === 'primary' ? `0px` : `2px solid ${cores.azul}`};
  text-decoration: none;
  padding: 16px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  border-radius: 24px;
  flex-shrink: 0;

  &:hover {
    background-color: ${(props) =>
      props.variant === 'primary' ? cores.azul_hover : cores.cinza_hover};
  }
`

export const ButtonLink = styled(Link)`
  color: ${cores.branca};
  background-color: ${cores.azul};
  text-decoration: none;
  padding: 16px;
  font-size: 16px;
  font-weight: bold;
  border: none;
  cursor: pointer;
  border-radius: 16px;
`
