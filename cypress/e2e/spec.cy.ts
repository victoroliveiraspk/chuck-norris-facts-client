
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
    cy.get('.search-input').type(`teste{enter}`)
    cy.wait(1000)
    cy.get('.fact-list').find('.fact-item').should('have.length.gte', 1)
  })

  it('without results', () => {
    cy.get('.search-input').type('testeste{enter}')
    cy.wait(1000)
    cy.get('.error-message-text').should('contain', 'No facts found.')
  })

  it('query with less than 3 characters', () => {
    cy.get('.search-input').type('te{enter}')
    cy.wait(1000)
    cy.get('.error-message-text').should('contain', 'Search must be at least 2 characters.')
  })
})