describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io');
    cy.findByRole('button', { name: 'Commands' }).should('be.visible');
  })
})