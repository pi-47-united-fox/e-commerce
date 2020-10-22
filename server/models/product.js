'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Product.hasMany(models.Cart,{
        sourceKey:'id',
        foreignKey:'ProductId'
      })
    }
  };
  Product.init({
    name: {
      type:DataTypes.STRING,
      validate:{
        notEmpty:{
          msg:'name cannot be empty'
        }
      }
    },
    image_url: {
      type:DataTypes.STRING,
      validate:{
        notEmpty:{
          msg:'image_url cannot be empty'
        }
      }
    },
    price: {
      type: DataTypes.INTEGER,
      validate:{
        notEmpty:{
          msg:'price cannot be empty'
        },
        min:{
          args:1,
          msg:'price must be greater than 1'
        }
      }
    },
    stock: {
      type:DataTypes.INTEGER,
      validate:{
        notEmpty:{
          msg:'stock cannot be empty'
        },
        customMinimumStock(value){
          if(value < 0){
            throw new Error('stock cannot be lesser than 0')
          }
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};