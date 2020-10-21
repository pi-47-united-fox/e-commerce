const router = require("express").Router()
const UserController = require("../controllers/userController")
const ProductController = require("../controllers/productController")
const CartController = require("../controllers/cartController")
const authentication = require("../middlewares/authentication")
const authorization = require("../middlewares/authorization")

router.get('/', UserController.homeController)
router.post('/register', UserController.register)
router.post('/login', UserController.login)
router.get('/products', ProductController.findAllProducts)

router.use(authentication)
router.get('/mycart', CartController.findMyCart)
router.post('/carts/:productId', CartController.addProductToMyCart)
router.delete('/carts/:productId', CartController.deleteProductFromMyCart)
router.put('/checkout', CartController.checkoutCart)

router.post('/products', authorization, ProductController.addProduct)
router.put('/products/:id', authorization, ProductController.editProduct)
router.delete('/products/:id', authorization, ProductController.deleteProduct)

module.exports = router