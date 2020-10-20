const router                          = require("express").Router();
const { CartController }              = require('../controllers');
const {authentication} = require('../middlewares');

router.get('/', authentication, CartController.getAllCartC)
router.post('/:ProductId', authentication, CartController.addCartC)
router.put('/:CartId', authentication, CartController.updateCartC)
router.delete('/:CartId', authentication, CartController.deleteCartC)

module.exports = router;