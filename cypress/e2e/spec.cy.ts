
describe('home page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })
  
  it('show first random fact', () => {
    cy.get('.random-fact-text').should('not.be.empty')
  })

  it('update random fact', () => {
    cy.get('.update-random-fact-btn').click().then(() => {
      cy.get('.random-fact-text').should('not.be.empty')
    })
  })

  it('search with results', () => {
    cy.get('.search-input').type('cars{enter}')
    cy.get('.fact-list').find('.fact-item').should('have.length.gte', 1)
  })

  it('search with results', () => {
    cy.get('.search-input').type('cars{enter}')
    cy.get('.fact-list').find('.fact-item').should('have.length.gte', 1)
  })

  it('search without results', () => {
    cy.get('.search-input').type('djlkasjdlas{enter}')
    cy.get('.fact-list').find('.fact-item').should('have.length', 0)
  })

  it('search with less than 3 characters', () => {
    cy.get('.search-input').type('ca{enter}')
    cy.get('.fact-list').find('.fact-item').should('have.length', 0)
  })
})