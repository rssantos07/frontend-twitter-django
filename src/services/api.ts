import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://rssantos07.pythonanywhere.com/api',
    prepareHeaders: async (headers) => {
      const token = localStorage.getItem('access_token')
      if (token) {
        headers.set('Authorization', `Bearer ${token}`)
        console.log(headers)
      } else {
        console.log('Token não encontrado')
      }
      return headers
    }
  }),
  endpoints: (builder) => ({
    getTokenData: builder.query<Data[], void>({
      query: () => '/user'
    }),
    createPost: builder.mutation<void, FormData>({
      query: (formData) => ({
        url: '/posts/',
        method: 'POST',
        body: formData
      })
    }),
    getPosts: builder.query<Post[], void>({
      query: () => '/posts/'
    }),
    deletePost: builder.mutation<void, number>({
      query: (id) => ({
        url: `/posts/${id}/`,
        method: 'DELETE'
      })
    }),
    logout: builder.mutation<void, void>({
      queryFn: () => {
        localStorage.removeItem('access_token')
        localStorage.removeItem('refresh_token')
        return { data: undefined }
      }
    })
  })
})

export const {
  useGetTokenDataQuery,
  useCreatePostMutation,
  useGetPostsQuery,
  useDeletePostMutation,
  useLogoutMutation
} = api
export default api
