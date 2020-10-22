'use strict'
const router = require('express').Router()
const UserController = require('../controllers/userController.js')
const CartController = require('../controllers/cartController.js')
const ProductController = require('../controllers/productController')
const authentication = require('../middlewares/authentication')
const authorization = require('../middlewares/authorization')

router.post('/register', UserController.register)
router.post('/login', UserController.login)
router.use(authentication)
router.post('/products',ProductController.addProduct)
router.get('/products',ProductController.listProducts)
router.put('/products/:id', ProductController.updateProduct)
router.delete('/products/:id', ProductController.deleteProduct)
router.get('/cart/:productId',  CartController.addCart)
router.get('/cart/', CartController.showCarts)
router.delete('/cart/:id' ,authorization ,CartController.deleteCart)
router.put('/cart/:id', authorization, CartController.updateCart)
router.delete('/cart/product/:id',CartController.deleteCartDetail)

module.exports = router