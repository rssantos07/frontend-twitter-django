import { Container, Tab } from './styles'

import ListaTweets from '../../containers/ListaTweets'

const Feed = () => {
  return (
    <>
      <Container>
        <Tab>Tweets</Tab>
        <ListaTweets />
      </Container>
    </>
  )
}

export default Feed
