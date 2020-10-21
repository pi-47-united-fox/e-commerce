const router = require('express').Router()
const CartController = require('../controllers/cartController')
const { customerAuthorization, customerOnlyAuthorization } = require('../middlewares/userAuth')


router.get('/carts', customerOnlyAuthorization, CartController.fetchCart)
// router.post('/carts/:productId',  customerOnlyAuthorization, CartController.addCart)
router.post('/carts/:productId', customerOnlyAuthorization, CartController.addCart2)
router.put('/carts/:id', customerAuthorization, CartController.updateCart)
router.delete('/carts/:id', customerAuthorization, CartController.deleteCart)

module.exports = router