'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    const cart =
    [
      {
        category: "Goalkeeper",
        quantity: null,
        UserId: null,
        ProductId: null,
        status: 'unpaid',
        createdAt: new Date (),
        updatedAt: new Date()

      },
      {
        category: "Defender",
        quantity: null,
        UserId: null,
        ProductId: null,
        status: 'unpaid',
        createdAt: new Date (),
        updatedAt: new Date()

      },
      {
        category: "Middfielder",
        quantity: 1,
        UserId: null,
        ProductId: null,
        status: 'unpaid',
        createdAt: new Date (),
        updatedAt: new Date()

      },
      {
        category: "Forward",
        quantity: null,
        UserId: null,
        ProductId: null,
        status: 'unpaid',
        createdAt: new Date (),
        updatedAt: new Date()
      },
    ]
    await queryInterface.bulkInsert('Carts', cart, {});
  },

down: async (queryInterface, Sequelize) => {
  /**
   * Add commands to revert seed here.
   *
   * Example:
   * await queryInterface.bulkDelete('People', null, {});
   */
  await queryInterface.bulkDelete('Carts', null, {});
}
};
