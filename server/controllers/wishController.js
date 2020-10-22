const { Wishlist, Product } = require('../models/index')

class WishListController {
    static fetchWishlist(req, res, next){
        Wishlist.findAll({
            where:{
                UserId: req.userData.id
            },
            include: Product
        })
        .then(wishlists => {
            res.status(200).json(wishlists)
        })
        .catch(err => {
            res.status(500).json({message: err.message})
        })
    }

    static addWishlist(req, res, next){
        const obj = {
            UserId: req.userData.id,
            ProductId: req.params.productId,
        }
        Wishlist.findOne({
            where: {
                ProductId: obj.ProductId,
                UserId: obj.UserId
            }
        })
        .then(result => {
            if(!result){
                return Wishlist.create(obj)
            }
            else{
                res.status(200).json({result})
            }
        })
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

    static deleteWishlist(req, res, next){
        Wishlist.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(() => {
            res.status(200).json({
                message: 'Your Wishlist has been deleted successfully'
            })
        })
        .catch(err => {
            res.status(500).json({message: err.message})
        })
    }
}

module.exports = WishListController