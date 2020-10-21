const router                          = require("express").Router();
const { CartController }              = require('../controllers');
const {authentication, authorizationCustomer} = require('../middlewares');

router.get('/', authentication, CartController.getAllCartC)
// router.post('/checkout', CartController.cekOutCartC)
router.post('/:ProductId', authentication, CartController.addCartC)
router.patch('/checkout', authentication, CartController.checkoutC)
router.put('/:CartId', authentication, authorizationCustomer, CartController.updateCartC)
router.delete('/:CartId', authentication, authorizationCustomer, CartController.deleteCartC)

module.exports = router;