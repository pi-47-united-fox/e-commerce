const router = require('express').Router()
const WishListController = require('../controllers/wishController')
const { wishlistAuthorization, customerOnlyAuthorization } = require('../middlewares/userAuth')

router.get('/wishlists', customerOnlyAuthorization, WishListController.fetchWishlist)
router.post('/wishlists/:productId', customerOnlyAuthorization, WishListController.addWishlist)
router.delete('/wishlists/:id', wishlistAuthorization, WishListController.deleteWishlist)


module.exports = router