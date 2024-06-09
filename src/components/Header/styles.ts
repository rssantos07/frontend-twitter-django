import styled, { css } from 'styled-components'
import { cores } from '../../styles'
import {
  ArrowLeft,
  Home,
  Search,
  Email,
  Notifications
} from '../../assets/Icons'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: min(601px, 100%);
  @media (min-width: 500px) {
    border-left: 1px solid ${cores.linha};
    border-right: 1px solid ${cores.linha};
  }
`

export const Cabecalho = styled.ul`
  z-index:2;
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  text-align: left;
  padding: 8px 0 9px 12px;
  border-bottom: 1px solid ${cores.linha};

  button {
    padding: 8px;
    border-radius: 50%;
    border: 0px;
    cursor: pointer;

`
export const ProfileInfo = styled.li`
  display: flex;
  flex-direction: column;
  font-size: 22px;
  margin-right: 160px;

  strong {
    white-space: nowrap;
  }
  span {
    font-size: 18px;
    color: ${cores.cinza};
  }
`
export const BackIcon = styled(ArrowLeft)`
  width: 24px;
  height: 24px;
  border: none;
  fill: ${cores.azul};
`

export const BottomMenu = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 2;
  width: 100%;
  border-top: 1px solid ${cores.linha};
  display: flex;
  justify-content: space-between;
  padding: 8px min(46px, max(10vw, 10px));

  @media (min-width: 550px) {
    display: none;
  }
`

const IconCSS = css`
  width: 31px;
  height: 31px;
  cursor: pointer;
  fill: ${cores.cinza};

  &:hover,
  &.active {
    fill: ${cores.azul};
  }
`

export const HomeIcon = styled(Home)`
  ${IconCSS}
`
export const SearchIcon = styled(Search)`
  ${IconCSS}
`
export const BellIcon = styled(Notifications)`
  ${IconCSS}
`
export const EmailIcon = styled(Email)`
  ${IconCSS}
`
