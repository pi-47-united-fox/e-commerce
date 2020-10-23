const router = require('express').Router()
const UserController = require('../controllers/userController.js')
const stocksRouter = require('./stocks.js')
const cartsRouter = require('./carts.js')
const wishesRouter = require('./wishlists.js')

const { authentication } = require('../middlewares/userAuth')

router.post('/login', UserController.login)
router.post('/register', UserController.customerRegister)

router.use(authentication)
router.use(stocksRouter)
router.use(cartsRouter)
router.use(wishesRouter)


module.exports = router