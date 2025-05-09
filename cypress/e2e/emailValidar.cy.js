describe('Validação do e-mail', () => {
  beforeEach(() => {
    cy.visit('index.html');
  });

  it('Deve mostrar o erro para o email inválido', () => {
    cy.get('#email').type('ruanridley@hotmail.com');
    cy.get('#senha').type('1234');
    cy.get('button[type="submit"]').click();
    cy.get('#errorMsg').should('contain', 'Digite um e-mail valido com o dominio correto');
  });

  it('Deve aceitar email com o dominio correto', () => {
    cy.get('#email').type('ruanridley@gmail.com');
    cy.get('#senha').type('1234');
    cy.get('button[type="submit"]').click();
    cy.on('window:alert', (txt) => {
      expect(txt).to.contain('Login realizado com sucesso');
    });
  });
});
