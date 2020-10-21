const router = require('express').Router()
const CartController = require('../controllers/cartController')
const { customerAuthorization } = require('../middlewares/userAuth')


router.get('/carts', customerAuthorization,  CartController.fetchCart)
router.post('/carts/:productId', customerAuthorization, CartController.addCart)
router.put('/carts/:id', customerAuthorization, CartController.updateCart)
router.delete('/carts/:id', customerAuthorization, CartController.deleteCart)

module.exports = router