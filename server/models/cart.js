'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Cart.belongsTo(models.User, {
        targetKey: "id",
        foreignKey: "UserId"
      })
      Cart.hasMany(models.Product, {
        sourceKey: "id",
        foreignKey: "CartId"
      })
    }
  };
  Cart.init({
    category: DataTypes.STRING,
    status: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
    UserId: DataTypes.INTEGER,
    ProductId: DataTypes.INTEGER
  }, {
    hooks: {
      beforeCreate(user) {
        user.status = 'unpaid'

      }
    },
    sequelize,
    modelName: 'Cart',
  });
  return Cart;
};