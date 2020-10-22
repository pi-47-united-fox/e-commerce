const { Cart, Product } = require('../models')

class CartController {
    static getCart(req,res,next){
        Cart.findAll({
            where: {
                UserId: req.userData.id
            },
            attributes: {
                include: ['id']
            },
            include: ['Product'],
            order: [['id', 'ASC']]
        })
        .then(product => {
            res.status(200).json(product)
        })
        .catch(err => {
            next(err)
        })
    }
    static postCart(req,res,next){ 
        // console.log(req.userData.id, '---------ini nih--------');
        Cart.findOne({
            where: {
                UserId: +req.userData.id,
                ProductId: +req.params.id
            }
        })
        .then(cart => {
            if(cart) { 
                return Cart.increment('quantity', {
                    where: {
                        UserId: +req.userData.id,
                        ProductId: +req.params.id
                    }
                })
            } else {
                return Cart.create({
                    UserId: +req.userData.id,
                    ProductId: +req.params.id,
                    quantity: +req.body.quantity || 1
                })
            }
        })
        .then(data => {
            res.status(201).json(data)
        })
        .catch(err=>{
            // console.log(err)
            next(err)
        })
    }
    static patchCart (req,res,next){
        const patchCart = {
            quantity: req.body.quantity
        }
        Cart.update(patchCart, {
            where: {
                id: +req.params.id
            }
        })
        .then(data => {
            if(data[0] === 1){
                res.status(201).json({message: 'Edit Cart Successfully'})
            } else {
                res.status(404).json({message: 'Invalid Cart'})
            }
        })
        .catch(err => {
            next(err)
        })
    }
    static deleteCart(req,res,next){
        Cart.destroy({
            where: {
                id: +req.params.id
            }
        })
        .then(data => {
            if(data === 1){
                res.status(200).json({message: 'Product Cart Deleted'})
            } else {
                res.status(404).json({message: 'Invalid Cart'})
            }
        })
        .catch(err => {
            next(err)
        })
    }
}

module.exports = CartController