const { Cart, Product, sequelize } = require('../models/index')

class CartController {
    static fetchCart(req, res, next){
        Cart.findAll({
            where:{
                UserId: req.userData.id,
                status: 'pending'
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
                UserId: obj.UserId,
                status: 'pending'
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

    static async checkOut(req, res, next) {
        const t = await sequelize.transaction()
        try {
            const checkout = await Cart.findAll({
                where: { 
                    status: 'pending',
                    UserId: +req.userData.id
                },
                include: [Product]
            })
            checkout.forEach(async (element) => {
                if (element.quantity > element.Product.stock) {
                    res.status(400).json({
                        message: `Maximum stocks of ${element.Product.stock} has been exceeded` })
                }
                else {
                    await Product.update({
                        stock: element.Product.stock - element.quantity
                    },{
                        where: { 
                            id: element.ProductId
                        } 
                    }, 
                    { 
                        transaction: t 
                    })
                }
            });
            const updateStatus = await Cart.update({ status: 'paid' }, { where: { status: 'pending', UserId: +req.userData.id } }, { transaction: t })
            if (updateStatus) {
                res.status(200).json({ message: 'Checkout completed' })
            }
            await t.commit()
        }
        catch (err) {
            next(err)
            await t.rollback()
        }
    }
}

module.exports = CartController