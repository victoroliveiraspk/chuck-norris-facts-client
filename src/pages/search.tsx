import React, { useEffect, useState } from 'react'
import { GetStaticProps } from 'next'
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

  useEffect(() => {
    setLoading(true)
    const factService = new FactService()
    factService.searchFacts(query).then((facts) => {
      setFacts(facts)
    }).finally(() => setLoading(false))
  }, [query])

  return (
    <Layout loading={loading}>
      <FactList facts={facts} searchQuery={query} />
    </Layout>
  )
}

export default Search
