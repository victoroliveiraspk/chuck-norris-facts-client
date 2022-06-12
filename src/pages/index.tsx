import type { NextPage } from 'next'
import { useState } from 'react'
import Image from 'next/image'
import RandomFact from '../components/RandomFact'
import FactsList from '../components/FactsList'

const Home: NextPage = () => {
  const [searchQuery, setSearchQuery] = useState<string>('')

  const onSubmitHandler = (event: any) => {
    event.preventDefault()
    setSearchQuery(event.target.elements.searchQuery.value)
  }

  return (
    <>
      <form className='flex flex-col items-center relative' style={{ backgroundColor: 'rgb(155,109,162)' }} onSubmit={onSubmitHandler}>
        <Image src='/chuck-norris-push-up.gif' width={400} height={300}/>
        <p className='absolute text-white text-3xl sm:text-5xl text-center' style={{ top: '10%' }}>Chuck Norris facts</p>
        <input className='shadow appearance-none border rounded w-10/12 sm:w-6/12 py-4 px-3 text-gray-700 focus:outline-none absolute' placeholder='Search...' style={{ bottom: '-25px' }} name='searchQuery' autoFocus/>
      </form>

      <div className='mt-20 px-4'>
        {searchQuery ? <FactsList searchQuery={searchQuery} /> : <RandomFact />}
      </div>
    </>
  )
}

export default Home
