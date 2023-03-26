describe('shared-ngrx-demos-shared', () => {
  beforeEach(() =>
    cy.visit('/iframe.html?id=usertablecomponent--primary&args=users;')
  );
  it('should render the component', () => {
    cy.get('ngrx-demos-users-table').should('exist');
  });
});
