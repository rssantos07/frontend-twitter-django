import { configureStore } from '@reduxjs/toolkit'
import tweetReducer from './reducers/tweets'
import api from '../services/api'

const store = configureStore({
  reducer: {
    tweets: tweetReducer,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})

export type RootReducer = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
