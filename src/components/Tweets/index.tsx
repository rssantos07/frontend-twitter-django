import { useDispatch } from 'react-redux'

import { removeTweet } from '../../store/reducers/tweets'
import * as S from './styles'
import logo from '../../assets/images/icons8-twitter-16.svg'
import TweetClass from '../../models/Tweet'

type TagProps = TweetClass

const Tweets = ({
  avatar,
  name,
  date,
  imagem,
  mensagem,
  user,
  id
}: TagProps) => {
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
              <strong>{name}</strong>
              <span>@{user}</span>
              <S.Dot />
              <time>{date}</time>
            </S.Header>
            <S.Description>{mensagem}</S.Description>
            <S.ImageContent>
              <img src={imagem} alt="" />
            </S.ImageContent>
            <S.Icons>
              <S.Status>
                <S.CommentIcon />
                22
              </S.Status>
              <S.Status>
                <S.LikeIcon />
                16
              </S.Status>
            </S.Icons>
          </S.Content>
        </S.Body>
      </S.Container>
    </>
  )
}

export default Tweets
