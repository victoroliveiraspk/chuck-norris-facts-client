import Fact from "../models/fact.model"
import { randomFactQuery } from '../queries/random-fact.query'
import { searchFactsQuery } from '../queries/search-facts.query'

interface SearchResponse {
  total: number
  result: Fact[]
}

export default class FactService {
  getRandomFact(): Promise<Fact> {
    return fetch('http://localhost:3333/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ query: randomFactQuery })
    }).then((response) => response.json())
      .then((response) => response.data.random)
  }

  searchFacts(query: string): Promise<Fact[]> {
    return fetch('http://localhost:3333/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ query: searchFactsQuery, variables: { query } })
    }).then((response) => response.json())
      .then((response) => response.data.searchFacts)
      .then((response: SearchResponse) => response.result ?? [])
  }
}