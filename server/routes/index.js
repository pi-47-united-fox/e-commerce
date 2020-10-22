const route = require('express').Router()
const UserRouters = require('./UserRouters')
const ProductRouters = require('./ProductRouters')
const CartRouters = require('./CartRouter')
const { CheckoutController } = require('../controllers')
const {Authentication} = require('../middlewares/Authentication')




route.use('/', UserRouters)
route.use('/product', ProductRouters)
route.use('/cart', CartRouters)
route.post('/checkout', Authentication ,CheckoutController.checkoutHandler)





module.exports = route