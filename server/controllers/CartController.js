const {Cart} = require('../models')

class UserController {
    static getAllCartC (req, res, next) {
        Cart.findAll({
            where: {
                UserId: res.userData.id
            },
            include: ['Product']
        }).then((result) => {
            res.status(200).json(result)
        }).catch((err) => {
            next(err)
        });
    }

    static addCartC (req, res, next) {
        Cart.findOne ({
            where: {
                ProductId: req.params.ProductId
            }
        }).then (cart => {
            if (cart) {
                Cart.increase({
                    where: {
                        id
                    }
                })
            } else {
                return Cart.create({
                    UserId: req.userData.id,
                    ProductId: req.params.ProductId,
                    quantity: req.body.quantity
                })
            }
        }).then((newCart) => {
            res.status(201).json(newCart)
        }).catch((err) => {
            next(err)
        });
    }

    static updateCartC (req, res, next) {
        Cart.update({
            quantity: req.body.quantity
        }, {
            where: {
                id: req.params.CartId
            }
        }).then((result) => {
            res.status(200).json(result)
        }).catch((err) => {
            next(err)
        });
    }

    static deleteCartC (req, res, next) {
        Cart.destroy({
            where: {
                id: req.params.CartId
            }
        }).then((result) => {
            req.status(200).json({
                message: 'Success Deleted'
            })
        }).catch((err) => {
            next(err)
        });
    }

}

module.exports = UserController