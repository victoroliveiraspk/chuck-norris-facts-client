import React from 'react'
import Layout from '../components/Layout'
import FactList from '../components/FactsList'
import { useRouter } from 'next/router'

const Search = () => {
  const router = useRouter()
  const query: string = router.query.query as string ?? ''

  return (
    <Layout>
      <FactList searchQuery={query} />
    </Layout>
  )
}

export default Search
