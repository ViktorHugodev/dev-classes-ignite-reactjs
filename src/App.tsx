import { gql, useQuery } from '@apollo/client'
import { useEffect } from 'react'

const GET_QUERY_LESSONS = gql`
  query {
    lessons {
      id
      title
    }
  }
`
interface Lesson {
  id: string
  title: string

}
type Props = {
  lessons: Lesson[]
}
function App() {
  const { data } = useQuery<Props>(GET_QUERY_LESSONS)
  console.log(data)
  return (
    <ul>
      {data?.lessons.map(lesson => (
        <li key={lesson.id}>{lesson.title}</li>
      ))}
    </ul>
  )
}

export default App
