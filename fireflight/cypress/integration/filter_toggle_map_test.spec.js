describe('tests the address search and toggle', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  //refactor the geocoder in PublicMap to use the magnifiying glass to setState when you hit enter to actually search without drop down
  it('searches for an address', () => {
    cy.visit('/')
    cy.get('.map-form-container').type('10250 Santa Monica Blvd, Century City, California 90067, United States')
      .wait(1000)
      .trigger('mousedown')
      .click()
    cy.get('.fas.fa-search')
      .click()
  })

  it('can toggle the AQ filter on', () => {
    cy.visit('/')
    cy.get('.fa.fa-chevron-circle-down')
      .click()
    cy.get('.jss183.MuiSwitch-input')
    cy.get('[type="checkbox"]').check()
  })
})

// cy.visit('/')
// cy.get('.new-todo').type('write tests{enter}')
// cy.contains('.todo-list li', 'write tests')
//   .find('.toggle').check()

// cy.contains('.todo-list li', 'write tests')
//   .should('have.class', 'completed')