import * as S from './styles'
import logo from '../../assets/images/icons8-twitter-16.svg'
import { useDeletePostMutation } from '../../services/api'

interface Post {
  id: number
  user: number
  username: string
  full_name: string
  image: string
  mensagem: string
  imagem: string
  created_at: string
  formatted_created_at: string
}
const Post = ({
  id,
  user,
  username,
  full_name,
  image,
  mensagem,
  imagem,
  created_at,
  formatted_created_at
}: Post) => {
  const [deletePost, { isLoading }] = useDeletePostMutation()
  const handleDelete = async () => {
    try {
      await deletePost(id).unwrap()
      console.log('Post deletado com sucesso')
    } catch (error) {
      console.log('Erro ao deletar post', error)
    }
  }
  return (
    <S.Container>
      <S.Retweet>
        <div>
          <img src={logo} alt="Tweeter" />
          <span>Tweet</span>
        </div>
        <S.RemoveIcon onClick={handleDelete} />
      </S.Retweet>
      <S.Body>
        <S.Avatar>
          <img src={image} />
        </S.Avatar>
        <S.Content>
          <S.Header>
            <strong>{username}</strong>
            <span>@{full_name}</span>
            <S.Dot />
            <time>{formatted_created_at}</time>
          </S.Header>
        </S.Content>
      </S.Body>
      <S.Description>{mensagem}</S.Description>
      <S.ImageContent>
        <img src={imagem} alt="" />
      </S.ImageContent>
      <S.Icons>
        <S.Status>
          <S.CommentIcon />0
        </S.Status>
        <S.Status>
          <S.LikeIcon />0
        </S.Status>
      </S.Icons>
    </S.Container>
  )
}

export default Post
