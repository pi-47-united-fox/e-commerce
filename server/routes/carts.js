const router = require('express').Router()
const CartController = require('../controllers/cartController')
const { customerAuthorization, customerOnlyAuthorization } = require('../middlewares/userAuth')


router.get('/carts', customerOnlyAuthorization, CartController.fetchCart)
router.put('/carts/checkout', customerOnlyAuthorization, CartController.checkOut)
router.post('/carts/:productId', customerOnlyAuthorization, CartController.addCart2)
router.get('/carts/:id', customerAuthorization, CartController.fetchCartById)
router.put('/carts/:id', customerAuthorization, CartController.updateCart)
router.delete('/carts/:id', customerAuthorization, CartController.deleteCart)

module.exports = router