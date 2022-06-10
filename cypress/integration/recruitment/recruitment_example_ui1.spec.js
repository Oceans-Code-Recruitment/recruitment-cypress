describe('ClickUp Sanity', () => {
    beforeEach(() => {
        // Ignore uncaught exceptions
        cy.on('uncaught:exception', (e, runnable) => {
            console.log('error', e)
            console.log('runnable', runnable)
            return false
        })
        // Log in
        const user = {
            'email': 'jose.ig.cabrera.b@gmail.com',
            'password': 'Testing123'
        }
        cy.visit('https://app.clickup.com/login')
        // cy.pause()
        cy.get('#login-email-input').click().type(user.email)
        cy.get('#login-password-input').click().type(user.password)

        cy.get('button[type="submit"]').click()
    })
    // Add an extra verification candidate task
    it('Verifies profile user name', () => {
        cy.get('.cu-avatar-container', {timeout: 15000}).click()
        // Assertion
        cy.get('[data-test="user-settings-menu"] [class*="column-title-name"]').should('contain', 'Jose Cabrera')
    })
    after(() => {
        //cy.get('.cu-avatar-container')
        cy.get('[data-test*="log-out"]').click()
    })
})
