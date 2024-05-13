import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import TweetClass from '../../models/Tweet'
import Tweet from '../../models/Tweet'

type TweetState = {
  itens: TweetClass[]
}

const initialState: TweetState = {
  itens: [
    {
      id: 1,
      avatar:
        'https://media.istockphoto.com/id/1018159014/pt/foto/smiling-workman-posing-with-crossed-arms-in-auto-mechanic-shop.jpg?s=2048x2048&w=is&k=20&c=88Ht0fGgwlRG1HQqAa3siZE2kaPJTGGbzy9omZJOHew=',
      name: 'Rodrigo',
      user: 'rssantos',
      mensagem: 'oiii teste redux',
      imagem:
        'https://cdn.pixabay.com/photo/2024/02/26/19/39/monochrome-image-8598798_1280.jpg',
      date: '07/maio'
    },
    {
      id: 2,
      avatar:
        'https://media.istockphoto.com/id/1018159014/pt/foto/smiling-workman-posing-with-crossed-arms-in-auto-mechanic-shop.jpg?s=2048x2048&w=is&k=20&c=88Ht0fGgwlRG1HQqAa3siZE2kaPJTGGbzy9omZJOHew=',
      name: 'Rodrigo',
      user: 'rssantos',
      mensagem: 'mensagem para ver que esta funcionando',
      imagem:
        'https://cdn.pixabay.com/photo/2023/12/08/23/46/cat-8438334_1280.jpg',
      date: '07/maio'
    },
    {
      id: 3,
      avatar:
        'https://media.istockphoto.com/id/1018159014/pt/foto/smiling-workman-posing-with-crossed-arms-in-auto-mechanic-shop.jpg?s=2048x2048&w=is&k=20&c=88Ht0fGgwlRG1HQqAa3siZE2kaPJTGGbzy9omZJOHew=',
      name: 'Rodrigo',
      user: 'rssantos',
      mensagem: 'Helo World Tudo',
      imagem:
        'https://media.istockphoto.com/id/1690923154/pt/foto/aircraft-at-dawn-at-s%C3%A3o-paulo-airport-travel-concept.jpg?s=1024x1024&w=is&k=20&c=sgq6Oi03jhNWkcGH5wsp1hN2fioLM2WRb0f-PVVEP7w=',
      date: '07/maio'
    }
  ]
}

const tweetSlice = createSlice({
  name: 'tweet',
  initialState,
  reducers: {
    removeTweet: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter((tweet) => tweet.id !== action.payload)
    },
    cadastrar: (state, action: PayloadAction<Omit<TweetClass, 'id'>>) => {
      const ultimoTweet = state.itens[state.itens.length - 1]
      const tweetnovo = {
        ...action.payload,
        id: ultimoTweet ? ultimoTweet.id + 1 : 1
      }
      state.itens.push(tweetnovo)
    }
  }
})

export const { removeTweet, cadastrar } = tweetSlice.actions

export default tweetSlice.reducer
