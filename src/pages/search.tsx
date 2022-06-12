import React from 'react'
import Layout from '../components/Layout'
import FactList from '../components/FactsList'
import { useRouter } from 'next/router'

const Search = () => {
  const router = useRouter()
  const search: string = router.query.search as string ?? ''

  return (
    <Layout>
      <FactList searchQuery={search} />
    </Layout>
  )
}

export default Search
