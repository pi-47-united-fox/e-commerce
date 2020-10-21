"use strict";
const { Model } = require("sequelize");
const bcryptjs = require("bcryptjs");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.belongsToMany(models.Product, {
        through: models.Cart,
        foreignKey: "UserId",
      });
      User.hasMany(models.Cart);
    }
  }
  User.init(
    {
      name: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            msg: "name can't be empty",
          },
        },
      },
      email: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            msg: "email can't be empty",
          },
        },
      },
      password: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            msg: "password can't be empty",
          },
        },
      },
      role: DataTypes.STRING,
    },
    {
      hooks: {
        beforeCreate: (user, opt) => {
          let salt = bcryptjs.genSaltSync(10);
          let hast = bcryptjs.hashSync(user.password, salt);
          user.password = hast;
        },
      },
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
