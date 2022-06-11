import type { NextPage } from 'next'
import Image from 'next/image'
import RandomFact from '../components/RandomFact'
import FactsList from '../components/FactsList'

const Home: NextPage = () => {
  const facts = [
    'Chuck Norris is the only person who can punch you in the back of the face.',
    'While playing Blackjack, Chuck Norris can bust without hitting. He just chooses not to because Chuck Norris never busts',
    'Chuck Norris once fed a cannibal with a knuckle sandwich.',
    'Martial arts have given Chuck Norris the ability to predict your actions before you make them. He can look at you and know if you\'re getting ready to run, pull a gun or get your heart torn out. Guess what: You\'re always getting ready to get your heart torn out.',
    'Albert Einstein\'s hair used to be neatly combed...until the day he met Chuck Norris.',
    'the Speaking Clock calls up Chuck Norris to make sure IT is correct',
    'Chuck Norris doesn\'t need help, help needs Chuck Norris.',
  ]

  return (
    <>
      <form className='flex flex-col items-center relative' style={{ backgroundColor: 'rgb(155,109,162)' }}>
        <Image src='/chuck-norris-push-up.gif' width={400} height={300}/>
        <p className='absolute text-white text-5xl text-center' style={{ top: '10%' }}>Chuck Norris facts</p>
        <input className='shadow appearance-none border rounded w-6/12 py-4 px-3 text-gray-700 focus:outline-none absolute' placeholder='Search...' style={{ bottom: '-25px' }}/>
      </form>

      <div className='mt-20 px-4'>
        {/* <RandomFact /> */}
        <FactsList facts={facts} searchQuery='car' />
      </div>
    </>
  )
}

export default Home
