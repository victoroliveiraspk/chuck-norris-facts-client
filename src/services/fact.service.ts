import Fact from "../models/fact.model"
import { randomFactQuery } from '../queries/random-fact.query'

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
    return fetch(`https://api.chucknorris.io/jokes/search?query=${query}`).then(response => response.json())
      .then((response: SearchResponse) => response.result ?? [])
  }
}