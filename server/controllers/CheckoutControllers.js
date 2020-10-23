const { Cart, Product } = require('../models')
const sequelize = require('../models').Sequelize


class CheckoutController {
    static async checkoutHandler(req,res,next){

        try {
            const dataCartUser = await Cart.findAll({
                where:{UserId:req.userData.id,status:'unpaid'},
                include:['Product']
            })
            dataCartUser.forEach(async (val) => {
                await Product.update({stock:val.Product.stock-val.quantity},{where:{id:val.ProductId}})
            });

            const updateCart = await Cart.update({status:'paid'},{where:{UserId:req.userData.id}})
            res.status(200).json({updateCart})

        } catch (error) {
            next(error)
        }

    }
}



module.exports = {
    CheckoutController
}