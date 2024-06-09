import styled, { css } from 'styled-components'
import { cores } from '../../styles'
import { Chat, Favorite, Trash } from '../../assets/Icons'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid ${cores.cinza};
  max-width: 100%;
  margin-bottom: 12px;
`

export const Description = styled.div`
  font-size: 18px;
  margin-top: 42px;
  width: 100%;
  display: block;
  pointer-events: none;
`
export const ImageContent = styled.div`
  margin-right: 18px;
  width: 100%;
  height: 100%;
  background: ${cores.cinza};
  margin-top: 12px;
  border-radius: 14px;
  cursor: pointer;
  flex-shrink: 0;
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 1193px; /* Adicionado para limitar a largura máxima */
  max-height: 800px; /* Adicionado para limitar a altura máxima */
  img {
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: 14px;
  }

  &:hover {
    opacity: 0.7;
  }
`

export const Icons = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 11px auto 0;

  @media (max-width: 400px) {
    width: 80%;
  }
  @media (min-width: 400px) {
    width: 63%;
  }
`

export const Status = styled.div`
  margin-left: 25px;
  cursor: pointer;
`

const IconCSS = css`
  width: 31px;
  height: 31px;
  margin-right: 7px;
  fill: ${cores.cinza};

  &:hover,
  &:active {
    fill: ${cores.azul};
  }
`
const LikeCSS = css`
  width: 31px;
  height: 31px;
  margin-right: 7px;
  fill: ${cores.cinza};

  &:hover,
  &.active {
    fill: ${cores.curtida};
  }
`

export const CommentIcon = styled(Chat)`
  ${IconCSS}
`
export const LikeIcon = styled(Favorite)`
  ${LikeCSS}
`
export const RemoveIcon = styled(Trash)`
  width: 18px;
  cursor: pointer;
  margin-right: 12px;
  &:hover,
  &.active {
    fill: ${cores.curtida};
  }
`

export const Retweet = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 8px 0px 8px 50px;

  span {
    margin-left: 9px;
  }
`

export const Body = styled.div`
  position: relative;
  margin-top: 8px;
  width: 100%;
`

export const Avatar = styled.div`
  position: absolute;
  display: flex;
  width: 49px;
  height: 49px;
  border-radius: 50%;
  background: ${cores.branca};
  margin: 3px 10px 0 15px;
  overflow: hidden; /* Adicionado para esconder qualquer conteúdo que exceda os limites do contêiner */
  @media (min-width: 400px) {
    margin: 3px 10px 0 4px;
  }

  img {
    width: 100%; /* Adicionado para garantir que a imagem ocupe todo o espaço disponível */
    height: auto; /* Adicionado para garantir que a altura seja ajustada proporcionalmente */
    border-radius: 50%; /* Movido da div para a imagem para aplicar o border-radius corretamente */
    object-fit: cover; /* Adicionado para garantir que a imagem cubra o contêiner sem distorção */
  }
`

export const Content = styled.div`
  margin: 4px 16px 0 75px;
  @media (min-width: 400px) {
    margin: 4px 10px 0 58px;
  }
`

export const Header = styled.div`
  display: flex;
  align-items: center;

  strong {
    margin-right: 5px;
  }
  Span,
  time {
    color: ${cores.cinza};
  }

  strong,
  span {
    white-space: now-rap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
`

export const Dot = styled.span`
  width: 2px;
  height: 2px;
  background: #fff;
  margin: 0 8px 0 8px;
`
