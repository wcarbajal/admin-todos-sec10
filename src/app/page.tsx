
import Link from 'next/link'
import { redirect } from 'next/navigation'

export default function Home() {
   // redirect('/dashboard')

  return (

    <>
    
    <div className='flex flex-col h-100hv items-center justify-center '>
      <h1 className='text-5xl'>Hola mundo</h1>
      
      <Link
        className="w-32 relative px-4 py-3 flex items-center space-x-4 rounded-xl text-white bg-gradient-to-r from-sky-600 to-cyan-400"
        href="/dashboard">
          Dashboard
      </Link>
    </div>
    
    </>

  )
}
