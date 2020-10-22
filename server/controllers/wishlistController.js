
 
const {User,Product,Cart,Wishlist} = require("../models")

class WishlistController
{ 
    static postWishlist(req,res,next){   
        let UserId = req.userData.id
        let ProductId =req.body.productId 
        console.log(req.body);
        Wishlist.findOne({where:{
            UserId,
            ProductId
        }})
            .then(cart=>{ 
                if(cart){   
                    res.status(200).json({msg:"already saved to wishlist"})
                }else{
                    return Wishlist.create({
                        UserId,ProductId
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

    static getWishlists (req,res,next) {
        Wishlist.findAll({where:{
            UserId:req.userData.id
            },
            include:[Product]
        })
            .then(carts=>{
                res.status(200).json(carts)
            })
            .catch(err=>{
                console.log(err);
                next(err)
            })
    } 

    static deleteWishlist (req, res, next) {
        let UserId = req.userData.id
        let ProductId =req.params.productId 
        Wishlist.findOne({where:{
            UserId,
            ProductId
        }})
            .then(wl=>{ 
                if(wl){
                    console.log(wl);
                    return Wishlist.destroy({where:{
                        UserId,
                        ProductId
                    }})
                }else{
                    return res.status(404).json({msg:"Wishlist not found"})
                }
            })
            .then(result=>{ 
                res.status(200).json({msg:"delete wishlist succeed"})
            })
            .catch(err=>{
                console.log(err);
                next(err)
            })
    }
}

module.exports = WishlistController
