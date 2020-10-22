const {Wishlist} = require('../models');

class WishlistController {
    static getAllWishC (req, res, next) {
        Wishlist.findAll({
            where: {
                UserId: req.userData.id
            },
            include: ['Product']
        }).then((result) => {
            console.log(result)
            res.status(200).json(result)
        }).catch((err) => {
            next(err)
        });
    }

    static addWishC (req, res, next) {

        Wishlist.findOne({
            where: {
                ProductId: req.params.ProductId,
                UserId: req.userData.id
            }
        }).then((result) => {
            console.log('dari wishlist >>>>', result)
            if (result) {
                return 'created'
            } else {
                return Wishlist.create({
                    UserId: req.userData.id,
                    ProductId: req.params.ProductId
                })
            }
        }).then((result) => {
            if (result === 'created') {
                res.status(400).json({
                    message: 'product already in wishlist'
                })
            } else {
                res.status(201).json({
                    message: 'added to wishlist'
                })
            }
        }).catch((err) => {
            // console.log('dari wishlist add >>>>', err)
            next(err)
        });
    }

    static deleteWishC (req, res, next) {
        Wishlist.destroy({
            where: {
                id: req.params.WishlistId
            }
        }).then((result) => {
            res.status(200).json({
                id: req.params.WishlistId,
                message: 'Wishlist - success deleted'
            })
        }).catch((err) => {
            next(err)
        });
    }
}

module.exports = WishlistController