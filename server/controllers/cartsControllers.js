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

  //   static async addToCart(req, res, next) {
  //     try {
  //       let checkCardUser = await Cart.findAll({
  //         where: { ProductId: req.params.id, UserId: req.userData.id },
  //       });
  //       console.log(checkCardUser, ">>>> check user");
  //       if (checkCardUser.length === 0) {
  //         console.log("masih kosong nih");
  //         let dataProduct = await Product.findByPk(req.params.id);
  //         console.log(dataProduct, "data dari model produk");
  //         if (dataProduct.stock < req.boy.quantity) {
  //           throw {
  //             name: "limited stock",
  //             message: "stok habis",
  //             statusCode: 400,
  //           };
  //         } else {
  //           let input = {
  //             ProductId: req.params.id,
  //             UserId: req.userData.id,
  //             quantity: req.body.quantity,
  //             status: false,
  //           };
  //           let newStock = dataProduct.stock - req.body.quantity;
  //           let createCart = await Cart.create(input);
  //           res.status(201).json(createCart);
  //           let updateStock = await Product.update(
  //             { stock: newStock },
  //             { where: { id: req.params.id } }
  //           );
  //         }
  //       } else {
  //         res.send("ok");
  //       }
  //     } catch {
  //       next();
  //     }
  //   }

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
