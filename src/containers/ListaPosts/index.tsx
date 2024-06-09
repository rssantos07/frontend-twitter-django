import Post from '../../components/Post'

type Props = {
  posts: Post[]
}

const PostsList = ({ posts }: Props) => {
  const reversedPosts = [...posts].reverse()
  return (
    <ul>
      {reversedPosts.map((p) => (
        <li key={p.id}>
          <Post
            id={p.id}
            image={p.image}
            full_name={p.full_name}
            username={p.username}
            mensagem={p.mensagem}
            imagem={p.imagem}
            created_at={p.created_at}
            user={p.user}
            formatted_created_at={p.formatted_created_at}
          />
        </li>
      ))}
    </ul>
  )
}

export default PostsList
