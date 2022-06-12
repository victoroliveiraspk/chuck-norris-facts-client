
describe('home page', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('show first random fact', () => {
    cy.get('.random-fact-text').should('not.be.empty')
  })

  it('update random fact', () => {
    cy.get('.update-random-fact-btn').click().then(() => {
      cy.wait(1000)
      cy.get('.random-fact-text').should('not.be.empty')
    })
  })

  it('redirect to search page', () => {
    const query = 'test'
    cy.get('.search-input').type(`${query}{enter}`)
    cy.url().should('contain', `search?query=${query}`)
  })
})

describe('search page', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('with results', () => {
    cy.get('.search-input').type(`cars{enter}`)
    cy.wait(1000)
    cy.get('.fact-list').find('.fact-item').should('have.length.gte', 1)
  })

  it('without results', () => {
    cy.get('.search-input').type('djlkasjdlas{enter}')
    cy.wait(1000)
    cy.get('.fact-list').find('.fact-item').should('have.length', 0)
  })

  it('query with less than 3 characters', () => {
    cy.get('.search-input').type('ca{enter}')
    cy.wait(1000)
    cy.get('.fact-list').find('.fact-item').should('have.length', 0)
  })
})