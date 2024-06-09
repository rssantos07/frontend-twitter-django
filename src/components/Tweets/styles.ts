import styled, { css } from 'styled-components'
import { cores } from '../../styles'
import { Chat, Favorite, Trash } from '../../assets/Icons'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid ${cores.cinza};
  max-width: 100%;
`

export const Retweet = styled.div`
  display: flex;
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
  overflow: hidden;
  @media (min-width: 400px) {
    margin: 3px 10px 0 4px;
  }

  img {
    width: 100%;
    height: auto;
    border-radius: 50%;
    object-fit: cover;
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
  ${LikeCSS}
  cursor: pointer;
`
