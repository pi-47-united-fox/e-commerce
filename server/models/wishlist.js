'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Wishlist extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Wishlist.belongsTo(models.User, {targetKey: 'id'})
      Wishlist.belongsTo(models.Product, {targetKey: 'id'})
    }
  };
  Wishlist.init({
    UserId: DataTypes.INTEGER,
    ProductId: DataTypes.INTEGER,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Wishlist',
  });
  Wishlist.beforeCreate((wishlist, opt) => {
    wishlist.status = 'wishing'
  })
  return Wishlist;
};