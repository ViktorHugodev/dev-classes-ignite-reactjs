import { gql, useMutation } from '@apollo/client'
import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Logo } from '../components/Logo'
import { useCreateSubscriberMutation } from '../graphql/generated'

export function Subscribe() {
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [createSubscriber, { data, loading }] = useCreateSubscriberMutation()

  async function handleSubscribe(event: FormEvent) {
    event.preventDefault()
    console.log('passo 1')
    await createSubscriber({
      variables: {
        name,
        email,
      },
    })
    navigate('/event')
    console.log('passo 2')
    console.log(data)
  }
  return (
    <div className="backdrop-blur-md backdrop-brightness-150 bg-center bg-cover bg-no-repeat bg-blur ">
    <div className='min-h-screen  flex flex-col items-center backdrop-blur-sm backdrop-brightness-100'>
      <div className='w-full max-w-[1100px] flex items-center justify-between mt-20 mx-autox'>
        <div className='max-w-[640px] '>
          <Logo />
          <h1 className='mt-8 text-[2.5rem] leading-tight'>
            Construa uma{' '}
            <strong className='text-purple-300'>aplicação completa</strong>, do
            zero, com <strong className='text-purple-300'>React JS</strong>
          </h1>
          <p className='mt-4 text-gray-200 leading-relaxed '>
            Em apenas uma semana você vai dominar na prática uma das tecnologias
            mais utilizadas e com alta demanda para acessar as melhores
            oportunidades do mercado.
          </p>
        </div>
        
        <div className='p-8 dark:bg-gray-700 border-2 border-gray-500 rounded'>
          <strong className='text-2xl mb-6 text-gray-300 block'>
            Inscreva-se gratuitamente
          </strong>

          <form
            onSubmit={handleSubscribe}
            className='w-full flex flex-col gap-2'
          >
            <input
              className='bg-purple-200 dark:bg-gray-900 rounded px-5 h-14'
              type='text'
              placeholder='Digite seu nome completo'
              onChange={event => setName(event.target.value)}
            />
            <input
              className='bg-purple-200 dark:bg-gray-900  rounded px-5 h-14'
              type='email'
              placeholder='Digite seu email'
              onChange={event => setEmail(event.target.value)}
            />
            <button
              type='submit'
              disabled={loading}
              className='mt-4 bg-purple-500 uppercase py-4 font-bold text-sm hover:bg-purple-700 transition-colors
          w-full disabled:opacity-50
          '
            >
              Garantir minha vaga
            </button>
          </form>
        </div>
      </div>

      <div className=' min-h-[500px] bg-screen w-[1000px] bg-cover bg-no-repeat mx-auto'></div>
    </div>
    </div>
  )
}
