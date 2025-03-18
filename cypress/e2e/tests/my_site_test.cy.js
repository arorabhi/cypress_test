/// <reference types="cypress"/>

import { LandingPageElements } from "../../PageObjects/PageActions/LandingPageActions"

const Landing_Page_Elements = new LandingPageElements

describe('Inital Test', function(){

    it('Landing Page Test', function(){

        cy.visit('/test-site')
        Landing_Page_Elements.yourName('Test')
        Landing_Page_Elements.yourEmail('test@test.com')
        Landing_Page_Elements.yourMessage('Test Message')
        Landing_Page_Elements.preferredContactMethod()
        Landing_Page_Elements.sendButton()
    })
})