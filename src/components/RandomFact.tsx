import { useEffect, useState } from "react"

const getRandomFact = () => {
  return fetch('https://api.chucknorris.io/jokes/random').then(response => response.json())
}

const RandomFact = () => {
  const [fact, setFact] = useState()
  const [loading, setLoading] = useState(true)

  const updateRandomFact = () => {
    setLoading(true)
    getRandomFact()
      .then((response) => setFact(response.value))
      .finally(() => setLoading(false))
  }

  useEffect(() => {
    updateRandomFact()
  }, [])

  return (
    <div className='flex justify-center'>
      <div className='bg-gray-200 w-full p-2 h-52 flex flex-col justify-around items-center'>
       {loading && <div className='loading'></div>}
        
        {loading || (
          <>
            <span className='text-gray-500 text-3xl'>"</span>
            <p className='random-fact-text text-center'>{fact}</p>
            <div className='flex justify-center'>
              <button className='update-random-fact-btn text-xs p-2 text-white round rounded-xl' style={{ backgroundColor: 'rgb(155,109,162)' }} onClick={updateRandomFact}>
                Update random fact
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default RandomFact