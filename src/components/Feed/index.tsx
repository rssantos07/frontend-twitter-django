import { Container, Tab } from './styles'

import { useGetPostsQuery } from '../../services/api'
import PostsList from '../../containers/ListaPosts'

const Feed = () => {
  const { data: posts } = useGetPostsQuery()

  return (
    <>
      <Container>
        <Tab>Tweets</Tab>
        {posts && <PostsList posts={posts} />}
      </Container>
    </>
  )
}

export default Feed
