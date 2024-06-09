import styled, { css } from 'styled-components'
import { cores } from '../../styles'
import { LocationOn, Cake } from '../../assets/Icons'
import { ButtonContainer } from '../Button/styles'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-heigth: 100%;

  overflow-y: auto;
  scrollbar-width: none; /* Firefox */
  ::webkit-scrollbar {
    display: none;
  }
`
export const Banner = styled.div`
  flex-shrink: 0;
  width: 100%;
  height: min(33vw, 199px);
  background: ${cores.azul};
  position: relative;
`
export const Avatar = styled.div`
  width: max(45px, min(135px, 22vw));
  height: max(45px, min(135px, 22vw));
  background: ${cores.branca};
  border-radius: 50%;
  border: 3.75px solid ${cores.preta};
  position: absolute;
  left: 15px;
  bottom: max(-60px, -10vw);

  /* Estilo para a imagem dentro da div Avatar */
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
`

export const ProfileData = styled.div`
  margin-top: 70px;
  display: flex;
  flex-direction: column;
  margin-left: 15px;
  position: relative;

  h1 {
    font-weight: bold;
    font-size: 19px;
  }

  h2 {
    font-weight: normal;
    font-size: 15px;
    color: ${cores.cinza};
  }

  p {
    font-size: 15px;
    margin-top: 11px;
  }

  a {
    text-decoration: none;
    color: ${cores.azul};
  }

  ul {
    margin: 10px 0 10px 0;

    li {
      display: flex;
      align-items: center;
      color: ${cores.cinza};
      white-space: nowrap;

      svg {
        margin-right: 5px;
        fill: ${cores.cinza};
      }
    }
  }
`

const IconCSS = css`
  width: 20px;
  height: 20px;
  cursor: pointer;
  fill: ${cores.cinza};
  flex-shrink: 0;
`
export const CakeIcon = styled(Cake)`
  ${IconCSS}
`

export const LocationIcon = styled(LocationOn)`
  ${IconCSS}
`
export const Followage = styled.div`
  display: flex;
  span {
    font-size: 15px;
    color: ${cores.cinza};

    & + span {
      margin-left: 15px;
    }
  }
`
export const EditButton = styled(ButtonContainer)`
  position: absolute;
  right: 7px;
  padding: 4px 16px;
  font-size: 13px;
  top: -40px;
`
