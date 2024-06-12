import { useEffect, useState } from 'react'
import * as S from './styles'

type Article = {
  title: string
  author: string
  url: string
}
const Aside = () => {
  // const [articles, setArticles] = useState<Article[]>([])
  // const [error, setError] = useState<string | null>(null)

  // useEffect(() => {
  //   fetch(
  //     'https://newsapi.org/v2/top-headlines?country=br&apiKey=7c13bc9a17564a98a0f5a35e2ac8ab26'
  //   )
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setArticles(data.articles.slice(-3))
  //       setError(null)
  //     })
  //     .catch((error) => {
  //       console.error('Erro ao fazer a requisição:', error)
  //       setError(
  //         'Erro na importação da API, api é paga e tem numero máximo de acesso por dia'
  //       )
  //     })
  // })

  return (
    <S.Container>
      <S.Sign>
        <h3>Assine o Premium</h3>
        <p>
          Assine para desbloquear novos recursos e, se elegível, receba uma
          parte da receita dos anúncios.
        </p>
        <S.Button type="button" title="em breve" variant="primary">
          Em breve
        </S.Button>
      </S.Sign>
      {/* <S.Moment>
        <S.Title>O que está acontecendo</S.Title>
        <S.Line></S.Line>
        {error ? (
          <S.Error>{error}</S.Error>
        ) : (
          articles.map((article) => (
            <S.Subject key={article.url}>
              <h3>{article.author}</h3>
              <p>
                {article.title.length > 32
                  ? `${article.title.substring(0, 32)}...`
                  : article.title}
              </p>
              <S.Line></S.Line>
            </S.Subject>
          ))
        )}
      </S.Moment> */}
    </S.Container>
  )
}

export default Aside
