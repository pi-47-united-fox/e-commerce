const {Cart, Product} = require('../models')

class CartController {
    static getAllCartC (req, res, next) {
        // console.log('getAllCarts - masuk', req.userData)
        Cart.findAll({
            where: {
                UserId: req.userData.id
            },
            include: ['Product']
        }).then((result) => {
            // console.log('findAll - carts', result)
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
                UserId: req.userData.id,
                status: 'waiting'
            }
        }).then (cart => {
            if (cart) {
                console.log('addCart - cart sudah ada:', cart)
                return Cart.increment('quantity', { 
                    where: { 
                        ProductId: req.params.ProductId, 
                        UserId: req.userData.id 
                    },
                    plain: true
                })
            } else {
                console.log('addCart - cart belum ada:', cart)
                return Cart.create({
                    UserId: req.userData.id,
                    ProductId: req.params.ProductId,
                    quantity: req.body.quantity || 1
                })
            }
        }).then((newCart) => {
            // console.log(newCart)
            if (Array.isArray(newCart)) {
                newCart = newCart[0][0]
            }
            console.log('addCart, terakhir selesai:', newCart)
            res.status(201).json(newCart)
        }).catch((err) => {
            console.log('masuk errro', err)
            next(err)
        });
    }
    
    static updateCartC (req, res, next) {
        console.log('masulk update cart')
        Product.findByPk(req.body.ProductId)
        .then((result) => {
            if (result.stock < req.body.quantity || req.body.quantity < 0) {
                console.log ('masuk sini s -----------------')
                return res.status(403).json({
                    message: 'tidak bisa melebihi stock'
                })
            } else {
                return Cart.update({
                    quantity: req.body.quantity
                }, {
                    where: {
                        id: req.params.CartId
                    }
                })
            }
        }).then((result) => {
            console.log('berhasi stock', result)
            res.status(200).json(result)
        }).catch((err) => {
            console.log('masuk error stock')
            next(err)
        });
        
    }

    // static decrementC (req, res, next) {
    //     Cart.decrement('quantity', { 
    //         where: { 
    //             ProductId: req.params.ProductId, 
    //             UserId: req.userData.id
    //         }
    //     }).then((result) => {
    //         res.status(200).json(result)
    //     }).catch((err) => {
    //         next(err)
    //     });
    // }

    // static incrementC (req, res, next) {
    //     Cart.increment('quantity', { 
    //         where: { 
    //             ProductId: req.params.ProductId, 
    //             UserId: req.userData.id 
    //         }
    //     }).then((result) => {
    //         res.status(200).json(result)
    //     }).catch((err) => {
    //         next(err)
    //     });
    // }

    static async checkoutC (req, res, next) {
        try {
            let cartsToCheckout = await Cart.findAll({
                where: {
                    UserId: req.userData.id,
                    status: 'waiting'
                }
            })
            cartsToCheckout.forEach (async e => {
                try {
                    await Product.decrement('stock',{
                        by: e.quantity,
                        where: {
                            id: e.ProductId
                        }
                    })
                } catch (err) {
                    console.log('dari loop decrement ke', e.id , err)
                    next(err)
                }
            })

            await Cart.update({
                status: 'unpaid'
            }, {
                where: {
                    status: 'waiting',
                    UserId: req.userData.id
                }
            }).then((result) => {
                return res.status(200).json({
                    message: 'checkeout finished'
                })
            }).catch((err) => {
                console.log('dari update statys', err)
            });
        } catch (err) {
            console.log('dari checkout', err)
            next(err)
        }
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

module.exports = CartController