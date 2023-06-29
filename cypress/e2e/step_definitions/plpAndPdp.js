import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import { plpAndPdp } from '../../support/pages/pom'

const baseUrl = Cypress.env('baseUrl')
const urlPlp = Cypress.env('endpoint').inventory
const numProductToAdd = 3
const firstIndex = 0
var arrayNames

context('SwagLabs | PLP PDP | Remover productos del SCP desde el PLP y PDP', () => {

    Given('User visit www.saucedemo.com', () => {
        cy.visit(baseUrl)
    })
    When('User login enters username as {string}, password as {string} and clicks on button login', (username, password) => {
        cy.typeLogin(username, password) //commands
    })
    When('User added one or more products to the SCP', () => {
        plpAndPdp.addProduct(numProductToAdd).then(arrayNamesReturs => { arrayNames = arrayNamesReturs })
    })
    Then('User confirm the products added in icon SCP', () => {
        plpAndPdp.element.linkCartIcon().should('contain', numProductToAdd)
    })
    
    describe('TC1: Validate remove one product of the SCP from PLP.', () => {

        let quantityToRemove = 1
        Given('User is in Product list page', () => {
            cy.url().should('contain', urlPlp)
        })
        When('User clicks on button remove of the PLP of one previously selected product', () => {
            plpAndPdp.removeProductPlp(quantityToRemove, arrayNames).then(newArrayNames => {
                plpAndPdp.element.linkCartIcon().click()
                for (var name of newArrayNames.slice(firstIndex, quantityToRemove)) {
                    plpAndPdp.element.getNameProduct().should('not.contain', name)
                }
            })
        })
        Then('Should one product removed of the PLP', () => {
            plpAndPdp.element.linkCartIcon().should('contain', numProductToAdd - quantityToRemove)
        })
        
    })

    describe('TC2: Validate remove more than one product of the SCP from PLP.', () => {

        let quantityToRemove = 2
        Given('User is in product List page', () => {
            cy.url().should('contain', urlPlp)
        })
        When('User clicks on button remove of the PLP of more than one previously selected product', () => {
            plpAndPdp.removeProductPlp(quantityToRemove, arrayNames).then(newArrayNames => {
                plpAndPdp.element.linkCartIcon().click()
                for (var name of newArrayNames.slice(firstIndex, quantityToRemove)) {
                    plpAndPdp.element.getNameProduct().should('not.contain', name)
                }
            })
        })
        Then('Should more than one product removed of the PLP', () => {
            plpAndPdp.element.linkCartIcon().should('contain', numProductToAdd - quantityToRemove)
        })
        
    })

    describe('TC3: Validate remove one product of the SCP from PDP.', () => {

        let quantityToRemove = 1
        When('User clicks on button remove of the PDP of one previously selected product', () => {
            plpAndPdp.removeProductPdp(quantityToRemove, arrayNames).then(newArrayNames => {
                plpAndPdp.element.linkCartIcon().click()
                for (var name of newArrayNames.slice(firstIndex, quantityToRemove)) {
                    plpAndPdp.element.getNameProduct().should('not.contain', name)
                }
            })
        })
        Then('Should one product removed of the PDP', () => {
            plpAndPdp.element.linkCartIcon().should('contain', numProductToAdd - quantityToRemove)
        })
        
    })

    describe('TC4: Validate remove more than one product of the SCP from PDP.', () => {

        let quantityToRemove = 2
        When('User clicks on button remove of the PDP more than one previously selected product', () => {
            plpAndPdp.removeProductPdp(quantityToRemove, arrayNames).then(newArrayNames => {
                plpAndPdp.element.linkCartIcon().click()
                for (var name of newArrayNames.slice(firstIndex, quantityToRemove)) {
                    plpAndPdp.element.getNameProduct().should('not.contain', name)
                }
            })
        })
        Then('Should more than one product removed of the PDP', () => {
            plpAndPdp.element.linkCartIcon().should('contain', numProductToAdd - quantityToRemove)
        })
        
    })

    describe('TC5: Validate remove all products of the SCP from PLP.', () => {

        let quantityToRemove = numProductToAdd
        Given('User is in Product list Page', () => {
            cy.url().should('contain', urlPlp)
        })
        When('User clicks on button remove of the PLP of all previously selected products', () => {
            plpAndPdp.removeProductPlp(quantityToRemove, arrayNames).then(newArrayNames => {
                plpAndPdp.element.linkCartIcon().click()
                for (var name of newArrayNames.slice(firstIndex, quantityToRemove)) {
                    plpAndPdp.element.getNameProdct().should('not.contain', name)
                }
            })
        })
        Then('Should all products removed of the PLP', () => {
            plpAndPdp.element.linkCartIcon().should('contain', '')
        })
        
    })

    describe('TC6: Validate remove all products of the SCP from PDP.', () => {

        let quantityToRemove = numProductToAdd
        When('User clicks on button remove of the PDP of all previously selected products', () => {
            plpAndPdp.removeProductPdp(quantityToRemove, arrayNames).then(newArrayNames => {
                plpAndPdp.element.linkCartIcon().click()
                for (var name of newArrayNames.slice(firstIndex, quantityToRemove)) {
                    plpAndPdp.element.getNameProdct().should('not.contain', name)
                }
            })
        })
        Then('Should all products removed of the PDP', () => {
            plpAndPdp.element.linkCartIcon().should('contain', '')
        })
        
    })
    
})