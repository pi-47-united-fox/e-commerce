const { Wishlist, Product, User } = require("../models");

class WishlistControllers {
  static getAll(req, res, next) {
    Wishlist.findAll({
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
  static addToWishlist(req, res, next) {
    const input = {
      ProductId: +req.params.id,
      UserId: +req.userData.id,
    };
    Wishlist.create(input)
      .then((data) => {
        return res.status(201).json(data);
      })
      .catch((err) => {
        next(err);
      });
  }

  static deleteWishlist(req, res, next) {
    Wishlist.destroy({
      where: {
        id: req.params.id,
      },
    })
      .then((data) => {
        return res.status(200).json(data);
      })
      .catch((err) => {
        next(err);
      });
  }
}

module.exports = WishlistControllers;
