const route = require("express").Router();
const { CartController } = require("../controllers/cartController");
const { authenticationCust, authorizationCust } = require("../middleware/authCust");

route.use(authenticationCust);
route.get("/", CartController.getAllCart);
route.post("/:productId", CartController.postCart);
route.put("/:id", authorizationCust, CartController.putCart);
route.delete("/:id", authorizationCust, CartController.deleteCart);

module.exports = route;
