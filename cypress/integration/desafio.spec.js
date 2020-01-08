/// <reference types="cypress"/>

describe('Work with basic elements', ()=> {
    before(()=>{
        cy.visit('https://wcaquino.me/cypress/componentes.html')
    })
    beforeEach(()=>{
        cy.reload()
    })

    it('Desafio Nenhum Dado', () => {
        cy.get('#formCadastrar').click()

            cy.on('window:alert', msg=>{
            console.log(msg)
            expect(msg).to.be.equal('Nome eh obrigatorio')
            })
            
    })

    it('Desafio só com Nome', () => {
        cy.get('#formNome').type('Fernanda')
        cy.get('#formCadastrar').click()

            cy.on('window:alert', msg=>{
            console.log(msg)
            expect(msg).to.be.equal('Sobrenome eh obrigatorio')
            })
            
    })

    it('Desafio só com nome e sobrenome', () => {
        cy.get('#formNome').type('Fernanda')
        cy.get('[data-cy=dataSobrenome]').type('André')
        cy.get('#formCadastrar').click()

            cy.on('window:alert', msg=>{
            console.log(msg)
            expect(msg).to.be.equal('Sexo eh obrigatorio')
            })
            
    })

    it('Desafio com gênero', () => {
        cy.get('#formNome').type('Fernanda')
        cy.get('[data-cy=dataSobrenome]').type('André')
        
        cy.get('#formSexoFem').click()
        cy.get('#formCadastrar').click()
        cy.get('#resultado> :nth-child(1)').should('contain','Cadastrado!')
      
        


    
            
    })

        
 
})