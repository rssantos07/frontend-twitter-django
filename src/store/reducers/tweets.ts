import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type TweetState = {
  itens: Post[]
}

const initialState: TweetState = {
  itens: []
}

const tweetSlice = createSlice({
  name: 'tweets',
  initialState,
  reducers: {
    setPosts: (state, action: PayloadAction<Post[]>) => {
      state.itens = action.payload
    },
    addTweet: (state, action: PayloadAction<Post>) => {
      state.itens.push(action.payload)
    },
    removeTweet: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter((tweet) => tweet.id !== action.payload)
    }
  }
})

export const { removeTweet, addTweet, setPosts } = tweetSlice.actions

export default tweetSlice.reducer
