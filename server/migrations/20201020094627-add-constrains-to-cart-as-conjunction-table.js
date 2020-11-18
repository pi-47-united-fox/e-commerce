'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    return queryInterface.addConstraint('Carts', {
      fields: ['UserId'],
      type: 'foreign key',
      name: 'custom_fkey_constraint_userid',
      references: { //Required field
        table: 'Users',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    })
    .then(() => {
      queryInterface.addConstraint('Carts', {
        fields: ['ProductId'],
        type: 'foreign key',
        name: 'custom_fkey_constraint_productid',
        references: { //Required field
          table: 'Products',
          field: 'id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade'
      });
    })
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    return Promise.all(
      queryInterface.removeConstraint('Carts', 'custom_fkey_constraint_userid', {}),
      queryInterface.removeConstraint('Carts', 'custom_fkey_constraint_productid', {})
    )
  }
};
