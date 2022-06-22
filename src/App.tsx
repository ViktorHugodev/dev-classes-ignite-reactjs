import { gql, useQuery } from '@apollo/client'
import { useEffect } from 'react'
import { Home } from './pages/Home'

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

    <Home />
  )
}

export default App
