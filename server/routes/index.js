const router = require("express").Router();
const userController = require("../controllers/usersController");
const RouterProduct = require("../routes/productsRouter");
const CartRouter = require("../routes/cartsRouter");
const wishlistRouter = require("../routes/wishlistRouter");
// const authentication = require('../middleware/authentification')

router.post("/login", userController.login);
router.post("/register", userController.register);

// router.use(authentication)
router.use("/products", RouterProduct);
router.use("/carts", CartRouter);
router.use('/wishlists', wishlistRouter)

module.exports = router;
