import { useParams } from 'react-router-dom'
import { CommentComponent } from '../components/Comment/index'
import { Header } from '../components/Header'
import { Sidebar } from '../components/Sidebar'
import { Video } from '../components/Video'

export function Home() {
  const { slug } = useParams<{ slug: string }>()
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <main className='flex flex-1 flex-col '>
        <div className='flex'>
          {slug ? <Video lessonSlug={slug} /> : <div className='flex-1'></div>}
          <Sidebar />
        </div>

        {/* <CommentComponent /> */}
      </main>
    </div>
  )
}
