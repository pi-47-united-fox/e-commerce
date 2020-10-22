const router = require('express').Router()
const CartController = require('../controllers/cartController')

router.get('/', CartController.getCart)
router.post('/:id', CartController.postCart)
router.delete('/:id', CartController.deleteCart)
router.patch('/:id', CartController.patchCart)

module.exports = router