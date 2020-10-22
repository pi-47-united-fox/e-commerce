const router = require("express").Router();
const { MainController } = require('../controllers')

router.get('/', (req, res) => {
    res.send('Server Success Running...')
})

router.post('/login', MainController.loginUserC)
router.post('/register', MainController.registerUserC)
router.use('/products', require('./product'))
router.use('/banners', require('./banner'))
router.use('/carts', require('./cart'))
router.use('/wishlist', require('./wishlist'))

module.exports = router;
