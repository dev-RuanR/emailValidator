describe('Validação do e-mail', () => {
  beforeEach(()
=>{
  cy.visit('index.html')
})
  it('passes', () => {
    
    

    it('Deve mostrar o erro para o email invalido', () =>{

      cy.get('#email').type('ruanridley@hotmail.com');
      cy.get('#senha').type('1234');
      cy.get('button [type="submit"]').click()
    })

    it('Deve aceitar email com o dominio certo', () =>{

      cy.get('#email').type('ruanridley@gmail.com');
      cy.get('#senha').type('1234');
      cy.get('button [type="submit"]').click();
      cy.on('window:alert',(txt) =>{
        expect(txt).to.contains('login realizado com sucesso');
      })
    })



  })
})