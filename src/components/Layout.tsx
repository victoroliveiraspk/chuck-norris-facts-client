import { ReactNode } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'

interface Props {
  children: ReactNode
  loading?: boolean
  errorMessage?: string
}

const Layout = ({ children, loading = false, errorMessage = '' } : Props) => {
  const router = useRouter()

  const handleSubmit = (event: any) => {
    event.preventDefault()
    const query = event.target.elements.query.value

    router.push({
      pathname: '/search',
      query: { query }
    })
  }

  return (
    <>
      <form className='bg-primary flex flex-col items-center relative'
        onSubmit={handleSubmit}>
        <Image src='/chuck-norris-push-up.gif' width={400} height={300}/>
        <p className='absolute text-white text-3xl sm:text-5xl text-center'
          style={{ top: '10%' }}>
          Chuck Norris facts
        </p>
        <input className='search-input shadow appearance-none border rounded w-10/12 sm:w-6/12 py-4 px-3 text-gray-700 focus:outline-none absolute'
          placeholder='Search...'
          style={{ bottom: '-25px' }}
          name='query'
          autoFocus
          autoComplete='off'/>
      </form>

      <div className='mt-20 px-4'>
        {errorMessage && <p className='error-message-text text-center text-red-500'>{errorMessage}</p>}
        
        {loading == false && errorMessage == '' &&  children}

        {loading && (
          <div className='flex justify-center flex-col items-center'>
            <Image className='pulsate-bck-animation' src='/hat.png' width={64} height={64}/>
            Loading...
          </div>
        )}
        
      </div>
    </> 
  )
}

export default Layout
