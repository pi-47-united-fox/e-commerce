"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Cart extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			Cart.belongsTo(models.User, {
				targetKey: "id",
				foreignKey: "UserId",
			});
			Cart.belongsTo(models.Product, {
				targetKey: "id",
				foreignKey: "ProductId",
			});
		}
	}
	Cart.init(
		{
			UserId: {
				type: DataTypes.INTEGER,
				allowNull: false,
				validate: {
					notNull: {
						msg: "User ID is Required",
					},
					min: {
						args: 1,
						msg: "User ID is one minimum",
					},
				},
			},
			ProductId: {
				type: DataTypes.INTEGER,
				allowNull: false,
				validate: {
					notNull: {
						msg: "Product ID is Required",
					},
					min: {
						args: 1,
						msg: "Product ID is one minimum",
					},
				},
			},
			quantity: {
				type: DataTypes.INTEGER,
				allowNull: false,
				validate: {
					notNull: {
						msg: "Quantity is Required",
					},
					min: {
						args: 1,
						msg: "Quantity is one minimum",
					},
				},
			},
			status: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					notNull: {
						msg: "Status is Required",
					},
					notEmpty: {
						msg: "Status is Required",
					},
					isIn: {
						args: [["processing", "finished"]],
						msg: "Status is only processing and finished",
					},
				},
			},
		},
		{
			sequelize,
			modelName: "Cart",
		},
	);
	return Cart;
};
