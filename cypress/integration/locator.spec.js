/// <reference types="cypress"/>

describe('Work with Locators', ()=> {

before(()=>{
    cy.visit('https://wcaquino.me/cypress/componentes.html')
})
beforeEach(()=>{
    cy.reload()
})

it('Using xpath',()=>{
    cy.xpath('//input')
})

})
