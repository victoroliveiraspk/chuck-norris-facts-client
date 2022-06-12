import Fact from "../models/fact.model"

export default class FactService {
  getRandomFact(): Promise<Fact> {
    return fetch('https://api.chucknorris.io/jokes/random').then(response => response.json())
  }
}