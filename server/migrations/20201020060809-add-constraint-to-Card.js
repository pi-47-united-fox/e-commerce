"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface
      .addConstraint("Carts", {
        fields: ["UserId"],
        type: "foreign key",
        name: "custom_fkey_constraint_userid",
        references: {
          //Required field
          table: "Users",
          field: "id",
        },
        onDelete: "cascade",
        onUpdate: "cascade",
      })
      .then(() => {
        return queryInterface.addConstraint("Carts", {
          fields: ["ProductId"],
          type: "foreign key",
          name: "custom_fkey_constraint_productid",
          references: {
            //Required field
            table: "Products",
            field: "id",
          },
          onDelete: "cascade",
          onUpdate: "cascade",
        });
      });
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeConstraint("Carts", "UserId", {}),
      queryInterface.removeConstraint("Carts", "ProductId", {}),
    ]);
  },
};
