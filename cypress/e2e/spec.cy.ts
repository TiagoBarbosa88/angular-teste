describe('My First Test', () => {
  it('Visits the initial project page', () => {
    cy.visit('/')
    cy.contains('app is running')
  })

  it('submit form and check post card', () => {
    cy.visit('/')

    // submit post form 
    cy.get('input[name="title"]').type('Post title');
    cy.get('textarea[name="body"]').type('Post body');
  })
})
