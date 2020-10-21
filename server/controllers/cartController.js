const { Cart, Product } = require('../models/index  ')

class CartController {
    static fetchCart(req, res, next){
        Cart.findAll({include: Product})
        .then(carts => {
            console.log(carts)
            res.status(200).json(carts)
        })
        .catch(err => {
            res.status(500).json({message: err.message})
        })
    }

    static addCart(req, res, next){
        const obj = {
            UserId: req.userData.id,
            ProductId: req.params.productId
        }
        Cart.create(obj)
            .then(data => {
                res.status(201).json({data})
            })
            .catch(err => {
                res.status(500).json({
                    message:err.message
                })
            })
    }

    static updateCart(req, res, next){
        const obj = {
            quantity: req.body.quantity
        }
        Cart.update(obj, {
            where: {
                id: req.params.id
            }
        })
        .then(() => {
            res.status(200).json({
                message: 'Your cart has been updated successfully'
            })
        })
        .catch(err => {
            res.status(500).json({message: err.message})
        })
    }

    static deleteCart(req, res, next){
        Cart.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(() => {
            res.status(200).json({
                message: 'Your cart has been deleted successfully'
            })
        })
        .catch(err => {
            res.status(500).json({message: err.message})
        })
    }
}

module.exports = CartController