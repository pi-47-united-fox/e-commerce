const { User, Cart, Product } = require("../models/index");

class CartController {
  static async postCart(req, res, next) {
    try {
      let productStock = await Product.findByPk(req.params.productId);
      if (productStock.stock < req.body.qty) {
        throw {
          name: "stock error",
          message: "stock limited !",
          statusCode: 400,
        };
      } else {
        let value = {
          UserId: req.userData.id,
          ProductId: req.params.productId,
          qty: req.body.qty,
          status: "undone",
        };
        let newStock = productStock.stock - req.body.qty;
        let cart = await Cart.create(value);
        res.status(201).json(cart);
        let updateStock = await Product.update(
          { stock: newStock },
          {
            where: { id: req.params.productId },
          }
        );
      }
    } catch (err) {
      next(err);
    }
  }
  static async getAllCart(req, res, next) {
    console.log(req.userData);
    try {
      let data = await Cart.findAll({
        where: { UserId: req.userData.id },
        include: [Product, User],
      });
      res.status(200).json(data);
    } catch (err) {
      next(err);
    }
  }
  static async putCart(req, res, next) {
    try {
      let productStock = await Product.findByPk(req.body.productId);
      if (productStock.stock < req.body.qty) {
        throw {
          name: "stock error",
          message: "stock limited !",
          statusCode: 400,
        };
      } else {
        let value = {
          qty: req.body.qty,
        };
        let newStock = productStock.stock - req.body.qty;
        let cart = await Cart.update(value, { where: { id: req.params.id } });
        if (cart[0] === 1) {
          res.status(201).json({ message: "update succes" });
        }
        let updateStock = await Product.update(
          { stock: newStock },
          {
            where: { id: req.body.productId },
          }
        );
      }
    } catch (err) {
      next(err);
    }
  }
  static async deleteCart(req, res, next) {
    try {
      let dataCart = await Cart.findByPk(req.params.id);
      let stockProduct = await Product.findByPk(req.body.productId);
      console.log(dataCart.qty);
      let newStock = stockProduct.stock + dataCart.qty;

      let value = {
        stock: newStock,
      };
      let updateProduct = await Product.update(value, {
        where: { id: req.body.productId },
      });
      let deleteCart = await Cart.destroy({ where: { id: req.params.id } });
      if (deleteCart === 1) {
        res.status(200).json({ message: "delete success" });
      }
    } catch (err) {
      next(err);
    }
  }
}

module.exports = {
  CartController,
};
