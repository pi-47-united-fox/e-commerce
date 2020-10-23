'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    return queryInterface.addColumn("Carts", "ProductId", {
      type: Sequelize.INTEGER,
      references: {
        model: "Products",
        key: "id"
      },
      onUpdated: "CASCADE",
      onDeleted: "CASCADE"
    })
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    return queryInterface.removeColumn('Carts', 'ProductId', {})
  }
};
