const router                 = require("express").Router();
const { WishlistController } = require('../controllers');
const {authentication}       = require('../middlewares');

router.get('/', authentication, WishlistController.getAllWishC)
router.post('/:ProductId', authentication, WishlistController.addWishC)
router.delete('/:WishlistId', authentication, WishlistController.deleteWishC)

module.exports = router;