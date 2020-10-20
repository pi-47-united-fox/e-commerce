const router = require('express').Router()
const BannerController = require('../controllers/bannerController')
const auth = require('../middlewares/auth')

router.get('/', BannerController.read)

router.use(auth.authentication)
router.use(auth.authorization)

router.post('/', BannerController.create)
router.put('/:id', BannerController.update)
router.delete('/:id', BannerController.delete)

module.exports = router