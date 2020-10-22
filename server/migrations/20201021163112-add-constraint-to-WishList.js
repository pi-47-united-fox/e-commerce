"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.addConstraint("WishLists", {
			fields: ["UserId"],
			type: "foreign key",
			name: "Fkey_Users_WishLists",
			references: {
				table: "Users",
				field: "id",
			},
		});
		await queryInterface.addConstraint("WishLists", {
			fields: ["ProductId"],
			type: "foreign key",
			name: "Fkey_Products_WishLists",
			references: {
				table: "Products",
				field: "id",
			},
		});
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.removeConstraint("WishLists", "Fkey_Users_WishLists", {});
		await queryInterface.removeConstraint("WishLists", "Fkey_Products_WishLists", {});
	},
};
