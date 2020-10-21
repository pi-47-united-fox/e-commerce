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
      Cart.belongsTo(models.User)
      Cart.belongsTo(model.Product)
    }
  };
  Cart.init({
    ProductId: {
      type: DataTypes.INTEGER,
    },
    UserId: {
      type: DataTypes.INTEGER
    },
    quantity: {
      type: DataTypes.INTEGER,
      validate: {
        isNumeric:{
          msg: "Please input number only."
        },
        min:{
          args: [0],
          msg: "Please input number greater than zero."
        }
      }
    },
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Cart',
  });
  Cart.beforeCreate((cart, opt) => {
    cart.status = 'pending'
  })
  return Cart;
};