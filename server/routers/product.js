const router = require('express').Router()
const ProductController = require('../controllers/productController')
const auth = require('../middlewares/auth')

router.get('/', ProductController.read)

router.use(auth.authentication)
router.use(auth.authorization)

router.post('/', ProductController.create)
router.get('/:id', ProductController.readOne)
router.put('/:id', ProductController.update)
router.delete('/:id', ProductController.delete)

module.exports = router