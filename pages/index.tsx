import type { NextPage } from 'next'
import Image from 'next/image'


const Home: NextPage = () => {
  return (
    <>
      <form className='flex flex-col items-center relative' style={{ backgroundColor: 'rgb(155,109,162)' }}>
        <Image src='/chuck-norris-push-up.gif' width={400} height={300}/>
        <input className='shadow appearance-none border rounded w-6/12 py-4 px-3 text-gray-700 focus:outline-none absolute' placeholder='Search...' style={{ bottom: '-25px' }}/>
      </form>

      <div className='flex justify-center'>
        <div className='bg-gray-200 w-6/12 mt-24 p-2'>
          <span className='text-gray-500 text-3xl'>"</span>
          <p className='text-center'>It is possible to contract hepatitis from smelling one of Chuck Norris's farts.</p>
          <p className='text-gray-500 text-3xl text-right'>"</p>
          <div className='flex justify-center'>
            <button className='text-xs p-2 text-white round rounded-xl' style={{ backgroundColor: 'rgb(155,109,162)' }}>Update random fact</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
