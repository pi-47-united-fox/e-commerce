const router = require("express").Router();
const WishlistControllers = require("../controllers/wishlistControllers");
const authentification = require("../middleware/authentification");
const { authorizationCart } = require("../middleware/authorization");

router.use(authentification);
router.get("/", WishlistControllers.getAll);
router.post("/:id", WishlistControllers.addToWishlist);
router.delete("/:id", authorizationCart, WishlistControllers.deleteWishlist);

module.exports = router;
