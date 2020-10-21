const {Cart, Product} = require('../models')

class UserController {
    static getAllCartC (req, res, next) {
        // console.log('getAllCarts - masuk', req.userData)
        Cart.findAll({
            where: {
                UserId: req.userData.id
            },
            include: ['Product']
        }).then((result) => {
            console.log('findAll - carts', result)
            return res.status(200).json(result)
        }).catch((err) => {
            console.log('findAll - err', err)
            return next(err)
        });
    }

    static addCartC (req, res, next) {
        Cart.findOne ({
            where: {
                ProductId: req.params.ProductId,
                UserId: req.userData.id
            }
        }).then (cart => {
            if (cart) {
                console.log('addCart - cart sudah ada:', cart)
                return Cart.increment('quantity', { 
                    where: { 
                        ProductId: req.params.ProductId, 
                        UserId: req.userData.id 
                    }
                });
            } else {
                console.log('addCart - cart belum ada:', cart)
                return Cart.create({
                    UserId: req.userData.id,
                    ProductId: req.params.ProductId,
                    quantity: req.body.quantity || 1
                })
            }
        }).then((newCart) => {
            console.log('addCart, terakhir selesai:', newCart[0][0][0])
            res.status(201).json(newCart[0][0][0])
        }).catch((err) => {
            console.log('masuk errro', err)
            next(err)
        });
    }
    
    static updateCartC (req, res, next) {
        console.log ('dari update', req.body.quantity, req.params.CartId)
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

    static decrementC (req, res, next) {
        Cart.decrement('quantity', { 
            where: { 
                ProductId: req.params.ProductId, 
                UserId: req.userData.id
            }
        }).then((result) => {
            res.status(200).json(result)
        }).catch((err) => {
            next(err)
        });
    }

    static incrementC (req, res, next) {
        Cart.increment('quantity', { 
            where: { 
                ProductId: req.params.ProductId, 
                UserId: req.userData.id 
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
            console.log('sussek delete kok', result)
            res.status(200).json({
                message: 'Success Deleted'
            })
        }).catch((err) => {
            console.log('dari delete: ', err)
            next(err)
        });
    }

}

module.exports = UserController