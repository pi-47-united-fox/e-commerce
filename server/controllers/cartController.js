 
const {User,Product,Cart, sequelize} = require("../models")

class CartController
{ 
    static postCart(req,res,next){   
        let UserId = req.userData.id
        let ProductId =req.body.productId
        let qtyInput = +req.body.qty || 1
        console.log(req.body);
        Cart.findOne({where:{
            UserId,
            ProductId,
            status:'unpaid'
        }})
            .then(cart=>{ 
                if(cart){ 
                    // res.status(201).json(cart)
                    let qty = cart.quantity + qtyInput
                    return cart.update({quantity:qty})
                }else{
                    return Cart.create({
                        UserId,ProductId,quantity:1,status:'unpaid'
                    })
                }
            })
            .then(result=>{
                console.log(result);
                res.status(201).json(result)
            })
            .catch(err=>{ 
                console.log(err);
                next(err)
            })  
    } 

    static getCarts (req,res,next) {
        Cart.findAll({where:{
                UserId:req.userData.id,
                status: 'unpaid'
            },
            include:[Product],
            order: [ 
                ['ProductId', 'ASC'],
            ],
        })
            .then(carts=>{
                res.status(200).json({carts,userEmail:req.userData.email})
            })
            .catch(err=>{
                console.log(err);
                next(err)
            })
    }

    static deleteCart (req, res, next) {
        let UserId = req.userData.id
        let ProductId =req.params.productId 
        Cart.findOne({where:{
            UserId,
            ProductId
        }})
            .then(cart=>{ 
                if(cart){
                    console.log(cart,"found >>>>>>>>");
                    return cart.destroy()
                }else{
                    return res.status(404).json({msg:"cart not found"})
                }
            })
            .then(result=>{ 
                res.status(200).json({msg:"delete Cart succeed"})
            })
            .catch(err=>{
                console.log(err);
                next(err)
            })
    }
    static async checkout (req,res,next) {
        let UserId = req.userData.id 
            const t = await sequelize.transaction(); 
            try {  
                const cart = await Cart.findAll({
                    where: {
                        UserId,
                        status: 'unpaid'
                    }
                }, { transaction: t });   

                for (const item of cart) {
                    // console.log("Cart >>",item); 
                    const product = await Product.findByPk(item.ProductId)
                    console.log(product.name, ">>", product.stock);
                    if(item.quantity > product.stock){
                        throw new Error();
                    }else{
                        let newStock = product.stock - item.quantity
                        await product.update({stock:newStock})
                        await item.update({status:'paid'})
                    }
                } 
                t.afterCommit(() => {
                    console.log("CHECKOUT <<<<<<<<<<<<<<<<<");
                    return res.status(200).json({msg:"Checkout Success"})
                });
                await t.commit();


            } catch (error) {

                // If the execution reaches this line, an error was thrown.
                // We rollback the transaction.
                await t.rollback();
                res.status(500).json(error)

            }
    }
 

}

module.exports = CartController
