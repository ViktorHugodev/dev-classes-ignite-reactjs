import { ApolloProvider, gql, useQuery } from '@apollo/client'
import { useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { apolloClient } from './lib/apollo'
import { Home } from './pages/Home'
import { Router } from './Router'
// const GET_QUERY_LESSONS = gql`
//   query {
//     lessons {
//       id
//       title
//     }
//   }
// `
// interface Lesson {
//   id: string
//   title: string

// }
// type Props = {
//   lessons: Lesson[]
// }
function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ApolloProvider>
  )
}

export default App
