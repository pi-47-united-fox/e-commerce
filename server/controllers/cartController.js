'use strict'
const { Product, User, Cart } = require('../models/index')

class CartController {
    static addCart(req, res, next) {
        let productId = +req.params.productId
        Product.findByPk(productId)
            .then(data => {
                return Cart.findOne({
                    where: {
                        category: data.category
                    }
                })
            })
            .then(data => {
                return Product.update({
                    CartId: data.id
                }, {
                    where: {
                        id: productId
                    },
                    returning: true
                })
            })
            .then(data => {
                return Cart.update({
                    UserId: req.userData.id,
                }, {
                    where: {
                        id: data[1][0].CartId
                    },
                    returning: true
                })
            })
            .then(data => {
                res.status(200).json(data)

            })
            .catch(err => {
                let productId = +req.params.productId
                return Product.findByPk(productId)
                    .then(data => {
                        const newCart =
                        {
                            category: data.category,
                            quantity: 0,
                            UserId: req.userData.id,
                            ProductId: null
                        }
                        return Cart.create(newCart)
                            .then(data => {
                                return Cart.findOne({
                                    where: {
                                        category: data.category
                                    }
                                })
                            })
                    })
                    .then(data => {
                        return Product.update({
                            CartId: data.id
                        }, {
                            where: {
                                id: productId
                            },
                            returning: true
                        })
                    })
                    .then(data => {
                        return Cart.update({
                            UserId: req.userData.id,
                        }, {
                            where: {
                                id: data[1][0].CartId
                            },
                            returning: true
                        })
                    })
                    .then(data => {
                        res.status(200).json(data)
                    })
                    .catch(err => {
                        next(err)
                    })
            })
    }
    static showCarts(req, res, next) {
        Cart.findAll({ include: [Product] })
            .then(data => {
                let newData = []
                data.forEach(el => {
                    el.quantity = el.Products.length
                    if (el.quantity !== 0) {
                        newData.push(el)
                    }
                    return newData
                })
                res.status(200).json(newData)
            })
            .catch(err => {
                next(err)
            })

    }
    static deleteCart(req, res, next) {
        const id = +req.params.id
        Cart.findByPk(id, { include: [Product] })
            .then(data => {
                console.log(data)
                return Cart.destroy({ where: { id: id } })
            })
            .then(data => {
                res.status(200).json({ msg: 'Cart has been deleted' })
            })
            .catch(err => {
                next(err)
            })

    }
    static updateCart(req, res, next) {
        const id = +req.params.id
        console.log(id)
        const updateCart = {
            status: req.body.status
        }
        Cart.update(updateCart, {
            where: {
                id: id
            },
            returning: true,
        })
            .then(data => {
                console.log(data)
                res.status(200).json(data[1][0])
            })
            .catch(err => {
                next(err)
            })

    }
    static deleteCartDetail(req, res, next) {
        const id = req.params.id
        console.log(id)
        Product.update({ CartId: null },
            {
                where: {
                    id: id
                },
                returning: true,
            })
            .then(data => {
                console.log(data)
                res.status(200).json(data[1][0])
            })
            .catch(err => {
                next(err)
            })
    }
   

}

module.exports = CartController