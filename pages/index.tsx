import type { NextPage } from 'next'
import Image from 'next/image'


const Home: NextPage = () => {
  return (
    <>
      <form className='flex flex-col items-center relative' style={{ backgroundColor: 'rgba(155,109,162,255)' }}>
        <Image src='/chuck-norris-push-up.gif' width={400} height={300}/>
        <input className='shadow appearance-none border rounded w-6/12 py-4 px-3 text-gray-700 focus:outline-none absolute' placeholder='Search...' style={{ bottom: '-25px' }}/>
      </form>
    </>
  )
}

export default Home
