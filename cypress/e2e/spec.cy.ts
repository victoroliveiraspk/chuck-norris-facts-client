
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
})