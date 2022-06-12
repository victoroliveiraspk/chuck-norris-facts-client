import type { GetStaticProps } from 'next'
import React, { useState } from 'react'
import Layout from '../components/Layout'
import RandomFact from '../components/RandomFact'
import FactService from '../services/fact.service'
import Fact from '../models/fact.model'

interface Props {
  initialRandomFact: Fact
}

const getRandomFact = () => {
  const factService = new FactService()
  return factService.getRandomFact()
}

export const getStaticProps: GetStaticProps<Props> = async () => {  
  return getRandomFact().then((initialRandomFact: Fact) => {
    return {
      props: { initialRandomFact }
    }
  })
}

const Home = ({ initialRandomFact }: Props) => {
  const [randomFact, setRandomFact] = useState<Fact>(initialRandomFact)
  const [loading, setLoading] = useState(false)

  const updateRandomFact = () => {
    setLoading(true)
    getRandomFact().then((randomFact: Fact) => {
      setRandomFact(randomFact)
    }).finally(() => setLoading(false))
  }

  return (
    <Layout loading={loading}>
      <RandomFact fact={randomFact} onClickUpdate={updateRandomFact} />
    </Layout>
  )
}

export default Home
