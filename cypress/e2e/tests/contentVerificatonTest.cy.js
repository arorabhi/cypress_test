describe('Portfolio Website - About Me Section Tests', () => {
    beforeEach(() => {
      // Visit the page before each test in this describe block
      cy.visit('/test-site'); // Replace 'index.html' with your file's path if needed
    });
  
    it('TC_004: About Me Content Verification', () => {
      cy.get('#about h2').should('have.text', 'About Me');
      cy.get('#about p').should(
        'contain.text',
        'I am a results-driven Test Automation Engineer'
      );
    });
  });