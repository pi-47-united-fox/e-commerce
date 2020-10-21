const e = require("express");
const { Cart, User, Product } = require("../models");
class CartControllers {
  static getAllCart(req, res, next) {
    Cart.findAll({
      where: {
        UserId: req.userData.id,
      },
      include: {
        model: Product,
      },
    })
      .then((data) => {
        return res.status(200).json(data);
      })
      .catch((err) => {
        console.log(err);
        next(err);
      });
  }

  // Kan pas add ke cart kamu masukin productId
  // Jadi nanti di cart nya kamu find dulu
  // Apakah udah ada productid dengan userdata.id yang lagi login
  // Kalau udah ada makan cart nya diupdate quantity nya aja
  // Kalau belum ada baru cartnya di create

  static addToCart(req, res, next) {
    const inputAdd = {
      ProductId: req.params.id,
      UserId: req.userData.id,
    };
    Cart.findOne({
      where: {
        ProductId: req.params.id,
        UserId: req.userData.id,
      },
    })
      .then((data) => {
        if (data) {
          console.log(data.id, "inii");
          return Cart.increment({ quantity: 1 }, { where: { id: data.id } });
        } else {
          return Cart.create(inputAdd);
        }
      })
      .then((data) => {
        return Product.decrement(
          { stock: 1 },
          { where: { id: req.params.id } }
        );
      })
      .then((data) => {
        return res.status(201).json(data);
      })
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  }

  static updateQuantity(req, res, next) {
    const updateData = {
      quantity: +req.body.quantity,
    };
    Cart.update(updateData, {
      where: {
        id: +req.params.id,
      },
    })
      .then((data) => {
        console.log(data);
        return res.status(200).json(data);
      })
      .catch((err) => {
        console.log(err);
        // return res.status(500).json(err);
        next(err);
      });
  }

  static removeFromCart(req, res, next) {
    Cart.destroy({
      where: {
        id: +req.params.id,
      },
      returning: true,
    })
      .then((data) => {
        console.log(+req.params.ProductId, "ini product id");
        console.log(data, "ini");
        return Product.increment(
          { stock: req.body.quantity },
          { where: { id: +req.params.ProductId } }
        );
      })
      .then((data) => {
        return res.status(200).json(data);
      })
      .catch((err) => {
        console.log(err);
        next(err);
      });
  }
}

module.exports = CartControllers;
