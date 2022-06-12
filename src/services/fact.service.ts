import Fact from "../models/fact.model"

interface SearchResponse {
  total: number
  result: Fact[]
}

export default class FactService {
  getRandomFact(): Promise<Fact> {
    return fetch('https://api.chucknorris.io/jokes/random').then(response => response.json())
  }

  searchFacts(query: string): Promise<Fact[]> {
    return fetch(`https://api.chucknorris.io/jokes/search?query=${query}`).then(response => response.json())
      .then((response: SearchResponse) => response.result ?? [])
  }
}