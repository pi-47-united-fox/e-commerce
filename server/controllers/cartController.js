const { Cart, Product } = require('../models/index')

class CartController {
    static fetchCart(req, res, next){
        Cart.findAll({
            where:{
                UserId: req.userData.id
            },
            include: Product
        })
        .then(carts => {
            // console.log(carts)
            res.status(200).json(carts)
        })
        .catch(err => {
            res.status(500).json({message: err.message})
        })
    }

    static addCart(req, res, next){
        const obj = {
            UserId: +req.userData.id,
            ProductId: +req.params.productId,
            quantity: 1
        }
        Cart.create(obj)
            .then(data => {
                res.status(201).json({data})
            })
            .catch(err => {
                console.log(err)
                res.status(500).json({
                    message:err.message
                })
            })
    }

    static addCart2(req, res, next){
        const obj = {
            UserId: req.userData.id,
            ProductId: req.params.productId,
            quantity: 1
        }
        Cart.findOne({
            where: {
                ProductId: obj.ProductId,
                UserId: obj.UserId
            }
        })
        .then(result => {
            if(!result){
                return Cart.create(obj)
            }
            else{
                console.log(result)
                let updated = +result.quantity + 1
                let updObj = {
                    quantity: updated
                }
                return Cart.update(updObj,{
                    where: {
                        ProductId: obj.ProductId,
                        UserId: obj.UserId
                    }
                })
            }
        })
        .then(data => {
            if(typeof data === 'number'){
                res.status(200).json({
                    message: 'From add cart, your cart has been updated successfully'
                })
            }
            else{
                res.status(201).json({data})
            }
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({
                message:err.message
            })
        })
    }

    static fetchCartById(req, res, next){
        const id = req.params.id
        Cart.findByPk(id)
        .then(cart => {
            // console.log(carts)
            res.status(200).json(cart)
        })
        .catch(err => {
            res.status(500).json({message: err.message})
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