'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.addConstraint('Carts',{
      fields:['UserId'],
      type:'foreign key',
      name:'custom_fkey_constraint_UserId',
      references: { 
        table: 'Users',
        field: 'id'
      },
      onUpdate:'cascade',
      onDelete:'cascade'
    })
    await queryInterface.addConstraint('Carts',{
      fields:['ProductId'],
      type:'foreign key',
      name:'custom_fkey_constraint_ProductId',
      references: { 
        table: 'Products',
        field: 'id'
      },
      onUpdate:'cascade',
      onDelete:'cascade'
    })
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.removeConstraint('Carts','UserId',{})
    await queryInterface.removeConstraint('Carts','ProductId',{})

  }
};
