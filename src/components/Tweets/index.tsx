import { useDispatch } from 'react-redux'

import { removeTweet } from '../../store/reducers/tweets'
import * as S from './styles'
import logo from '../../assets/images/icons8-twitter-16.svg'
import { useGetTokenDataQuery } from '../../services/api'
import { useEffect, useState } from 'react'

type Props = {
  id: number
  user: string
  name: string
  avatar: string
}

const Tweets = ({ avatar, name, user, id }: Props) => {
  const dispatch = useDispatch()

  return (
    <>
      <S.Container>
        <S.Retweet>
          <img src={logo} alt="Tweeter" />
          <span>Você Retwitou</span>
          <S.RemoveIcon onClick={() => dispatch(removeTweet(id))} />
        </S.Retweet>
        <S.Body>
          <S.Avatar>
            <img src={avatar} />
          </S.Avatar>
          <S.Content>
            <S.Header>
              <strong>{user}ss</strong>
              <span>@{name}</span>
              <S.Dot />
              <time>24/05</time>
            </S.Header>
          </S.Content>
        </S.Body>
      </S.Container>
    </>
  )
}

export default Tweets
