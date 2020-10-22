const { User, Product, Cart } = require("../models/index")


class CartController {
    static addToCart(req, res, next) {
        let result = {}
        let newProductToCart = {
            UserId: req.userData.id,
            ProductId: +req.params.productId
        }
        Cart.create(newProductToCart)
            .then(data => {
                result = data
                console.log(data, "lin 13")
                return Product.findOne({where: {id: +req.params.productId}})
            })
            .then(product => {
                return Product.update({stock: product.stock-1}, {
                    where: {
                        id: product.id
                    }
                })
            })
            .then(data => {
                console.log(data)
                res.status(201).json(result)
            })
            .catch(err => {
                console.log(err)
            })

    }

    static findMyCart(req, res, next) {
        Cart.findAll({
                where: {
                    UserId: req.userData.id,
                    status: 'unpaid'
                },
                include: [Product]
                
            })
            .then(data => {
                if(!data) {
                    res.status(200).json([])
                } else {
                    let ids = []
                    let uniqueProduct = []
                    for(let i = 0; i < data.length; i++) {
                        if(!ids.some(el => el === data[i].ProductId)) {
                            ids.push(data[i].ProductId)
                            uniqueProduct.push(data[i])
                        } else {
                            uniqueProduct.map(el => {
                                if(el.ProductId === data[i].ProductId) {
                                    el.quantity ++
                                }
                                return el
                            })
                        }
                    }
                    // console.log(ids)
                    // console.log(uniqueProduct)
                    res.status(200).json(uniqueProduct)
                }
            })
            .catch(err => {
                next(err)
            })

    }

    static findMyTransactionHistory(req, res, next) {
        Cart.findAll({
            where: {
                UserId: req.userData.id,
                status: 'paid'
            },
            order: [['updatedAt', 'DESC']],
            include: [Product]
        })
        .then(data => {
            if(!data) {
                res.status(200).json([])
            } else {
                res.status(200).json(data)
            }
        })
        .catch(err => {
            next(err)
        })
    }

    static addProductToMyCart(req, res, next) {
        let newCart = {
            UserId: req.userData.id,
            ProductId: +req.params.productId
        }
        Cart.create(newCart)
            .then(data => {
                res.status(201).json(data)
            })
            .catch(err => {
                next(err)
            })
    }

    static deleteProductFromMyCart(req, res, next) {
        let targetId = +req.params.productId
        Cart.findOne({where: {ProductId: targetId, status: 'unpaid'}})
            .then(data => {
                return Cart.destroy({
                    where: {
                        id: data.id
                    }
                })
            })
            .then(data => {
                return Product.findOne({where: {id: targetId}})
            })
            .then(product => {
                return Product.update({stock: product.stock+1}, {
                    where: {
                        id: product.id
                    }
                })
            })
            .then(data => {
                res.status(200).json({ message: "Product has been successfully removed from cart." })
            })
            .catch(err => {
                next(err)
            })
    }

    static checkoutCart(req, res, next) {
        let idCart = []
        let idProduct = []
        Cart.findAll({where: {UserId: req.userData.id, status: 'unpaid'}})
            .then(data => {
                data.map(el => {
                    idCart.push(el.id)
                    idProduct.push(el.ProductId)
                    return el
                })
                return Cart.update({status: 'paid'}, {
                    where: {
                          id: idCart
                    }
                })             
            })
            .then(data => {
                // return Product.update({quantity: quantity-1}, {
                //     where: {
                //         id: {
                //             $in: idProduct
                //         }
                //     }
                // })
                res.status(200).json({ message: "Checkout success." })
            })
            .catch(err => {
                next(err)
            })

    }

    static addToWishList(req, res, next) {
        let newProductToCart = {
            UserId: req.userData.id,
            ProductId: +req.params.productId
        }
        Cart.create(newProductToCart)
            .then(data => {
                return Cart.update({status: 'wishlist'}, {
                    where: {
                        id: data.id
                    }
                })
            })
            .then(data => {
                res.status(200).json({
                    message: "Wish you luck!"
                })
            })
            .catch(err => {
                next(err)
            })
    }

    static moveWishlistToCart(req, res, next) {
        Cart.update({status: 'unpaid'}, {
            where: {
                id: +req.params.cartId,
                UserId: req.userData.id,
                status: 'wishlist'
            }         
        })
            .then(data => {
                console.log(data)
                res.status(200).json({
                    message: "Congratulations, your wish come true."
                })
            })
            .catch(err => {
                next(err)
            })
    }

    static findAllMyWishlist(req, res, next) {
        Cart.findAll({
            where: {
                UserId: req.userData.id,
                status: 'wishlist'
            },
            include: [Product]
            
        })
        .then(data => {
            if(!data) {
                res.status(200).json([])
            } else {
                let ids = []
                let uniqueProduct = []
                for(let i = 0; i < data.length; i++) {
                    if(!ids.some(el => el === data[i].ProductId)) {
                        ids.push(data[i].ProductId)
                        uniqueProduct.push(data[i])
                    } 
                }
                res.status(200).json(uniqueProduct)
            }
        })
        .catch(err => {
            next(err)
        })
    }

}

module.exports = CartController