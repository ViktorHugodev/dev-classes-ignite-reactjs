import { gql, useQuery } from '@apollo/client'
import { Lesson } from './Lesson'

const GET_LESSONS = gql`
  query MyQuery {
    lessons(orderBy: publishedAt_ASC, stage: PUBLISHED) {
      availableAt
      id
      lessonType
      slug
      title
    }
  }
`
interface LessonsProps {
  availableAt: Date
  title: string
  id: string
  lessonType: 'live' | 'class'
  slug: string
}

type Props = {
  lessons: LessonsProps[]
}

export function Sidebar() {
  const { data } = useQuery<Props>(GET_LESSONS)
  console.log(data)
  return (
    <aside className='w-[348px] bg-gray-700 p-6 border-l border-gray-600'>
      <strong className='font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block'>
        Cronograma de aulas
      </strong>
      <div className='flex flex-col gap-8'>
        {data?.lessons.map(lesson => (
          <Lesson
            key={lesson.id}
            title={lesson.title}
            availableAt={new Date(lesson.availableAt)}
            type={lesson.lessonType}
            slug={lesson.slug}
          />
        ))}
      </div>
    </aside>
  )
}
