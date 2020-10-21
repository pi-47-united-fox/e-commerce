const { User, Product, Cart } = require("../models/index")

class CartController {
    static addToCart(req, res, next) {
        let newProductToCart = {
            UserId: req.userData.id,
            ProductId: req.params.productId
        }
        Cart.create(newProductToCart)
            .then(data => {
                req.status(201).json(data)
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
                console.log(err)
            })

    }

    static findMyTransactionHistory(req, res, next) {
        Cart.findAll({
            where: {
                UserId: req.userData.id,
                status: 'paid'
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
                res.status(200).json(uniqueProduct)
            }
        })
        .catch(err => {
            console.log(err)
        })
    }

    static addProductToMyCart(req, res, next) {
        let newCart = {
            UserId: req.userData.id,
            ProductId: req.params.productId
        }
        Cart.create(newCart)
            .then(data => {
                res.status(201).json(data)
            })
            .catch(err => {
                console.log(err)
            })
    }

    static deleteProductFromMyCart(req, res, next) {
        let targetId = req.params.productId
        console.log(targetId)
        Cart.findOne({where: {ProductId: targetId}})
            .then(data => {
                return Cart.destroy({
                    where: {
                        ProductId: data.ProductId,
                        UserId: data.UserId,
                        status: data.status,
                        createdAt: data.createdAt,
                        updatedAt: data.updatedAt
                    }
                })
            })
            .then(data => {
                res.status(200).json({ message: "Product has been successfully removed from cart." })
            })
            .catch(err => {
                console.log(err)
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
                        id: {
                            $in: idCart
                        }
                    }
                })             
            })
            .then(data => {
                return Product.update({quantity: quantity-1}, {
                    where: {
                        id: {
                            $in: idProduct
                        }
                    }
                })
            })
            .catch(err => {
                console.log(err)
            })

    }

}

module.exports = CartController