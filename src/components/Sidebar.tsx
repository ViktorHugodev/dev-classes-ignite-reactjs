import { useGetAllLessonsQuery } from '../graphql/generated'
import { Lesson } from './Lesson'


export function Sidebar() {
  const { data } = useGetAllLessonsQuery()
  console.log(data)
  return (
    <aside className='w-[348px] bg-grayMain dark:bg-gray-700 p-6 border-l border-gray-600 min-h-[100vh] fixed right-0 top-0 z-5'>
      <strong className='font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block mt-20'>
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
