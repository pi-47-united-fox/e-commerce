const route = require('express').Router()
const { CartController } = require('../controllers/index')
const {Authentication} = require('../middlewares/Authentication')




route.get('/', Authentication, CartController.getCartHandler)
route.post('/', Authentication, CartController.addCartHandler)
route.patch('/:CartId', Authentication, CartController.updateCartHandler)
route.delete('/:CartId', Authentication, CartController.deleteCartHandler)






module.exports = route