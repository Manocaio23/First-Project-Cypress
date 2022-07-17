/// <reference types="cypress" />



describe("Accomplishment Dasboard", ()=> {

    beforeEach (() =>{
        cy.visit("/accomplishments")
      
    })

    it("Deve mostrar mensagem de erro ao clicar no botão sem preencher informações", ()=>{

        cy.contains("Submit Accomplishment").click();
        cy.contains("Complete the items above to continue")
    })

    it("Deve preencher tex 1 e text area e clica no botão e dar mensagem de erro", ()=>{

        cy.get("[data-cy='accomplishment-title-input']").type("colocando informação");
        cy.get("[data-cy='accomplishment-input']").type("colocando informação no text area");


        cy.contains("Submit Accomplishment").click();
        //validação assertiva
        cy.contains("Complete the items above to continue").should("be.visible");
    })

    it("Deve preencher todas as informações com sucesso", ()=>{

        cy.get("[data-cy='accomplishment-title-input']").type("colocando informação");
        cy.get("[data-cy='accomplishment-input']").type("colocando informação no text area");
        cy.get("[data-cy='accomplishment-checkbox']").click();
        cy.contains("Submit Accomplishment").click();
        cy.contains("This Accomplisment was Successfully Submitted").should("be.visible");


    })

    
    it("Deve preencher todas as informações com sucesso e voltar para pagina de inicio", ()=>{

        cy.get("[data-cy='accomplishment-title-input']").type("colocando informação");
        cy.get("[data-cy='accomplishment-input']").type("colocando informação no text area");
        cy.get("[data-cy='accomplishment-checkbox']").click();
        cy.contains("Submit Accomplishment").click();
        cy.contains("This Accomplisment was Successfully Submitted").should("be.visible");
        cy.contains("Go Back").click();
        cy.contains("h2","Accomplishment").should("be.visible");


    })
    it("Deve preencher todas as informações com sucesso e voltar para pagina de inicio e validar os valores vazios", ()=>{

        cy.get("[data-cy='accomplishment-title-input']").type("colocando informação");
        cy.get("[data-cy='accomplishment-input']").type("colocando informação no text area");
        cy.get("[data-cy='accomplishment-checkbox']").click();
        cy.contains("Submit Accomplishment").click();
        cy.contains("This Accomplisment was Successfully Submitted").should("be.visible");
        cy.contains("Go Back").click();
        cy.contains("h2","Accomplishment").should("be.visible");
        //validando campo vazio 
        cy.get("[data-cy='accomplishment-title-input']").should("have.value","")
        cy.get("[data-cy='accomplishment-input']").should("have.value","")
        cy.get("[data-cy='accomplishment-checkbox']").should("not.be.checked")

    })



})