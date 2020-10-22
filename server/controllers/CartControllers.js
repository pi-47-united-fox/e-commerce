const { Cart,Product } = require('../models')
const { Op } = require('sequelize')




class CartController {
    static async getCartHandler(req,res,next){
        try {
            const cart = await Cart.findAll({
                where:{
                    UserId:req.userData.id,
                    quantity:{
                        [Op.gt]:0
                    },
                    status:'unpaid'
                },
                order:[['id','asc']],
                include:['Product']
            })

            return res.status(200).json({cart})
        } catch (error) {
            return next(error)
        }
    }


    static async addCartHandler(req,res,next){
        let newCart = {
            UserId:req.userData.id,
            ProductId:req.body.ProductId,
            status:'unpaid',
            quantity:1
        }
        try {
            const getCart = await Cart.findAll({
                where:{UserId:req.userData.id, ProductId:req.body.ProductId,status:'unpaid'},
                include:['Product']
            })

            const getProduct = await Product.findByPk(req.body.ProductId)

            if(getCart.length>0){
                if(getCart[0].Product.stock < getCart[0].quantity+1){
                    next({name:'stocklimited',message:'quantity cart melebihi stock',status:400})
                }else{
                    const addQuantity = await Cart.update({quantity:getCart[0].quantity+1},{
                        where:{UserId:req.userData.id,ProductId:req.body.ProductId,status:'unpaid'}
                    })
                    res.status(201).json({addQuantity})
                }
            }else{
                if(getProduct.stock > 0 ){
                    const addCart = await Cart.create(newCart)
                    res.status(201).json({addCart})
                }else{
                    next({name:'outstock',message:'bike out of stock',status:400})
                }
            }    

        } catch (error) {
            next(error)
        }
    }

    static async updateCartHandler(req,res,next){
        const cartId = req.params.CartId
        const { quantity } = req.body
        try {
            const getCart = await Cart.findByPk(cartId,{
                include:['Product']
            })

            if(quantity>0){
                if(getCart.Product.stock < getCart.quantity+1){
                    next({name:'stocklimited',message:'quantity cart melebihi stock',status:400})
                }else{
                    const addQuantity = await Cart.update({quantity:getCart.quantity+1},{
                        where:{id:cartId}
                    })
                    res.status(201).json({addQuantity})
                }
            }else{
                if(getCart.quantity-1 < 0 ){
                    next({name:'minuscart',message:'cart cannot be minus',status:400})
                }else{
                    const minusQuantity = await Cart.update({quantity:getCart.quantity-1},{
                        where:{id:cartId}
                    })
                    res.status(201).json({minusQuantity})
                }
            }

        } catch (error) {
            next(error)
        }
    }

    static async deleteCartHandler(req,res,next){
        const cartId = req.params.CartId
        try {
            const deleteCart = await Cart.destroy({where:{id:cartId}})
            res.status(200).json({deleteCart,message:'success delete'})
        } catch (error) {
            next(error)
        }
    }

}


module.exports = {
    CartController
}