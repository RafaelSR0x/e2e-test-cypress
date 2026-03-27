describe('Testar o formulário', () => {
    it('Logar com sucesso', () => {
        cy.visit('http://localhost:3000')

        cy.get('#email').type('4dt@gmail.com')
        cy.get('#password').type('4DT')

        cy.contains('button', 'Entrar').click()

        cy.contains('h4', 'Formulários').click()

        cy.get('#name').type('Rafael Santana Rosa')
        cy.get('#email').type('raffssantana007@gmail.com')
        cy.get('#phone').type('11988887777').should('have.value', '(11) 98888-7777')
        cy.get('#consultancyType').select('In Company')

        cy.contains('span', 'Pessoa Jurídica').click()
        cy.contains('span', 'Pessoa Física', { timeout: 10000 }).should('be.not.checked')
        cy.get('#document').type('99888777666655').should('have.value', '99.888.777/6666-55')

        const redes = [
            'Instagram',
            'LinkedIn',
            'Udemy',
            'YouTube',
            'Indicação de Amigo'
        ]

        redes.forEach((item) => {
         cy.contains('label', item).find('input').check().should('be.checked')   
        })

        // cy.contains('span', 'Udemy').click()
        // cy.contains('label', 'Instagram').find('input').check().should('be.checked')
        // cy.contains('span', 'LinkedIn', { timeout: 10000 }).should('be.not.checked')
        // cy.contains('span', 'YouTube', { timeout: 10000 }).should('be.not.checked')
        // cy.contains('span', 'Indicação de Amigo', { timeout: 10000 }).should('be.not.checked')

        cy.get('input[type="file"]').selectFile('./cypress/fixtures/header.png', {force: true})

        cy.get('#details').type('Necessito que dê certo')

        cy.get('#technologies').type('Saudade do Java {enter}').should('be.visible', 'Saudade do Java')

        cy.contains('label', 'Li e aceito os').find('input').check().should('be.checked')

        cy.contains('button', 'Enviar formulário',{timeout: 10000}).click()        
    })
})