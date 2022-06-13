import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Layout from '../components/Layout'
import FactList from '../components/FactsList'
import FactService from '../services/fact.service'
import Fact from '../models/fact.model'

const Search = () => {
  const router = useRouter()
  const query: string = router.query.query as string ?? ''
  const [facts, setFacts] = useState<Fact[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [errorMessage, setErrorMessage] = useState<string>('')

  useEffect(() => {
    setLoading(true)
    setErrorMessage('')

    const factService = new FactService()
    factService.searchFacts(query).then((facts) => {
      setFacts(facts)
    }).catch((error) => {
      setErrorMessage(error.message)
    }).finally(() => setLoading(false))
  }, [query])

  return (
    <Layout loading={loading}>
      {
        errorMessage ?
          (<p className='text-center text-red-500'>{errorMessage}</p>)
          : <FactList facts={facts} searchQuery={query} />
      }
    </Layout>
  )
}

export default Search
