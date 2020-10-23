'use strict';
const bcrypt = require("bcryptjs")
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.belongsToMany(models.Product, {through: models.Cart})
      User.belongsToMany(models.Product, {through: models.Wishlist})
    }
  };
  User.init({
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        argv:true,
        msg:"email is already in use"
      },
      validate: { 
        notEmpty: {
          args: true,
          msg: "Email cannot be empty"
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { 
        notEmpty: {
          args: true,
          msg: "Password cannot be empty"
        },
        len: {
            args: [6,32],
            msg: "Minimum length of password is 6"
       }
      }
    },
    role: {
      type: DataTypes.STRING,
      allowNull:false,
      defaultValue: 'customer'
    }
  }, {
    hooks:{
      beforeCreate: (user, options) => {
        user.password = bcrypt.hashSync(user.password, 10)
        user.role = 'customer'
      }
    },
    sequelize,
    modelName: 'User',
  });
  return User;
};