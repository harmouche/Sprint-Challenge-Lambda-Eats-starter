describe("Testing the pizza routes and form", function() {
    beforeEach(function() {
      cy.visit("http://localhost:3000/");
    });
    it("Add test to inputs and submit form", function() {
      cy
      .get('button[name="orderbutton"]')
      .click()
      cy
      .get('input[name="name"]')
      .type("Hamza")
      .should("have.value", "Hamza")
      cy
      .get('textarea[name="specInstr"]')
      .type("add extra cheese")
      .should("have.value", "add extra cheese")
      cy
      .get('select[name="size"]')
      .select('XL')
      .should("have.value", "XL")
      cy
      .get('[type=checkbox]')
      .check()
      .should("be.checked")
      cy
      .get('button[name="submit"]')
      .click()
    });
    
    it("No toppings no instructions", function() {
        cy
        .get('button[name="orderbutton"]')
        .click()
        cy
        .get('button[name="homebutton"]')
        .click()
        cy
        .get('button[name="orderbutton"]')
        .click()
        cy
        .get('input[name="name"]')
        .type("John")
        .should("have.value", "John")
        cy
        .get('select[name="size"]')
        .select('Lg')
        .should("have.value", "Lg")
        cy
        .get('button[name="submit"]')
        .click()
        
      });
  });