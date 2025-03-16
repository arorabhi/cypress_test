const landingPageLocators = require('../PageElements/LandingPageElements.json')
export class LandingPageElements{

    yourName(name){
        cy.get(landingPageLocators.LandingPageLocators.name).type(name)
        return
    }

    yourEmail(email){
        cy.get(landingPageLocators.LandingPageLocators.email).type(email)
        return
    }

    yourMessage(message){
        cy.get(landingPageLocators.LandingPageLocators.message).type(message)
        return
    }

    preferredContactMethod(){
        cy.get(landingPageLocators.LandingPageLocators.emailContact).check()
    }

    sendButton(){
        cy.get(landingPageLocators.LandingPageLocators.button).click()
    }
}