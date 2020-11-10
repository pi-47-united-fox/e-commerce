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
      // define association here
      Cart.belongsTo(models.User);
      Cart.belongsTo(models.Product);
    }
  }
  Cart.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      ProductId: {
        type: DataTypes.INTEGER,
        validate: {
          notEmpty: {
            msg: "ProductId cant be",
          },
        },
      },
      UserId: {
        type: DataTypes.INTEGER,
        validate: {
          notEmpty: {
            msg: "UserId cant be empty",
          },
        },
      },
      quantity: DataTypes.INTEGER,
      status: {
        type: DataTypes.BOOLEAN,
        validate: {
          notEmpty: {
            msg: "Status cant be empty",
          },
        },
      },
    },
    {
      hooks: {
        beforeCreate(instance) {
          instance.status = true;
          instance.quantity = 1;
        },
      },
      sequelize,
      modelName: "Cart",
    }
  );
  return Cart;
};
