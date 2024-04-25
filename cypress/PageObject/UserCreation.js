export class UserCreation{
constructor(){
    this.inputindicative="#countryExtension"
    this.inputphone="#phone"
    this.inputproject="#project"
    this.imputacceptPrivacy="#acceptPrivacy"
    this.registerbutton=".register-button"
}
visit(){
    cy.visit('https://plataforma-transforma.com/login')
    cy.get('.register-link > a').click()
}
create(phone, indicative, project) {
    cy.get(this.inputphone).type(phone)
    cy.get(this.inputindicative).select(indicative)
    cy.get(this.inputproject).select(project)
    cy.get(this.imputacceptPrivacy).click()
    cy.get(this.registerbutton).click()
}
}

export const userCreation=new UserCreation()