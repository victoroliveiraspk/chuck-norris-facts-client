import type { NextPage } from 'next'
import Image from 'next/image'
import RandomFact from '../components/RandomFact'

const Home: NextPage = () => {
  return (
    <>
      <form className='flex flex-col items-center relative' style={{ backgroundColor: 'rgb(155,109,162)' }}>
        <Image src='/chuck-norris-push-up.gif' width={400} height={300}/>
        <p className='absolute text-white text-5xl text-center' style={{ top: '10%' }}>Chuck Norris facts</p>
        <input className='shadow appearance-none border rounded w-6/12 py-4 px-3 text-gray-700 focus:outline-none absolute' placeholder='Search...' style={{ bottom: '-25px' }}/>
      </form>

      {/* <div className='mt-24 px-5'>
        <p className='text-xs mb-5'>500 results for "car"</p>

        <div className='border p-4 text-center'>
          Chuck Norris is the only person who can punch you in the back of the face.
        </div>
        <div className='border p-4 text-center'>
          While playing Blackjack, Chuck Norris can bust without hitting. He just chooses not to because Chuck Norris never busts
        </div>
        <div className='border p-4 text-center'>
          Chuck Norris once fed a cannibal with a knuckle sandwich.
        </div>
        <div className='border p-4 text-center'>
          Martial arts have given Chuck Norris the ability to predict your actions before you make them. He can look at you and know if you're getting ready to run, pull a gun or get your heart torn out. Guess what: You're always getting ready to get your heart torn out.
        </div>
        <div className='border p-4 text-center'>
          Albert Einstein's hair used to be neatly combed...until the day he met Chuck Norris.
        </div>
        <div className='border p-4 text-center'>
          the Speaking Clock calls up Chuck Norris to make sure IT is correct
        </div>
        <div className='border p-4 text-center'>
          Chuck Norris doesn't need help, help needs Chuck Norris.
        </div>
      </div> */}

      {/* <div className='flex mt-32 justify-center'>
        <div className='loading'></div>
      </div> */}

      <div className='mt-24'>
        <RandomFact />
      </div>
    </>
  )
}

export default Home
