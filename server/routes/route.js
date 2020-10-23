const Controller = require("../controllers/controller")
const ProductController = require("../controllers/productController")
const BannerController = require("../controllers/bannerController")
const CartController = require("../controllers/cartController")
const WishlistController = require("../controllers/wishlistController")
const {authentication, authorization} = require("../middlewares/auth")
const errorHandler = require("../middlewares/errorHandler")
const router = require("express").Router()

router.post("/login", Controller.postLogin)
router.post("/register", Controller.postRegister)
router.get("/products", ProductController.getProducts)
router.get("/categories", ProductController.getCategories)
router.get("/banners", BannerController.getBanners)
router.use(authentication)
router.get("/history", CartController.getHistory)
router.post("/cart", CartController.postCart)
router.get("/carts", CartController.getCarts) 
router.delete("/cart/:productId", CartController.deleteCart)
router.post("/wishlist", WishlistController.postWishlist)
router.get("/wishlists", WishlistController.getWishlists)
router.delete("/wishlist/:productId", WishlistController.deleteWishlist)
router.get("/checkout", CartController.checkout)
router.use(authorization)
router.post("/product", ProductController.postProduct)
router.post("/banner", BannerController.postBanner)
router.put("/product/:id", ProductController.putProduct)
router.delete("/product/:id", ProductController.deleteProduct)
router.put("/banner/:id", BannerController.putBanner)
router.delete("/banner/:id", BannerController.deleteBanner)
router.use(errorHandler)

module.exports = router