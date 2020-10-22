'use strict';
const {
  Model
} = require('sequelize');
const {BcryptJs} = require('../helpers');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // User.belongsToMany(models.Product, { through: models.Cart })
      User.hasMany(models.Cart)
      User.hasMany(models.Wishlist)
    }
  };
  User.init({
    email: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    },
    role: DataTypes.STRING,
    isActive: DataTypes.BOOLEAN
  }, {
    hooks: {
      beforeCreate(instance) {
        // FOR PASSWORD
        instance.password = BcryptJs.makeHash(instance.password)
        instance.role = 'customer'
        // Satus
        instance.isActive = false
        instance.role = 'customer'
      }
    },
    sequelize,
    modelName: 'User',
  });
  return User;
};