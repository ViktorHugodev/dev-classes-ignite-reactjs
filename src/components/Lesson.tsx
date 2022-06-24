import { CheckCircle, Lock } from 'phosphor-react'
import {isPast, format} from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { Link, useParams } from 'react-router-dom'
 interface LessonProps {
  title: string
  slug: string
  availableAt: Date
  type: 'live' | 'class'
}

export function Lesson(props: LessonProps) {
  const {slug} = useParams<{slug: string}>()
  const isLessonAvaible = isPast(props.availableAt)
  const dateFormatted = format(props.availableAt, "EEEE' • 'd' de 'MMMM' • 'k'h'mm", {
    locale: ptBR
  })
  const isActive = slug === props.slug
  return (
    <Link to={`/event/lesson/${props.slug}`} className='group'>
      <span className='text-gray-300'>{dateFormatted}</span>

      <div className={`border-gray-500 border rounded p-4 mt-2 group-hover:border-green-500 ${isActive ? 'bg-green-500': ''}`}>
        <header className='flex items-center justify-between'>
          {isLessonAvaible ? (
            <span className={`text-sm  font-medium flex items-start gap-2 ${isActive ? 'text-white' : 'text-blue-500'}`}>
              <CheckCircle size={20} />
              Conteúdo liberado
            </span>
          ) : (
            <span className='text-sm text-orange-500 font-medium flex items-start gap-2'>
              <Lock size={20} />
              Em breve
            </span>
          )}

          <span className={`text-xs rounded px-2 py-[2px] text-white border border-green-300 font-bold` }>
           {props.type === 'live'? 'AO VIVO' :'AULA PRÁTICA'}
          </span>
        </header>
        <span className={`mt-5 block ${isActive ? 'text-white': 'text-gray-200'}`}>
          {props.title}
        </span>
      </div>
    </Link>
  )
}
