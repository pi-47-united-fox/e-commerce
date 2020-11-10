const router = require("express").Router();
const CartControllers = require("../controllers/cartsControllers");
const authentification = require("../middleware/authentification");
const { authorizationCart } = require("../middleware/authorization");

router.use(authentification);
router.get("/", CartControllers.getAllCart);
router.post("/:id", CartControllers.addToCart);
router.patch("/:id", authorizationCart, CartControllers.updateQuantity);
router.delete(
  "/:id/:ProductId",
  authorizationCart,
  CartControllers.removeFromCart
);

module.exports = router;
