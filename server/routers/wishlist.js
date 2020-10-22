const router                 = require("express").Router();
const { WishlistController } = require('../controllers');
const {authentication, authorizationWishlist}       = require('../middlewares');

router.get('/', authentication, WishlistController.getAllWishC)
router.post('/:ProductId', authentication, WishlistController.addWishC)
router.delete('/:WishlistId', authentication, authorizationWishlist, WishlistController.deleteWishC)

module.exports = router;