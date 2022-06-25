export function CommentTextArea(){
  return (
    <form className='w-[450px] flex items-center gap-2'>
      <textarea name="" id="" placeholder='Escreva seu comentário aqui' className='w-full h-12 rounded'></textarea>
      <button className='border-red-500 rounded bg-green-400 h-12'>Enviar</button>
    </form>
  )
}