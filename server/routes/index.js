const router = require('express').Router()
const UserController = require('../controllers/userController.js')
const stocksRouter = require('./stocks.js')

const { authentication, authorization } = require('../middlewares/userAuth')

router.post('/login', UserController.login)
router.post('/register', UserController.customerRegister)

router.use(authentication)
router.use(stocksRouter)



module.exports = router