/// <reference types="cypress" />

describe("habit dashboard", () => {

beforeEach(()=>{
    cy.visit("/habits")

})

it("deve ir ate a lista mudar onde o botao é clicavel", ()=>{

    //cele pega o tipo e o texto escrito 
    cy.contains('button','Add').click();
    cy.contains("Add a new habit").should("be.visible")

})

it("deve escrever no alert",()=>{

    cy.get("#habit-add-btn").click();
    cy.get("input[placeholder='Habit']").type("Teste de mano caio pika")
    cy.contains('button','Save Changes').click();
    cy.contains("Teste de mano caio pika")
    .should("be.visible")
    .and("have.class","HabitCard__habit-container")

})

it("deve clicar no icone para mudar",()=>{
    cy.get("#habit-add-btn").click();
    cy.get("input[placeholder='Habit']").type("Teste de mano caio pika")
    cy.contains('button','Save Changes').click();
    cy.contains("Teste de mano caio pika").click();
    cy.get("[src='/static/media/check.9e8832df.svg']").should("be.visible")
   

})

it("deve clicar no close",()=>{
    cy.get("#habit-add-btn").click();
    cy.get("input[placeholder='Habit']").type("Teste de mano caio pika")
    cy.contains('button','Close').click();
    
 
   

})

})