describe('My First Test', function() {
    // beforeEach(function() {
    //     // reset and seed the database prior to every test
    //     cy.exec('npm start');
    // });
    it('Usuario Login', function() {
        cy.visit('/');
        cy.contains('Crud').click();
        cy.get('[href="/crud/edit/1"] > .anticon').click();
        cy.contains('Crud').click();
        cy.contains('Agregar').click();
        cy.get(
            ':nth-child(1) > .ant-col-10 > .ant-form-item-control > .ant-form-item-children > .ant-input',
        )
            .type('123')
            .should('have.value', '123');
        cy.get(
            ':nth-child(2) > .ant-col-10 > .ant-form-item-control > .ant-form-item-children > .ant-input',
        )
            .type('soy brayan lp')
            .should('have.value', 'soy brayan lp');
        cy.get(
            ':nth-child(3) > .ant-col-10 > .ant-form-item-control > .ant-form-item-children > .ant-input',
        )
            .type('soy el nuevo mensaje')
            .should('have.value', 'soy el nuevo mensaje');
        cy.contains('Guardar').click();
        // cy.contains('Iniciar sesión').click({ force: true });
        // cy.get('input')
        //     .type('fake@email.com')
        //     .should('have.value', 'fake@email.com');
    });
});
