import { useSelector } from 'react-redux'
import Tweet from '../../components/Tweets'
import { RootReducer } from '../../store'

const ListaTweets = () => {
  const { itens } = useSelector((state: RootReducer) => state.tweet)

  return (
    <>
      <ul>
        {itens.map((t) => (
          <li key={t.id}>
            <Tweet
              id={t.id}
              avatar={t.avatar}
              name={t.name}
              user={t.user}
              mensagem={t.mensagem}
              imagem={t.imagem}
              date={t.date}
            />
          </li>
        ))}
      </ul>
    </>
  )
}

export default ListaTweets
