describe('Wildfire Watch Home Page (Demo mode)', () => {
  it('loaded the staging URL', () => {
    cy.visit('/')
  })

  it('loads the login modal upon clicking "sign in"', () => {
    cy.get('.menu-item')
      .contains('Sign In')
      .click()

    cy.get('.model-wrapper').should('have.css', 'opacity', '1')
    cy.get('.form-heading').should('have.text', 'Welcome Back')
  })

  it('Switches to register modal from login', () => {
    cy.get('.create-an-account')
      .contains('Sign up Here')
      .click()
    cy.get('.register-page-container').should('be.visible')
    cy.get('.form-heading').should('have.text', 'Create an Account')
  })

  it('Switches to login modal from register', () => {
    cy.get('.register-page-container').should('be.visible')
    cy.get('.create-an-account')
      .contains('Sign In Here')
      .click()
    cy.get('.login-page-container').should('be.visible')
    cy.get('.register-page-container').should('not.exist')
    cy.get('.form-heading').should('have.text', 'Welcome Back')
  })

  it('switches to password reset modal from login', () => {
    cy.get('.forgot-pw').click()
    cy.get('.password-reset-container').should('be.visible')
    cy.get('.form-heading').should('have.text', 'Password Reset')
  })

  it('Switches to register modal from password reset', () => {
    cy.get('.password-reset-container').should('be.visible')
    cy.get('.create-an-account')
      .contains('Sign up Here')
      .click()
    cy.get('.register-page-container').should('be.visible')
    cy.get('.password-reset-container').should('not.exist')
    cy.get('.form-heading').should('have.text', 'Create an Account')
  })

  it('Closes modal when "X" is clicked', () => {
    cy.get('.model-wrapper').should('have.css', 'opacity', '1')
    cy.get('.form-close-btn').click()
    cy.get('.model-wrapper').should('have.css', 'opacity', '0')
  })

  it('Register modal appears when "Sign Up" button on map is clicked', () => {
    cy.get('.signup-btn')
      .wait(500)
      .click()

    cy.get('.model-wrapper').should('have.css', 'opacity', '1')
    cy.get('.register-page-container').should('be.visible')
    cy.get('.form-heading').should('have.text', 'Create an Account')
  })

  it('Closes modal when clicked outside of modal', () => {
    cy.get('body')
      .wait(1500)
      .click('left')
  })

  it('Map legend toggles when "Map Legend" is clicked', () => {
    cy.get('.legend-title').wait(1000).click()
    cy.get('.legend-item').should('not.be.visible')

    cy.get('.legend-title')
      .wait(1000)
      .click()
    cy.get('.legend-item').should('be.visible')
  })
})
