const router = require('express').Router()
const CartController = require('../controllers/cartController')
const auth = require('../middlewares/auth')

router.use(auth.authentication)

router.post('/', CartController.create)
router.get('/', CartController.read)
router.get('/:id', CartController.readOne)
router.put('/:id', CartController.update)
router.delete('/:id', CartController.delete)

module.exports = router