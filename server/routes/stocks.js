const router = require('express').Router()
const ProductController = require('../controllers/productController.js')
const { authorization } = require('../middlewares/userAuth')

router.get('/stocks', ProductController.findAllProducts)
router.post('/stocks', authorization, ProductController.addProduct)
router.get('/stocks/:id', authorization, ProductController.findOneProduct)
router.put('/stocks/:id', authorization, ProductController.updateProduct)
router.delete('/stocks/:id', authorization, ProductController.deleteProduct)


module.exports = router