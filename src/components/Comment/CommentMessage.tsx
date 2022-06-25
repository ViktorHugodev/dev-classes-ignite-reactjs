export function Comment() {
  return (
    <div>

      <div className='flex items-center gap-2 mt-4'>
        <img
          className='h-12 w-12 rounded-full border-2 border-blue-500'
          src='https://github.com/viktorhugodev.png'
          alt='Imagem de perfil'
        />
        <div>
          <span>Victor Hugo</span>
        </div>
      </div>

      <div className='border p-4 max-w-[450px] rounded mt-4' >
        <p>Esse é um comentário de fulano de tal</p>
      </div>
    </div>
  )
}
