import { configureStore } from '@reduxjs/toolkit'
import tweetReducer from './reducers/tweets'

const store = configureStore({
  reducer: { tweet: tweetReducer }
})

export type RootReducer = ReturnType<typeof store.getState>

export default store
