const {Wishlist} = require('../models');

function authorizationWishlist (req, res, next) {
    Wishlist.findByPk(req.params.WishlistId)
        .then((result) => {
            if (result.UserId === req.userData.id) {
                next()
            } else {
                res.status(401).json({
                    message: "unauthorized"
                })
            }
        }).catch((err) => {
            res.status(500).json({
                message: 'Internal server error!'
            })
        });
}

module.exports = authorizationWishlist