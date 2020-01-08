/// <reference types="cypress"/>

import loc from'../../support/locators'

describe('Testes funcionais seu barriga', ()=> {
    before(()=>{
        cy.visit('http://barrigareact.wcaquino.me/')
        cy.get(loc.LOGIN.USER).type('fer@gmail.com')
        cy.get(loc.LOGIN.PASSWORD).type('123')
        cy.get(loc.LOGIN.BTN_LOGIN).click()
        cy.get('.toast-message').should('contain', 'Bem vindo')
    })
    beforeEach(()=>{
        cy.get(loc.MENU.SETTINGS).click()
        cy.get(loc.MENU.RESET).click()
    })
    it('Deve inserir uma conta', ()=>{
        cy.get(loc.MENU.SETTINGS).click()
        cy.get(loc.MENU.CONTAS).click()
        cy.get(loc.CONTAS.NOME).type('Conta para inserir')
        cy.get(loc.CONTAS.BTN_SALVAR).click()
        cy.get(loc.MESSAGE).should('contain', 'Conta inserida com sucesso')
    })

    it('Deve alterar uma conta', ()=>{
        cy.get(loc.MENU.SETTINGS).click()
        cy.get(loc.MENU.CONTAS).click()
        cy.get(loc.CONTAS.EDITAR).click()
        cy.get(loc.CONTAS.NOME).type('1')
        cy.get(loc.CONTAS.BTN_SALVAR).click()
        cy.get(loc.MESSAGE).should('contain', 'Conta atualizada com sucesso')
    })

    it('Deve inserir uma conta com o mesmo nome', ()=>{
        cy.get(loc.MENU.SETTINGS).click()
        cy.get(loc.MENU.CONTAS).click()
        cy.get(loc.CONTAS.NOME).type('Conta mesmo nome')
        cy.get(loc.CONTAS.BTN_SALVAR).click()
        cy.get(loc.MESSAGE).should('contain', 'Erro: Error')
    })

})