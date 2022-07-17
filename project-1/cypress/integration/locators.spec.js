/// <reference types="cypress" />
//teste

describe("Localizadores",()=>{
    beforeEach (() =>{
        cy.visit("/elements")
      
    })

    it("Localizando elements com with get", ()=>{
        // ver quantos elementos tem os tag name
        cy.get("button")
        cy.get("h3")

        //pegar todos os elementos de class namoe
        cy.get(".btn-with-class")

        //pegar todos os elementos especificos da classes
        cy.get("[class='Elements-btn btn-with-class more-btn-classes']")
        cy.get("[class='Elements-btn btn-with-class']")

        //pegando elemento pelo ID
        cy.get("[id='btn-with-id']") //ou
        cy.get("#btn-with-id") 

        //pegando elementos pela specifico atributo Tipo botao
        cy.get("[type='submit']")

        // pegar elementos com tag name e class 
        cy.get("button.Elements-btn")

        //Pegar todos o elementos com tag  e id

        cy.get("button.Elements-btn#btn-with-id")

        //pegar elemento com tag e atributo ou tipo

        cy.get("button.Elements-btn[type='submit']")

        //get elementos epecificos data test id

        cy.get("[data-cy='btn-id-1']")
        cy.getByTestId("btn-id-1")

    })

    it("Localizando elementos com contains",()=>{

        //pegando elemento do texto
        cy.contains("Unique Text")

        //pegando elemento text
        cy.contains("Not Unique Text")

        //With selector
        cy.contains("[type='submit']", "Not Unique Text")

        //combinando com o get 
        cy.get("[type='submit']").contains("Not Unique Text")

        cy.contains("form","Not Unique Text")


    })

    it("Localizando elementos com o Find",() =>{
        cy.get("#form-1").find(".btn-1")
        cy.get("#form-1").find(".btn-2")
    }


    
    
    )
})