import { useEffect, useState } from "react"

interface Props {
  searchQuery: string
}

const searchFacts = (query: string) => {
  return fetch(`https://api.chucknorris.io/jokes/search?query=${query}`).then(response => response.json())
}

const FactsList = ({ searchQuery }: Props) => {
  const [loading, setLoading] = useState(false)
  const [facts, setFacts] = useState([])

  const updateList = () => {
    if(searchQuery.length < 3) {
      return setFacts([])
    }
    
    setLoading(true)
    searchFacts(searchQuery).then((response) => {
      setFacts(
        response.result.map((fact: any) => fact.value)
      )
    }).finally(() => setLoading(false))
  }

  useEffect(() => {
    updateList()
  }, [searchQuery])

  return (
    <div className='flex flex-col justify-around items-center'>
      {
        loading ? (<div className='loading'></div>)
        : (<>
            <div className='w-full'>
              <p className='text-xs mb-5'>{facts.length} results for "{searchQuery}"</p>
            </div>
            {loading || facts.map((fact, index) => (
              <div className='border p-4 w-full' key={index}>
                {fact}
              </div>
            ))}
        </>)
      }
    </div>
  )
}

export default FactsList