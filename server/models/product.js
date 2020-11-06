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
            Product.hasMany(models.Cart)
        }
    };
    Product.init({
        name: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: {
                    msg: 'Name cannot be empty'
                }
            }
        },
        image_url: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: {
                    msg: 'Image url cannot be empty'
                }
            }
        },
        price: {
            type: DataTypes.INTEGER,
            validate: {
                notEmpty: {
                    msg: 'Price cannot be empty'
                },
                min: {
                    args: 1,
                    msg: 'Price value must be greater than 0'
                }
            }
        },
        stock: {
            type: DataTypes.INTEGER,
            validate: {
                notEmpty: {
                    msg: 'Stock cannot be empty'
                },
                min: {
                    args: 1,
                    msg: 'Stock value must be greater than 0'
                }
            }
        },
        category: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: {
                    msg: 'Category cannot be empty'
                }
            }
        },
    }, {
        sequelize,
        modelName: 'Product',
    });
    return Product;
};