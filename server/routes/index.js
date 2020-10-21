const route = require('express').Router()
const UserRouters = require('./UserRouters')
const ProductRouters = require('./ProductRouters')
const CartRouters = require('./CartRouter')




route.use('/', UserRouters)
route.use('/product', ProductRouters)
route.use('/cart', CartRouters)





module.exports = route