const router              = require("express").Router();
const { ProductController } = require('../controllers');
const {authentication, authorization} = require('../middlewares');

router.post('/', authentication, authorization, ProductController.addProductC)
router.get('/', ProductController.getAllProductC)
router.get('/:id', authentication, ProductController.getOneProductC)
router.put('/:id', authentication, authorization, ProductController.updateProductC)
router.delete('/:id', authentication, authorization, ProductController.deleteOneProductC)

module.exports = router;