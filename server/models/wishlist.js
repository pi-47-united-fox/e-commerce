"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
	class WishList extends Model {
		static associate(models) {
			WishList.belongsTo(models.User, {
				targetKey: "id",
				foreignKey: "UserId",
			});
			WishList.belongsTo(models.Product, {
				targetKey: "id",
				foreignKey: "ProductId",
			});
		}
	}
	WishList.init(
		{
			UserId: DataTypes.INTEGER,
			ProductId: DataTypes.INTEGER,
		},
		{
			sequelize,
			modelName: "WishList",
		},
	);
	return WishList;
};
